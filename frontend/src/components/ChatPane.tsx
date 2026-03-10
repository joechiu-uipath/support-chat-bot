import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect, useCallback } from 'react';
import ChatMessage from './ChatMessage';
import ToolCallBubble from './ToolCallBubble';
import { useContentSync } from '../hooks/useContentSync';
import { useI18n, useT } from '../i18n/context';
import { slashCommands, quickActions } from '../i18n/translations';
import { getPersonaQuickActions, personaChatWelcome } from '../lib/persona-copy';
import type { CustomerSummary } from '../lib/api';

interface Props {
  pendingMessage: string | null;
  onPendingConsumed: () => void;
  currentUser: CustomerSummary | null;
}

export default function ChatPane({ pendingMessage, onPendingConsumed, currentUser }: Props) {
  const { highlightProduct } = useContentSync();
  const { locale } = useI18n();
  const t = useT();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [commandFilter, setCommandFilter] = useState('');
  const [selectedCommandIdx, setSelectedCommandIdx] = useState(0);

  const chatBody = {
    language: locale,
    ...(currentUser && {
      userId: currentUser.id,
      userName: currentUser.name,
      userEmail: currentUser.email,
      userPhone: currentUser.phone,
      userCity: currentUser.city,
      userType: currentUser.customer_type,
      userPersona: currentUser.persona,
    }),
  };

  const { messages, status, sendMessage, error } = useChat({
    onToolCall: ({ toolCall }) => {
      if (toolCall.toolName === 'highlight_product') {
        const result = toolCall.input as { product_id: number; reason: string };
        highlightProduct(result.product_id, result.reason);
      }
    },
    onError: (err) => {
      console.error('[chat] Stream error:', err);
    },
  });

  useEffect(() => {
    if (pendingMessage) {
      sendMessage({ text: pendingMessage }, { body: chatBody });
      onPendingConsumed();
    }
  }, [pendingMessage, sendMessage, onPendingConsumed]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  const isStreaming = status === 'streaming' || status === 'submitted';

  // Slash command logic
  const commands = slashCommands[locale];
  const filteredCommands = commandFilter
    ? commands.filter(
        (c) =>
          c.command.toLowerCase().includes(commandFilter.toLowerCase()) ||
          c.label.toLowerCase().includes(commandFilter.toLowerCase())
      )
    : commands;

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      if (value.startsWith('/')) {
        setShowCommands(true);
        setCommandFilter(value);
        setSelectedCommandIdx(0);
      } else {
        setShowCommands(false);
        setCommandFilter('');
      }
    },
    []
  );

  const executeCommand = useCallback(
    (prompt: string) => {
      setInput('');
      setShowCommands(false);
      setCommandFilter('');
      if (!isStreaming) {
        sendMessage({ text: prompt }, { body: chatBody });
      }
    },
    [isStreaming, sendMessage, chatBody]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (showCommands && filteredCommands.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedCommandIdx((i) => (i + 1) % filteredCommands.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedCommandIdx((i) => (i - 1 + filteredCommands.length) % filteredCommands.length);
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        executeCommand(filteredCommands[selectedCommandIdx].prompt);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowCommands(false);
        return;
      }
    }

    // Submit on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input }, { body: chatBody });
    setInput('');
    setShowCommands(false);
  };

  const handleQuickAction = (prompt: string) => {
    if (!isStreaming) {
      sendMessage({ text: prompt }, { body: chatBody });
    }
  };

  const persona = currentUser?.persona || 'family-shopper';
  const pills = getPersonaQuickActions(persona, locale, quickActions[locale]);
  const welcome = personaChatWelcome[persona]?.[locale];

  return (
    <div className="chat-pane">
      <div className="chat-header">
        <div className="chat-header-dot" />
        <div>
          <div className="chat-header-title">{t('chat.title')}</div>
          <div className="chat-header-status">{t('chat.status')}</div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && !error && (
          <div className="chat-welcome">
            <div className="chat-welcome-icon">🦐</div>
            <h3>{welcome?.title || t('chat.welcomeTitle')}</h3>
            <span className="chat-welcome-line" />
            <p>{welcome?.body || t('chat.welcomeBody')}</p>
            <div className="chat-quick-actions">
              {pills.map((pill) => (
                <button
                  key={pill.label}
                  className="chat-quick-pill"
                  onClick={() => handleQuickAction(pill.prompt)}
                  disabled={isStreaming}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => {
          if (msg.role !== 'user' && msg.role !== 'assistant') return null;

          const elements: React.ReactNode[] = [];
          let textBuffer = '';

          const flushText = (key: string) => {
            if (textBuffer) {
              elements.push(
                <ChatMessage
                  key={key}
                  role={msg.role as 'user' | 'assistant'}
                  content={textBuffer}
                />
              );
              textBuffer = '';
            }
          };

          for (let i = 0; i < msg.parts.length; i++) {
            const part = msg.parts[i] as Record<string, unknown>;
            if (part.type === 'text') {
              textBuffer += part.text as string;
            } else if (
              part.type === 'dynamic-tool' ||
              (typeof part.type === 'string' && part.type.startsWith('tool-'))
            ) {
              flushText(`${msg.id}-text-${i}`);
              const toolName = (part.toolName as string) || (part.type as string).replace(/^tool-/, '');
              const args = (part.input as Record<string, unknown>) || {};
              const output = part.output as unknown;
              const state = part.state as string;
              elements.push(
                <ToolCallBubble
                  key={`${msg.id}-tool-${i}`}
                  toolName={toolName}
                  args={args}
                  result={output}
                  state={state === 'output-available' || state === 'result' ? 'result' : 'call'}
                />
              );
            }
          }
          flushText(`${msg.id}-text-end`);

          if (elements.length === 0) return null;
          return <div key={msg.id}>{elements}</div>;
        })}

        {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="chat-typing">
            <div className="chat-typing-dot" />
            <div className="chat-typing-dot" />
            <div className="chat-typing-dot" />
          </div>
        )}

        {error && (
          <div className="chat-error">{error.message}</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        {/* Slash command menu */}
        {showCommands && filteredCommands.length > 0 && (
          <div className="chat-command-menu" ref={commandMenuRef}>
            {filteredCommands.map((cmd, i) => (
              <button
                key={cmd.command}
                className={`chat-command-item ${i === selectedCommandIdx ? 'active' : ''}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  executeCommand(cmd.prompt);
                }}
                onMouseEnter={() => setSelectedCommandIdx(i)}
              >
                <span className="chat-command-name">{cmd.command}</span>
                <span className="chat-command-label">{cmd.label}</span>
              </button>
            ))}
          </div>
        )}
        <form className="chat-input-form" onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            className="chat-input"
            rows={3}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('chat.placeholder')}
            disabled={isStreaming}
          />
          <button className="chat-send-btn" type="submit" disabled={isStreaming || !input.trim()}>
            {t('chat.send')}
          </button>
        </form>
      </div>
    </div>
  );
}
