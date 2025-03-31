import { motion } from 'motion/react';

export function AnimatedContent({ children, title, onEnter, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      onViewportEnter={(entry) => onEnter ? onEnter(title) : () => {}}
      whileInView={{
        opacity: 1,
        x: [-100, 0],
        transition: {
          delay: delay,
          duration: 1,
          easing: [0.17, 0.55, 0.55, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
