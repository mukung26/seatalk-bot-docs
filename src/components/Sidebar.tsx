import { NavLink } from 'react-router-dom';
import { CATEGORIES, docs } from '../data/docs';

export function Sidebar({ mobileOpen, onClose }: { mobileOpen?: boolean; onClose?: () => void }) {
  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-50 border-r border-slate-200">
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <span className="font-bold text-lg">SeaTalk Docs</span>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 text-slate-500">
            X
          </button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto w-full p-4">
        {CATEGORIES.map((category) => {
          const categoryDocs = docs.filter((doc) => doc.category === category);
          if (categoryDocs.length === 0) return null;
          
          return (
            <div key={category} className="mb-6">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {category}
              </h3>
              <ul className="space-y-1">
                {categoryDocs.map((doc) => (
                  <li key={doc.id}>
                    <NavLink
                      to={`/docs/${doc.id}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`
                      }
                    >
                      {doc.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-slate-200">
        <p className="text-[10px] text-slate-400 leading-tight">
          Unofficial documentation. SeaTalk is a registered trademark of its respective owner. Not affiliated with SeaTalk.
        </p>
      </div>
    </div>
  );

  return (
    <>
       {/* Desktop Sidebar */}
      <aside className="hidden md:block w-[401px] h-screen fixed top-0 left-0">
        {sidebarContent}
      </aside>
      
      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={onClose} />
          <div className="relative z-10 w-[401px] max-w-[80vw] h-full bg-white shadow-xl">
             {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
