import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { searchDocs } from '../data/docs';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchDocs(query);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-4">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        <div className="flex items-center px-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            className="w-full py-4 px-3 text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 rounded">
            ESC
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length > 0 && results.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              No results found for "{query}"
            </div>
          ) : (
            <ul className="py-2">
              {results.map((doc) => (
                <li key={doc.id}>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 focus:bg-slate-50 flex flex-col"
                    onClick={() => {
                      navigate(`/docs/${doc.id}`);
                      onClose();
                    }}
                  >
                    <span className="font-medium text-slate-900">{doc.title}</span>
                    <span className="text-xs text-slate-500 mt-1">{doc.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
