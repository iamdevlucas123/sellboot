import { motion } from "framer-motion"

const text = "Learn logic with PHP and JavaScript"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const letter = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
}

export function MainTextTitle() {
  return (
    <motion.div
      className="py-3 overflow-hidden text-center text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} className="inline-block" variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function MainTextButton({ onLogin = () => {} }) {
  return (
    <button
      type="button"
      onClick={onLogin}
      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Ir para o Lab
    </button>
  )
}

export default function MainText({ onLogin = () => {} }) {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-35 space-y-6">
      <MainTextTitle />
      <MainTextButton onLogin={onLogin} />
    </main>
  )
}
