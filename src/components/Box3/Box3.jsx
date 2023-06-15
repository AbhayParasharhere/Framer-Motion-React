import { motion } from 'framer-motion'

const Box3 = () => {
  const boxVariants = {
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    hidden: {
      x: '-100vw',
    },
  }

  const listVariants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -80,
      opacity: 0,
    },
  }

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map(item => (
          <motion.li
            key={item}
            className="boxItem"
            variants={listVariants}
          ></motion.li>
        ))}
      </motion.div>
    </div>
  )
}

export default Box3
