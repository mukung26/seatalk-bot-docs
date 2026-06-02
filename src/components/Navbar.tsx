import { Menu, Search, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SearchModal } from './SearchModal';

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="flex h-16 items-center px-4 md:px-6">
          <button onClick={onMenuClick} className="mr-4 md:hidden text-slate-500">
             <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end md:justify-end">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors w-full md:w-64"
            >
              <Search className="w-4 h-4" />
              <span>Search documentation...</span>
              <span className="hidden md:inline-block ml-auto text-xs font-semibold bg-white px-1.5 rounded text-slate-400">
                ⌘K
              </span>
            </button>
          </div>
          <div className="ml-4 flex items-center gap-4">
             <a
               href="https://github.com"
               target="_blank"
               rel="noreferrer"
               className="text-slate-500 hover:text-slate-900 transition-colors"
             >
               <Github className="w-5 h-5" />
             </a>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
