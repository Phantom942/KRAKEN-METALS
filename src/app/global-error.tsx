'use client';

import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-200 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-xl font-bold text-slate-100 mb-4">Erreur du serveur</h1>
          <p className="text-slate-400 mb-6">{error.message}</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
