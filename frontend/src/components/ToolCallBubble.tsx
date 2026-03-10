import { useState } from 'react';
import { useT } from '../i18n/context';

interface ToolCallProps {
  toolName: string;
  args: Record<string, unknown>;
  result?: unknown;
  state: 'call' | 'result';
}

const TOOL_ICONS: Record<string, string> = {
  search_products: '\u{1F50D}',
  check_inventory: '\u{1F4E6}',
  lookup_order: '\u{1F4CB}',
  lookup_customer: '\u{1F464}',
  highlight_product: '\u{2728}',
  get_recommendations: '\u{1F4A1}',
};

export default function ToolCallBubble({ toolName, args, result, state }: ToolCallProps) {
  const t = useT();
  const [expanded, setExpanded] = useState(false);
  const icon = TOOL_ICONS[toolName] || '\u{1F527}';
  const label = t(`tool.${toolName}`) || toolName;
  const isLoading = state === 'call';

  const summary = formatSummary(toolName, args);

  return (
    <div className={`tool-call-bubble ${isLoading ? 'loading' : 'done'}`}>
      <button className="tool-call-header" onClick={() => setExpanded(!expanded)}>
        <span className="tool-call-icon">{icon}</span>
        <span className="tool-call-label">{label}</span>
        {summary && <span className="tool-call-summary">{summary}</span>}
        {isLoading && <span className="tool-call-spinner" />}
        <span className={`tool-call-chevron ${expanded ? 'open' : ''}`}>{'\u25B8'}</span>
      </button>
      {expanded && (
        <div className="tool-call-detail">
          <div className="tool-call-section">
            <div className="tool-call-section-label">Input</div>
            <pre>{JSON.stringify(args, null, 2)}</pre>
          </div>
          {result != null && (
            <div className="tool-call-section">
              <div className="tool-call-section-label">Result</div>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function formatSummary(toolName: string, args: Record<string, unknown>): string {
  switch (toolName) {
    case 'search_products':
      return args.query ? `"${args.query}"` : '';
    case 'check_inventory':
      return args.product_id ? `#${args.product_id}` : '';
    case 'lookup_order':
      return args.order_id ? `#${args.order_id}` : '';
    case 'lookup_customer':
      return (args.email || args.name || '') as string;
    case 'highlight_product':
      return args.product_id ? `#${args.product_id}` : '';
    case 'get_recommendations':
      return args.preference ? `"${args.preference}"` : '';
    default:
      return '';
  }
}
