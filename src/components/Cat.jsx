import { useEffect, useState } from "react"
import CatIcon from "./CatIcon"
import CatIcon2 from "./CatIcon2"
import "./Cat.scss"
import { motion, AnimatePresence } from "framer-motion"

export default function Cat(props) {
  const { songProgress } = props
  const [progress, setProgress] = useState(songProgress * 100)
  const [message, setMessage] = useState("")
  const [stopLegs, setStopLegs] = useState(false)
  useEffect(() => {
    setProgress(songProgress * 100)
  }, [songProgress])

  const checkProgressCat = () => {
    return progress >= 2 && progress <= 20.5
  }

  const checkProgressCat2 = () => {
    return progress >= 37.5
  }

  const makeHoleAppear = () => {
    return progress >= 21.5 && progress <= 22.3
  }

  useEffect(() => {
    setTheMessage("Meaw", 2, 2)
    setTheMessage("Meaw Ioana. La meow ani!", 5, 5)
    setTheMessage("Chill music, me likey", 11, 5)
    setTheMessage("Uu, cuute", 17, 14)
    setTheMessage("Sa vad de mai aproape", 19, 3)
    setTheMessage("uff", 21, 2)
    setTheMessage("I am back :)", 40, 4)
    setTheMessage("Been to space, between stars", 44, 50)
    setTheMessage("Was nice, but I still like it here more", 48, 50)
    setTheMessage("With You", 50, 3)
    setTheMessage("Also, I am golden now", 55, 5)
    setTheMessage("But I am still a cat...", 60, 3)
    setTheMessage("Yaawn, gonna sleep", 64, 10)
    setTheMessage("Zzzz", 66, 3)
    setTheMessage("Zz zz", 72, 3)
    setTheMessage("Zzz", 83, 5)
    stopLegsAnimation()
  }, [progress])

  const setTheMessage = (message, time, duration) => {
    if (Math.floor(progress) === time) {
      setMessage(message)
      setTimeout(() => {
        setMessage("")
      }, duration * 1000)
    }
  }

  const stopLegsAnimation = () => {
    if (Math.floor(progress) > 6 && Math.floor(progress) < 18) {
      setStopLegs(true)
    } else {
      setStopLegs(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {makeHoleAppear() && (
          <motion.div
            className="poof"
            initial={{ y: 20, scale: 0.5, rotate: 0 }}
            animate={{ y: 0, scale: 1, rotate: 120 }}
            exit={{ scale: 0, y: 50, rotate: 0 }}
            transition={{ type: "spring" }}
          >
            <div className="planet"></div>
          </motion.div>
        )}
        {checkProgressCat() && (
          <motion.div
            className="catIcon"
            initial={{ x: 0, y: 0, scale: 0.5 }}
            animate={{ x: [0, 0, 250], y: 0, scale: [0.9, 1, 1, 1] }}
            exit={{
              x: [250, 300, 340, 380, 380, 380, 380, 380],
              y: [0, 15, 120, 220, 220, 220, 220, 220],
              scale: [1, 1, 0.6, 0.4, 0.4, 0.7, 0.7, 0.7],
              opacity: [1, 1, 0.8, 0, 0, 0, 0, 0],
            }}
            transition={{ delay: 0.5, duration: 13, stiffness: 30 }}
            key="myCat1234"
          >
            {message && (
              <motion.span initial={{ x: -5, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", stiffness: 30 }}>
                {message}
              </motion.span>
            )}
            <CatIcon stopLegs={stopLegs} />
          </motion.div>
        )}
        {checkProgressCat2() && (
          <motion.div
            className="catIcon cat2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2, type: "tween", stiffness: 30 }}
            key="myCat12345"
          >
            {message && (
              <motion.span initial={{ x: -2, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", stiffness: 30 }}>
                {message}
              </motion.span>
            )}
            <CatIcon2 />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
