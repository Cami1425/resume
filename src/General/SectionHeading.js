import React from 'react';
import { Box, xcss } from '@atlaskit/primitives';

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

const styles = xcss({
    paddingInline: '5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  });


export function SectionHeading({ title, children }) {
  return (
    <Box>
      <Box as="h1" xcss={headingStyles}>
        {title}
      </Box>
      <Box xcss={styles}>{children}</Box>
    </Box>
  );
}
