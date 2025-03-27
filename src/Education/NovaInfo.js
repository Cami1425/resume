import React from 'react';
import { Box, Stack, Flex, xcss, Text } from '@atlaskit/primitives';
import Heading from '@atlaskit/heading';
import { ReactComponent as Hat } from './hat.svg';

const diamond = xcss({
  width: '22rem',
  height: '22rem',
  // backgroundColor: 'color.background.input.pressed',
  backgroundColor: 'color.background.accent.gray.subtle.pressed',
  left: '50%',
  position: 'absolute',
  transform: 'rotate(-45deg)',
  transformOrigin: '0 100%',
  zIndex: '-100',
});

// const textStyles = xcss({
//   zIndex: '100000',
// });

export const NovaInfo = () => (
  <Box xcss={xcss({ position: 'relative', width: '100%' })}>
    <Box xcss={diamond} />
    <Stack space="space.300" alignInline="center">
      <Heading size="large">Northern Virginia Community College</Heading>
      <Flex justifyContent="center">
        <Hat />
      </Flex>

      <Stack space="space.100" alignInline="center">
        <Text size="large">Graduation Honors: Summa Cum Laude (with highest honors)</Text>
        <Text size="large">2021 - 2024</Text>
        <Text size="large">AAS-Information Systems Technology Major</Text>
        <Text size="large">CSC-Web Design and Development Certificate</Text>
        <Text size="large">GPA: 3.9</Text>
      </Stack>
    </Stack>
  </Box>
);
