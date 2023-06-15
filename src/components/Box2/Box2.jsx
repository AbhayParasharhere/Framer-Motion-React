import { useState } from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: 30,
          bottom: 10,
          right: 20,
          left: -20,
        }}
      ></motion.div>
    </div>
  )
}

export default Box2
