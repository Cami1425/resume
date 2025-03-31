import React from 'react';
import { Box, Inline, xcss, Stack } from '@atlaskit/primitives';
import { Section } from '../General/Section';

import { motion } from 'motion/react';

import { ReactComponent as ReactLogo } from './react.svg';
import { ReactComponent as CssLogo } from './css.svg';
import { ReactComponent as BootstrapLogo } from './bootstrap.svg';
import { ReactComponent as HtmlLogo } from './html.svg';
import { ReactComponent as JavascriptLogo } from './javaScript.svg';
import { ReactComponent as WordpressLogo } from './wordpress.svg';
import { ReactComponent as SqlLogo } from './sql.svg';
import { ReactComponent as GitLogo } from './git.svg';
import { ReactComponent as JestLogo } from './jest.svg';

import { Marquee } from './Marquee';

const logos = [
  <ReactLogo />,
  <CssLogo />,
  <BootstrapLogo />,
  <HtmlLogo />,
  <JavascriptLogo />,
  <WordpressLogo />,
  <SqlLogo />,
  <GitLogo />,
  <JestLogo />,
];

const motionStyle = {
  width: 50,
  height: 50,
  display: 'flex',
};

const boxStyles = xcss({
  boxShadow: 'elevation.shadow.overlay',
  border: 'border.radius',
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  padding: 'space.200',
});

const AnimatedIcon = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay * 0.8,
        duration: 0.4,
        scale: {
          delay: delay * 0.8,
          type: 'spring',
          visualDuration: 0.8,
          bounce: 0.8,
        },
      }}
      style={motionStyle}
    >
      {children}
    </motion.div>
  );
};

const Logos = () => (
  <Box xcss={boxStyles}>
    <Inline space="space.400">
      {logos.map((logo, index) => (
        <AnimatedIcon delay={index}>{logo}</AnimatedIcon>
      ))}
    </Inline>
  </Box>
);

export function Skills({ onEnter }) {
  return (
    <Section onEnter={onEnter} title="Skills">
      <Stack space="space.300">
        <Marquee />
        <Inline alignInline="center">
          <Logos />
        </Inline>
      </Stack>
    </Section>
  );
}
