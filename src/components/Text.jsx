import { motion } from "framer-motion"
import "./Text.scss"

export default function Text() {
  const string = "La multi ani Ioana!"
  const letters = string.split("")

  const colors = ["#ce0627", "#e7406a", "#75ad1b", "#4177a3"]
  const colorCount = colors.length

  const fixedColor = "#b3153c"

  return (
    <div className="text">
      {letters.map((letter, index) => {
        const colorIndex = index % colorCount
        const letterColor = colors[colorIndex]

        const letterAnimation = {
          hidden: { y: 100, opacity: 0, color: letterColor },
          visible: { y: 0, opacity: 1, color: letterColor },
        }

        const letterAnimation2 = {
          hidden: { y: 100, x: 100, opacity: 0, scale: 0.4, color: fixedColor },
          visible: { y: 0, x: 0, opacity: 1, scale: 1.1, color: fixedColor },
        }

        return (
          <motion.span
            key={index}
            className="letter"
            initial="hidden"
            animate="visible"
            variants={index >= 13 ? letterAnimation2 : letterAnimation}
            transition={{
              duration: 1.5,
              delay: 0.6 + index * 0.05,
              repeat: Infinity,
              repeatDelay: 10,
              type: "spring",
            }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              fontSize: index >= 13 ? "65px" : "55px",
              paddingBottom: index >= 13 ? "5px" : "0",
              fontWeight: index >= 13 ? "800" : "600",
            }}
          >
            {letter}
          </motion.span>
        )
      })}
    </div>
  )
}
