import { motion } from "framer-motion"
import "./Final.scss"

export default function Final() {
  const string =
    "Yeey, ai ajuns la final :P <br/> Nu sunt expert in a scrie mesaje de 'la multi ani', dar sper ca de ziua ta, si restul zilelor sa te distrezi si sa faci ceea ce iti place. You are the best :)  <br/> La Muuuulti Ani! <br/>  <br/> PS: Sper ca ti-a placut totusi si ca nu a fost prea cringe animatia x.X <br/> Also some hs later?"
  const words = string.split(/\s+/)
  const letterAnimation = {
    hidden: { y: 70, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }
  return (
    <div className="finalText">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        transition={{
          duration: 2.5,
          delay: 0.6,
          type: "spring",
        }}
      >
        Yeey, ai ajuns la final 😊{" "}
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        transition={{
          duration: 2.5,
          delay: 0.6 + 2,
          type: "spring",
        }}
      >
        Stiu ca esti la munca azi, dar sper sa ai o zi smechera si plina de surpize, caci azi esti star of the show, desi eu nu cred ca esti doar azi 😊
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        transition={{
          duration: 2.5,
          delay: 0.6 + 5,
          type: "spring",
        }}
        style={{ marginTop: "40px" }}
      >
        🎉🎉 La muuuuulti ani!!! 🎉🎉
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        transition={{
          duration: 2.5,
          delay: 0.6 + 9,
          type: "spring",
        }}
        style={{ marginTop: "40px" }}
      >
        PS: Sper ca ti-a placut totusi si ca nu a fost prea cringe animatia 🙈
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={letterAnimation}
        transition={{
          duration: 2.5,
          delay: 0.6 + 14,
          type: "spring",
        }}
        style={{ marginTop: "40px" }}
      >
        Some HS later tho ? <span>🎮</span>{" "}
      </motion.div>
    </div>
  )
}
