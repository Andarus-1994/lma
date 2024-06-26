import { motion } from "framer-motion"

export default function CatIcon() {
  const headAnimation = {
    hidden: { y: 0 },
    visible: { y: [0, -1, 0], transition: { repeat: Infinity, duration: 0.5 } },
  }
  return (
    <svg viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.024">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <path d="M19.5,22H14a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h5.5A1.5,1.5,0,0,1,21,20.5h0A1.5,1.5,0,0,1,19.5,22Z" style={{ fill: "#f4f5de" }}></path>
        <path d="M11,10h6a0,0,0,0,1,0,0V22a0,0,0,0,1,0,0H8a4,4,0,0,1-4-4V17A7,7,0,0,1,11,10Z" style={{ fill: "#f4f5de" }}></path>
        <path d="M12,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,12,22Z" style={{ fill: "#f4f5de" }}></path>
        <path d="M16,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,16,22Z" style={{ fill: "#f4f5de" }}></path>
        <path d="M14,14h0a2.99994,2.99994,0,0,1-3-3V9h6v2A2.99994,2.99994,0,0,1,14,14Z" style={{ fill: "#f4f5de" }}></path>
        <path d="M13,4,10,6V2.2071a.5.5,0,0,1,.8536-.3535Z" style={{ fill: "#ffb3b5" }}></path>
        <path d="M15,4l3,2V2.2071a.5.5,0,0,0-.8536-.3535Z" style={{ fill: "#ffb3b5" }}></path>
        <path d="M14,11h0a4,4,0,0,1-4-4V4h8V7A4.00005,4.00005,0,0,1,14,11Z" style={{ fill: "#f4f5de" }}></path>
        <circle cx="12.25" cy="6.75" r="0.75" style={{ fill: "#f4f5de" }}></circle>
        <circle cx="16" cy="6.75" r="0.75" style={{ fill: "#f4f5de" }}></circle>
      </g>
    </svg>
  )
}
