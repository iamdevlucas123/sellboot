import { motion } from "framer-motion"
import { button } from "framer-motion/client"

const text = "Learn PHP and JavaScript"

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

export default function MainText() {
  return (
    <main className="flex items-center justify-center px-6 py-35">
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

      <a href=""></a>

    </main>
  )
}
