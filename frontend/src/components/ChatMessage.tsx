import ReactMarkdown from 'react-markdown';

interface Props {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: Props) {
  if (!content) return null;

  return (
    <div className={`chat-message ${role}`}>
      {role === 'assistant' ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}
