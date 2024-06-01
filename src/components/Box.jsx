import "./Box.scss"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfinity, faPlayCircle, faSmileBeam, faPauseCircle, faVolumeHigh, faCakeCandles } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import ReactPlayer from "react-player"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import Stars from "./Stars"
import Cat from "./Cat"

export default function Box() {
  const player = useRef(null)
  const [musicOn, setMusicOn] = useState(false)
  const [enjoyText, setEnjoyText] = useState(false)
  const [songProgress, setSongProgress] = useState(0)
  const [songVolume, setSongVolume] = useState(50)

  const playMusic = () => {
    if (player.current) {
      setEnjoyText(true)
      player.current.getInternalPlayer().playVideo()
      setMusicOn(true)
      player.current.getInternalPlayer().setVolume(songVolume)
    }
  }

  const stopMusic = () => {
    if (player.current) {
      player.current.getInternalPlayer().pauseVideo()
      setMusicOn(false)
    }
  }

  const checkProgress = (e) => {
    const { played, loaded } = e
    setSongProgress(played)
  }

  const controlVolume = (e) => {
    setSongVolume(e)
    player.current.getInternalPlayer().setVolume(e)
  }

  return (
    <motion.div
      className="box"
      initial={{ y: "120px", rotate: 20, opacity: 0 }}
      animate={{ y: "0", rotate: 0, opacity: 1 }}
      transition={{ duration: 2.5, type: "spring", stiffness: 30, delay: 2 }}
    >
      <Cat songProgress={songProgress} />
      <FontAwesomeIcon icon={faInfinity} className="funda" />
      {enjoyText && (
        <motion.h4 initial={{ y: "20px", opacity: 0 }} animate={{ y: "0", opacity: 1 }} transition={{ duration: 2, type: "spring", delay: 1 }}>
          Enjoy!
        </motion.h4>
      )}
      {musicOn ? (
        <button onClick={stopMusic}>
          <FontAwesomeIcon icon={faPauseCircle} />
        </button>
      ) : (
        <button onClick={playMusic}>
          <FontAwesomeIcon icon={faPlayCircle} />
        </button>
      )}

      <ReactPlayer url="https://www.youtube.com/watch?v=F9t607v-TDU" onProgress={checkProgress} controls={true} height={0} width={0} ref={player} />

      <Slider value={songVolume} vertical={true} className="volume" dotStyle={{ color: "red", border: "1px solid red" }} onChange={controlVolume} />

      <p className="volumeLabel">
        {songVolume}
        <FontAwesomeIcon icon={faVolumeHigh} />
      </p>

      <motion.h3 initial={{ y: "20px", rotate: 10, opacity: 0 }} animate={{ y: "0", rotate: 0, opacity: 1 }} transition={{ duration: 1.5, type: "spring", delay: 2 }}>
        A song. Sper sa iti placa! <FontAwesomeIcon icon={faSmileBeam} />
      </motion.h3>

      <FontAwesomeIcon icon={faCakeCandles} className="yourCake" />
      <Stars songProgress={songProgress} />
      <progress value={songProgress} className="progress" />
    </motion.div>
  )
}
