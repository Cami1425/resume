import React from 'react';
import { Box, Inline, xcss } from '@atlaskit/primitives';
import { useCallback } from 'react';
import { IconButton } from '@atlaskit/button/new'
import ChevronDownIcon from '@atlaskit/icon/utility/chevron-down';
import ChevronUpIcon from '@atlaskit/icon/utility/chevron-up';
import { Stack, Text } from '@atlaskit/primitives';

const styles = xcss({
    border: '1px solid',
    borderColor: 'color.border.accent.gray',
    display: 'flex',
    width: '100%',
    padding: 'space.100',
    cursor: 'pointer',
    flexDirection: 'column',
    transition: '0.4s'
});

const closedStyles = xcss({
    maxHeight: '50px',
});

const openStyles = xcss({
    maxHeight: '300px',
});

export const Accordion = ({ title, content }) => {

  const [open, setOpen] = React.useState(false);

  const onClick = useCallback(() => {
    console.log('called');
    setOpen(!open);
  }, [setOpen, open]);
  
  return (
    <Box onClick={onClick} xcss={[styles, open ? openStyles : closedStyles ]}>
        <Inline spread='space-between' >
            <Text>{title}</Text>
            <IconButton appearance='subtle' icon={open ? ChevronUpIcon : ChevronDownIcon} />
        </Inline>
        {open && <p>{content}</p>}
    </Box>
  );
}