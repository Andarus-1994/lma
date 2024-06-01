import { useEffect, useState } from "react"
import { star as Star } from "../assets/icons"
import "./Stars.scss"
import { motion, AnimatePresence } from "framer-motion"

export default function Stars(props) {
  const { songProgress } = props
  const [progress, setProgress] = useState(songProgress * 100)
  useEffect(() => {
    setProgress(songProgress * 100)
  }, [songProgress])

  const positionItems = () => {
    const container = document.querySelector(".stars")
    const items = container.querySelectorAll(".starCircle")
    const radius = container.offsetWidth / 2
    const angleIncrement = (2 * Math.PI) / items.length
    items.forEach((item, index) => {
      const angle = index * angleIncrement
      const x = radius * Math.cos(angle)
      const y = radius * Math.sin(angle)
      item.style.left = `${radius + x}px`
      item.style.top = `${radius + y}px`
    })
  }

  useEffect(() => {
    if (checkProgress()) positionItems()
  }, [progress])
  const checkProgress = () => {
    return (progress >= 16.5 && progress <= 30) || (progress >= 49.5 && progress <= 63) || (progress >= 79 && progress <= 90)
  }
  return (
    <motion.div className="stars" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, type: "just", ease: "linear" }}>
      <AnimatePresence>
        {checkProgress() &&
          Array.from({ length: Math.floor(progress) > 30 ? 9 : 7 }, (_, i) => (
            <motion.span
              className="starCircle"
              initial={{ scale: 0, x: -200 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: -200 }}
              key={i}
              transition={{ delay: 0.2 * i, duration: 1.5, type: "tween", stiffness: 30 }}
            >
              <motion.span initial={{ rotate: 0 }} animate={{ rotate: [0, -360, 0], x: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity, type: "tween" }}>
                {" "}
                <Star />
              </motion.span>
            </motion.span>
          ))}
      </AnimatePresence>
    </motion.div>
  )
}
