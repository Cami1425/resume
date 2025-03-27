import React from 'react';
import { Box, Inline, xcss, Text } from '@atlaskit/primitives';

const iconStyles = xcss({
  backgroundColor: 'color.background.accent.gray.bolder',
  color: 'white',
  border: 'neutral',
  padding: 'space.100',
  width: '2.8rem',
  height: '2.8rem',
  borderStyle: 'solid',
  borderRadius: '3px',
  borderWidth: 'border.width',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 'large',
});

export function Framework({ title, initial }) {
  return (
    <Inline space="space.150" alignBlock="center">
      <Box xcss={iconStyles} backgroundColor="color.background.neutral">
        {initial}
      </Box>
      <Text size="large">{title}</Text>
    </Inline>
  );
}
