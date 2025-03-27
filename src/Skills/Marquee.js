import React from 'react';
import { Inline, xcss, Box, Stack } from '@atlaskit/primitives';
import { motion } from 'motion/react';

const styles = xcss({
  paddingBlock: 'space.400',
  fontSize: '25px',
  width: '100%',
  textWrap: 'noWrap',
});

const ContMarqueeStyles = xcss({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'flex',
  width: '100%',
  position: 'relative',
  backgroundImage: 'linear-gradient(45deg, #cecece, transparent), ',
});

const Card = ({ children }) => {
  const cardStyles = xcss({
    display: 'flex',
    width: '300px',
    height: '120px',
    textWrap: 'wrap',
    textAlign: 'center',
    lineHeight: '30px',
    paddingInline: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    borderRadius: '8px',
    backgroundColor: 'color.background.accent.gray.subtle.pressed',
    boxShadow: 'elevation.shadow.raised',
  });

  return <Box xcss={cardStyles}>{children}</Box>;
};

export function Marquee() {
  return (
    <Box xcss={ContMarqueeStyles}>
      <Box
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 100000,
          width: '100%',
          backgroundImage:
            'linear-gradient(270deg, hsla(0, 0%, 100%, 0) 70%,rgb(255, 255, 255)), linear-gradient(270deg, rgb(255, 255, 255),hsla(0, 0%, 100%, 0) 30%)',
        }}
      ></Box>
      <Stack>
        <motion.div
          style={{ whiteSpace: 'nowrap', willChange: 'transform' }}
          animate={{ x: [0, -1360] }}
          transition={{
            duration: 14,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Inline space="space.500">
            <Inline space="space.500" xcss={styles}>
              <Card>Web Development</Card>
              <Card>Responsive Web Design</Card>
              <Card>Asynchronous Programming</Card>
              <Card>Object Oriented Programming</Card>
            </Inline>
            <Inline space="space.500" xcss={styles}>
              <Card>Web Development</Card>
              <Card>Responsive Web Design</Card>
              <Card>Asynchronous Programming</Card>
              <Card>Object Oriented Programming</Card>
            </Inline>
          </Inline>
        </motion.div>
      </Stack>
    </Box>
  );
}
