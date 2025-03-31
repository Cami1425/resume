import { motion } from 'motion/react';
import { Box, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 0.7, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

const styles = xcss({
  fontFamily: 'monospace',
  fontSize: '24px',
  whiteSpace: 'pre',
})

export const Typewriter = ({ text, ...rest }) => (
  <motion.p key={text} variants={sentenceVariants} initial="hidden" animate="visible" {...rest}>
    {text.split('').map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants} style={{ fontSize: '40px', fontFamily: 'monospace', backgroundColor: token('elevation.surface.sunken')}}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);
