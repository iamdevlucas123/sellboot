import defaultAvatar from "../assets/profile_photo.jpeg"

export default function Profile({
  name = "Lucas Borges",
  role = "Software Analyst",
  tech = ["JavaScript", "PHP", "React", "Laravel"],
  github = "https://github.com/iamdevlucas123",
  location = "Florianópois, Brasil",
  about = "Apaixonado por computação",
  avatar = defaultAvatar,
}) {
  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start gap-5">
          <img
            src={avatar}
            alt={`Foto de ${name}`}
            className="h-24 w-24 rounded-2xl object-cover shadow"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-600">{role}</p>
                <p className="text-xs text-gray-500">{location}</p>
              </div>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-black"
              >
                GitHub
              </a>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{about}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
