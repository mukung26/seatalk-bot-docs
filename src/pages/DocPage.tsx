import { useParams, Navigate } from 'react-router-dom';
import { getDocById } from '../data/docs';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export function DocPage() {
  const { docId } = useParams();
  
  if (!docId) return <Navigate to="/" replace />;
  
  const doc = getDocById(docId);
  
  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center h-full pt-20">
        <h2 className="text-2xl font-bold text-slate-800">Document Not Found</h2>
        <p className="text-slate-500 mt-2">The requested documentation page does not exist.</p>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-8 px-4 md:px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-4 text-sm font-medium text-blue-600">
        {doc.category}
      </div>
      <MarkdownRenderer content={doc.content} />
    </main>
  );
}
