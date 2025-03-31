import { xcss, Stack, Box } from '@atlaskit/primitives';
import { motion } from 'motion/react';
// import { SectionHeading } from './SectionHeading';

const styles = xcss({
  paddingInline: '5rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
});

const wrapperStyles = xcss({
  height: 'calc(100vh - 56px)',
  scrollSnapAlign: 'start',
  scrollMarginTop: '56px',
  display: 'flex',
  flexDirection: 'column',
});

const headingStyles = xcss({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 'space.600',
  fontSize: '42px',
  position: 'relative',

  ':after': {
    width: '150px',
    height: '1px',
    display: 'block',
    content: '""',
    position: 'absolute',
    marginTop: '55px',
    left: '48%',
    marginLeft: '-50px',
    backgroundColor: 'color.background.accent.gray.subtler.pressed',
  },
  ':before': {
    width: '28px',
    height: '5px',
    display: 'block',
    content: '""',
    position: 'absolute',
    marginTop: '53px',
    left: '50%',
    marginLeft: '-14px',
    backgroundColor: 'color.background.accent.gray.subtler.pressed',
  },
});

export function Section({ title, children, onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      onViewportEnter={(entry) => onEnter(title)}
      whileInView={{
        opacity: 1,
        x: [-100, 0],
        transition: {
          duration: 1,
          easing: [0.17, 0.55, 0.55, 1],
        },
      }}
    >
      <Box xcss={wrapperStyles}>
        {/* <SectionHeading title={title} children={children}></SectionHeading> */}
        <Box as="h1" xcss={headingStyles}>
          {title}
        </Box>
        <Box xcss={styles}>{children}</Box>
      </Box>
    </motion.div>
  );
}
