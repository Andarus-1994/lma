import "./FloatingBaloon.scss"
import { motion } from "framer-motion"
import { BsFillBalloonHeartFill } from "react-icons/bs"
import React, { memo } from "react"

const FloatingBaloon = (props) => {
  const { x, y, colorNumber, rotateNumber, text } = props
  const colors = ["pink", "red", "orange", "bluey"]
  const rotate = ["rotate-left", "rotate-right"]
  const textPos = ["left", "right"]

  const handlePop = (e) => {
    e.target.classList.add("popped")
    setTimeout(() => {
      e.target.classList.remove("popped")
    }, [2500])
  }

  const generateNumber = () => {
    return Math.floor(Math.random() * (1 - 0 + 1) + 0)
  }
  console.log("test")
  return (
    <div className="containerBaloon">
      <motion.div
        className={"baloon " + colors[colorNumber] + " " + rotate[rotateNumber ? rotateNumber : generateNumber()]}
        animate={{ x: x[1], y: y[1] }}
        initial={{ x: x[0], y: y[0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          repeatDelay: 5,
          damping: 100,
          ease: "linear",
          type: "spring",
        }}
        onClick={handlePop}
      >
        <BsFillBalloonHeartFill />
        <span className={textPos[generateNumber()]}>{text}</span>
      </motion.div>
    </div>
  )
}

export default memo(FloatingBaloon)
