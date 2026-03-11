import type { AnchorHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import { useContentSync } from '../hooks/useContentSync';

interface Props {
  role: 'user' | 'assistant';
  content: string;
}

const PRODUCT_LINK_RE = /^\/product\/(\d+)$/;

function ProductAwareLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { navigateToProduct } = useContentSync();
  const { href, children, ...rest } = props;

  if (href) {
    const match = href.match(PRODUCT_LINK_RE);
    if (match) {
      const productId = Number(match[1]);
      return (
        <a
          {...rest}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            // Extract text content from children for the product name
            const text = typeof children === 'string' ? children : '';
            navigateToProduct(productId, text || undefined);
          }}
        >
          {children}
        </a>
      );
    }
  }

  return <a {...rest} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function ChatMessage({ role, content }: Props) {
  if (!content) return null;

  return (
    <div className={`chat-message ${role}`}>
      {role === 'assistant' ? (
        <ReactMarkdown components={{ a: ProductAwareLink }}>{content}</ReactMarkdown>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}
