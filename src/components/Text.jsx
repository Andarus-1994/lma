import { motion } from "framer-motion"
import "./Text.scss"

export default function Text() {
  const string = "La multi ani Ioana!"
  const letters = string.split("")

  const colors = ["#ec0d32", "#a70b32", "#75ad1b", "#4177a3"]
  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const generateRandomColor = () => {
    return colors[generateNumber(0, colors.length - 1)]
  }

  const fixedColor = "#b3153c"

  return (
    <div className="text">
      {letters.map((letter, index) => {
        const letterAnimation = {
          hidden: { y: 100, opacity: 0, color: generateRandomColor() },
          visible: { y: 0, opacity: 1, color: generateRandomColor() },
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
