import demoVideo from "../assets/demonstrate_video.mp4"

export default function DemonstrateVideo() {
  return (
    <section className="px-6 pb-14 mt-0">
      <div className="relative mx-auto flex max-w-5xl flex-col gap-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl ring-1 ring-slate-100 backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400" />
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">0:45</span>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/90 shadow-inner">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10" />
          <video
            src={demoVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            className="relative aspect-video h-full w-full object-cover pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}
