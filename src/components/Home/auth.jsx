import { Link } from "react-router-dom"

export default function AuthModal({ open = false, onClose = () => {} }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-label="Fechar"
        >
          &#x2715;
        </button>

        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Login</p>
          <h2 className="text-xl font-bold text-gray-900">Entrar na plataforma</h2>
          <p className="text-sm text-gray-600">Continue com sua conta preferida para salvar progresso.</p>
        </div>

        <div className="mt-6">
          <form className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Type your best Email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            <Link
              to="/lab"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-800 bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:shadow transition text-center"
            >
              Continue
            </Link>
          </form>
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:-translate-y-0.5 hover:shadow transition"
          >
            <span className="text-xs font-mono border border-slate-300 rounded px-2 py-1">G</span>
            Continuar com Google
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:shadow transition"
          >
            <span className="text-xs font-mono border border-slate-600 rounded px-2 py-1 bg-slate-800 text-white">GH</span>
            Continuar com GitHub
          </button>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          Ao continuar, voce concorda com os termos e politicas da plataforma.
        </div>
      </div>
    </div>
  )
}
