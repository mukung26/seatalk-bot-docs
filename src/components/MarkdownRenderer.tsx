import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeBlock = ({ language, value }: { language: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-md bg-[#1e293b] my-4 overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors z-10 bg-slate-800 bg-opacity-80 p-1 rounded backdrop-blur-sm"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <div className="p-4 overflow-x-auto text-sm">
        <SyntaxHighlighter
           language={language}
           style={vscDarkPlus}
           PreTag="div"
           customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none hover:prose-a:text-blue-600 prose-a:text-blue-500">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children, ...props }: any) {
            if (href && href.includes('/docs/')) {
              const match = href.match(/docs\/([^/#?]+)/);
              if (match) {
                let id = match[1].replace(/-/g, '_');
                return <Link to={`/docs/${id}`} className="text-blue-600 hover:text-blue-800">{children}</Link>;
              }
            }
            if (href && href.startsWith('http')) {
               return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" {...props}>{children}</a>;
            }
            return <a href={href} className="text-blue-600 hover:text-blue-800" {...props}>{children}</a>;
          },
          img({ src, alt, ...props }: any) {
            return src ? <img src={src} alt={alt || ''} className="max-w-full rounded-lg shadow-sm" {...props} /> : null;
          },
          pre({ children }: any) {
            return <>{children}</>;
          },
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <CodeBlock language={match ? match[1] : 'text'} value={String(children).replace(/\n$/, '')} />
            ) : (
              <code {...props} className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
