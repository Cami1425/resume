import React, { useEffect } from 'react';
import { Box, Inline, xcss } from '@atlaskit/primitives';
import { useCallback } from 'react';
import { IconButton } from '@atlaskit/button/new';
import ChevronDownIcon from '@atlaskit/icon/utility/chevron-down';
import ChevronUpIcon from '@atlaskit/icon/utility/chevron-up';

const styles = xcss({
  border: '1px solid',
  borderColor: 'color.border',
  display: 'flex',
  width: '80%',
  padding: 'space.100',
  cursor: 'pointer',
  flexDirection: 'column',
  transition: '1.2s',
  boxShadow: 'elevation.shadow.raised',
  // backgroundColor: 'color.background.neutral.subtle.pressed',
});

const closedStyles = xcss({
  maxHeight: '50px',
  ':hover': {
    backgroundColor: 'color.background.neutral.hovered',
  },
});

const openStyles = xcss({
  maxHeight: '300px',
  backgroundColor: 'color.background.accent.gray.bolder',
  color: 'white',
});

const titleStyles = xcss({
  marginTop: '0',
});

export const Accordion = ({ title, content, show, onClick, Icon }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
    onClick();
  }, [setOpen, open]);

  useEffect(() => {
    if (open !== show) {
      setOpen(show);
    }
  }, [show]);

  const conditionalStyle = open ? openStyles : closedStyles;

  return (
    <Box onClick={handleClick} xcss={[styles, conditionalStyle]}>
      <Inline spread="space-between">
        <Inline alignBlock="center" space="space.100">
          <Icon />
          <Box as="h4" xcss={[open && openStyles, titleStyles]}>
            {title}
          </Box>
        </Inline>
        <IconButton appearance="subtle" icon={open ? ChevronUpIcon : ChevronDownIcon} />
      </Inline>
      {open && <p>{content}</p>}
    </Box>
  );
};
