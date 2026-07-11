import type { HTMLMotionProps } from 'motion/react'
import { motion, useReducedMotion } from 'motion/react'

type ScrollRevealProps = HTMLMotionProps<'section'> & {
  delay?: number
}

export function ScrollReveal({ children, delay = 0, ...sectionProps }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      {...sectionProps}
      initial={reduceMotion ? false : { opacity: 0, y: 56, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -12% 0px' }}
      transition={{ delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
