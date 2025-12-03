import logo_js from "../../assets/JavaScript-logo.jpg"
import logo_php from "../../assets/PHP-logo (1).svg"

export default function Description() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400" />
          <div className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-34 items-center justify-center border rounded-5x2 bg-amber-100">
              <img src={logo_js} alt="JavaScript logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">JavaScript</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                JavaScript traz interatividade para a web: responde a ações do usuário, atualiza conteúdo em tempo real,
                conversa com servidores e cria experiências dinâmicas. Hoje está em navegadores, apps mobile, servidores,
                desktops e até IoT.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-amber-50 px-5 py-1 text-amber-800">Front-end</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">Full-stack</span>
              </div>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500" />
          <div className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-28 items-center justify-center border rounded-5x2 bg-sky-100">
              <img src={logo_php} alt="PHP logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">PHP</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                PHP roda no servidor gerando páginas dinâmicas e potentes. É base de grande parte da web moderna, usado
                em CMSs, aplicações de negócios e plataformas como WordPress e Wikipedia.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-800">Back-end</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">Web apps</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
