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
    return progress >= 22 && progress <= 23
  }

  useEffect(() => {
    setTheMessage("Meaw", 2, 2)
    setTheMessage("Meaw Ioana. La meow ani!", 5, 4)
    setTheMessage("Chill music, me likey", 12, 3)
    setTheMessage("Uu, cuute", 17, 14)
    setTheMessage("Sa vad de mai aproape", 19, 3)
    setTheMessage("uff", 22, 2)
    setTheMessage("I am back :)", 40, 3)
    setTheMessage("Was a nice journey between the stars, but I prefer being with you", 43, 6)
    setTheMessage("I am a golden cat now", 50, 5)
    setTheMessage("Hope you don't mind me", 56, 3)
    setTheMessage("Zzz", 60, 4)
    stopLegsAnimation()
  }, [progress])

  const setTheMessage = (message, time, duration) => {
    if (Math.floor(progress) === time) {
      setMessage(message)
      setTimeout(() => {
        setMessage("")
      }, [duration * 1000])
    }
  }

  const stopLegsAnimation = () => {
    if (Math.floor(progress) > 7 && Math.floor(progress) < 18) {
      setStopLegs(true)
    } else {
      setStopLegs(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {makeHoleAppear() && (
          <motion.div className="poof" initial={{ y: 20, scale: 0.5, rotate: 0 }} animate={{ y: 0, scale: 1, rotate: 120 }} exit={{ scale: 0, y: 50 }}></motion.div>
        )}
        {checkProgressCat() && (
          <motion.div
            className="catIcon"
            initial={{ x: 0, y: 0, scale: 0.5 }}
            animate={{ x: 250, y: 0, scale: [0.9, 1, 1, 1] }}
            exit={{
              x: [250, 300, 340, 380, 380, 380, 380, 380],
              y: [0, 0, 120, 220, 220, 220, 220, 220],
              scale: [1, 1, 0.6, 0.4, 0.4, 0.7, 0.7, 0.7],
              opacity: [1, 1, 0.8, 0, 0, 0, 0, 0],
            }}
            transition={{ delay: 1, duration: 13, stiffness: 30 }}
            key="myCat1234"
          >
            {message && (
              <motion.span
                initial={{ x: -5, scale: 0.9, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 30 }}
              >
                {message}
              </motion.span>
            )}
            <CatIcon stopLegs={stopLegs} />
          </motion.div>
        )}
        {checkProgressCat2() && (
          <motion.div
            className="catIcon cat2"
            initial={{ opacity: 0, x: 50, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 2, type: "tween", stiffness: 30 }}
            key="myCat12345"
          >
            {message && (
              <motion.span
                initial={{ x: -5, y: 5, scale: 0.9, opacity: 0 }}
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 30 }}
              >
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
