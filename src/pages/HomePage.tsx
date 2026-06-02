import { Link } from 'react-router-dom';
import { docs } from '../data/docs';

export function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight sm:text-6xl mb-6">
          SeaTalk Bot Platform
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Everything you need to build, deploy, and manage conversational bots for SeaTalk. Start automating workflows today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/docs/introduction"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <button
            onClick={() => {
              // We dispatch a custom event to open search from navbar
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
            }}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Search Docs
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
           <h2 className="text-xl font-bold text-slate-900 mb-3">Quick Start</h2>
           <p className="text-slate-600 mb-4">
             Get your bot up and running in minutes. Learn how to authenticate and send your first message.
           </p>
           <Link to="/docs/quick-start" className="text-blue-600 font-medium hover:underline">
             Read guide &rarr;
           </Link>
        </div>
        <div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
           <h2 className="text-xl font-bold text-slate-900 mb-3">API Reference</h2>
           <p className="text-slate-600 mb-4">
             Detailed documentation of all endpoints, event types, and object schemas.
           </p>
           <Link to="/docs/api-reference" className="text-blue-600 font-medium hover:underline">
             View API &rarr;
           </Link>
        </div>
      </div>
    </main>
  );
}
