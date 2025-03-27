import React, { useCallback, useState } from 'react';
import { Inline, xcss, Box } from '@atlaskit/primitives';
import FileIcon from '@atlaskit/icon/core/file';
import { CertificateDoc } from './CertificateDoc';

const boxButtonStyles = xcss({
  color: 'color.text',
  // backgroundColor: 'color.background.neutral',
  backgroundColor: '  color.background.input.pressed',
  boxShadow: 'elevation.shadow.raised',
  borderWidth: 'border.width',
  borderStyle: 'solid',
  borderColor: 'color.border',
  padding: 'space.200',
  borderRadius: 'border.radius.100',
  transitionDuration: '200ms',
  listStyle: 'none',
  '::before': {
    paddingInlineEnd: 'space.050',
  },
  '::after': {
    paddingInlineStart: 'space.050',
  },
  ':hover': {
    backgroundColor: 'color.background.accent.gray.subtler.hovered',
    boxShadow: 'elevation.shadow.overlay',
    color: 'color.text.inverse',
    cursor: 'pointer',
  },
});

export function Certificate({ title, certificate }) {
  const [showCertificate, setShowCertificate] = useState(false);

  const onButtonClick = useCallback(() => {
    setShowCertificate(true);
  }, [setShowCertificate]);

  const onBlanketClicked = useCallback(
    (e) => {
      setShowCertificate(false);
      e.stopPropagation();
    },
    [setShowCertificate]
  );

  return (
    <Box as="button" xcss={boxButtonStyles} onClick={onButtonClick}>
      <Inline space="space.100" alignInline="center" alignBlock="center">
        <span>{title}</span>
        <FileIcon label="File" />
      </Inline>

      {showCertificate && (
        <CertificateDoc visible={showCertificate} onClick={onBlanketClicked} certificate={certificate} alt={title} />
      )}
    </Box>
  );
}
