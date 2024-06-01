import { motion } from "framer-motion"

export default function CatIcon(props) {
  const { stopLegs } = props
  const legAnimation = {
    hidden: { x: 0 },
    visible: { x: [0, -1, 0], transition: { repeat: Infinity, duration: 0.5 } },
  }

  const headAnimation = {
    hidden: { y: 0 },
    visible: { y: [0, -1, 0], transition: { repeat: Infinity, duration: 0.5 } },
  }
  return (
    <>
      <svg viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.024">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title></title>
          <motion.path
            d="M16,7,13,9V5.2071a.5.5,0,0,1,.8536-.3535Z"
            style={{ fill: "#ff5357" }}
            variants={stopLegs ? "" : headAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <motion.path
            d="M18,7l3,2V5.2071a.5.5,0,0,0-.8536-.3535Z"
            style={{ fill: "#ff5357" }}
            variants={stopLegs ? "" : headAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <motion.path
            id="left-leg"
            d="M6,13H4V5A1,1,0,0,1,5,4H5A1,1,0,0,1,6,5Z"
            style={{ fill: "#ffffff" }}
            variants={stopLegs ? "" : legAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <motion.path
            id="left-foot"
            d="M5.5,22h0A1.5,1.5,0,0,1,4,20.5V13H7v7.5A1.5,1.5,0,0,1,5.5,22Z"
            style={{ fill: "#ffffff" }}
            variants={stopLegs ? "" : legAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <motion.path
            id="right-leg"
            d="M15.5,22h0A1.5,1.5,0,0,1,14,20.5V13h3v7.5A1.5,1.5,0,0,1,15.5,22Z"
            style={{ fill: "#ffffff" }}
            variants={stopLegs ? "" : legAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <motion.path
            id="right-foot"
            d="M17,19c-3-4-10-4-13,0V12c3-4,10-4,13,0Z"
            style={{ fill: "#ffffff" }}
            variants={stopLegs ? "" : legAnimation}
            initial="hidden"
            animate="visible"
          ></motion.path>
          <path d="M17,14h0a4,4,0,0,1-4-4V7h8v3A4.00005,4.00005,0,0,1,17,14Z" style={{ fill: "#ffffff" }}></path>
          <circle cx="15.25" cy="9.75" r="0.75" style={{ fill: "#fff" }}></circle>
          <circle cx="19" cy="9.75" r="0.75" style={{ fill: "#fff" }}></circle>
        </g>
      </svg>
    </>
  )
}
