import { useState } from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? '70vw' : '0',
          opacity: isAnimating ? 1 : 0.3,
          scale: isAnimating ? 1.2 : 1,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.3 }}
        transition={{ type: 'spring', stiffness: 60, damping: 40 }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  )
}

export default Box1
