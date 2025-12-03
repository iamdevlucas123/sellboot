export default function Output({ value }) {
  return (
    <div className="flex-1 max-w-sm h-[80vh] rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Saida</p>
      <div className="mt-3 h-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 whitespace-pre-wrap overflow-y-auto">
        {value || "Nenhuma saida ainda."}
      </div>
    </div>
  )
}
