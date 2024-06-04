import React, { useEffect, useRef, useState } from "react"
import "./App.css"
import FloatingBaloon from "./components/FloatingBaloon"
import Text from "./components/Text"
import Box from "./components/Box"
import { createRoot } from "react-dom/client"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCakeCandles, faHeart, faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons"
import { useGalaxyStore } from "./store/useGalaxyStore.js"
import Final from "./components/Final.jsx"

function App() {
  const galaxyState = useGalaxyStore((state) => state.galaxy)
  const containerRef = useRef(null)
  const prevCoordsRef = useRef({ x: 0, y: 0 })

  const popIcons = (event) => {
    const light = containerRef.current
    if (!light) return

    const coords = { x: event.clientX, y: event.clientY }
    const distance = calculateDistance(prevCoordsRef.current, coords)
    if (distance > 50) {
      const star = document.createElement("span")
      const root = createRoot(star)
      root.render(<FontAwesomeIcon icon={getRandomIcon()} />)
      star.classList.add("star")
      light.append(star)

      if (star) {
        const lightRect = light.getBoundingClientRect()
        star.style.left = coords.x - lightRect.left + "px"
        star.style.top = coords.y - lightRect.top + "px"
        star.style.color = getRandomColor()
        star.style.animationName = getRandomAnimation()
        setTimeout(() => {
          star.remove()
        }, 750)
      }
      prevCoordsRef.current = coords
    }
  }

  function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x
    const dy = point1.y - point2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  function getRandomColor() {
    const colors = ["#eb31c3", "#ec0d32", "#e74173"]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  function getRandomAnimation() {
    const animations = ["fade-in-star1", "fade-in-star2", "fade-in-star3"]
    const randomIndex = Math.floor(Math.random() * animations.length)
    return animations[randomIndex]
  }

  function getRandomIcon() {
    const icons = [faCakeCandles, faStar, faHeart, faFaceSmileBeam]
    const randomIndex = Math.floor(Math.random() * icons.length)
    return icons[randomIndex]
  }

  const [final, setFinal] = useState(false)
  useEffect(() => {
    if (galaxyState) setTimeout(() => setFinal(true), 23000)
  }, [galaxyState])
  const boxVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <motion.div
      className="container"
      ref={containerRef}
      initial={{ "--grade": "0deg" }}
      animate={{ "--grade": "360deg" }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      onMouseMove={popIcons}
    >
      {galaxyState && (
        <motion.div
          className="galaxy"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(100% at 50% 50%)" }}
          transition={{ duration: 25, type: "spring", stiffness: 2 }}
        >
          {" "}
          <div className="planet"></div>
        </motion.div>
      )}
      <div>test</div>
      <Text />
      {!galaxyState && (
        <>
          <FloatingBaloon x={[1800, -500]} y={[-500, -1200]} colorNumber={0} text={"La multi ani"} />
          <FloatingBaloon x={[2233, -200]} y={[-800, -1200]} colorNumber={1} text="yeey" />
          <FloatingBaloon x={[2700, 0]} y={[-1200, -1200]} colorNumber={2} text="happy youu" />
          <FloatingBaloon x={[2800, 550]} y={[-150, -1200]} colorNumber={1} rotateNumber={1} text="yuppy" />
          <FloatingBaloon x={[2300, -500]} y={[-900, -700]} colorNumber={0} text="yay" />
          <FloatingBaloon x={[2600, -1000]} y={[-800, 200]} colorNumber={3} text="missed" />
        </>
      )}
      <AnimatePresence>{final && <Final />}</AnimatePresence>
      <motion.div initial={final ? "visible" : "hidden"} animate={final ? "hidden" : "visible"} variants={boxVariants} transition={{ duration: 3 }}>
        <Box />
      </motion.div>
    </motion.div>
  )
}

export default App
