import React from 'react';
import { Box, xcss, Stack, Flex } from '@atlaskit/primitives';
import { Typewriter } from './Typewriter';
import Heading from '@atlaskit/heading';
import { motion } from 'motion/react';
import Image from '@atlaskit/image';

const flexStyle = xcss({
  backgroundColor: 'color.background.accent.gray.subtler',
  // backgroundImage: `url(${process.env.PUBLIC_URL}/images/code.jpg)`,
  backgroundSize: 'cover',
  gap: '130px',
  paddingTop: 'space.300',
});

const headingStyle = xcss({
  height: '20rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const subheadingStyle = xcss({
  color: 'color.text.subtle',
  marginTop: 'space.100',
});

const transition = {
  duration: 0.8,
  delay: 3.5,
  ease: [0, 0.71, 0.2, 1.01],
};

export function HeaderTitle() {
  return (
    <Flex xcss={flexStyle} justifyContent="center">
      <Stack xcss={headingStyle} testId="headings">
        <Heading size="xxlarge">
          <Typewriter text="Hello, my name is Camila Lopez" />
        </Heading>
        <Box as="h2" xcss={subheadingStyle}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={transition}>
            I am a Web Developer
          </motion.div>
        </Box>
      </Stack>
      <Box paddingInline="space.400">
        <Image src={process.env.PUBLIC_URL + '/images/CamilaLopez.png'} width="200rem" />
      </Box>
    </Flex>
  );
}
