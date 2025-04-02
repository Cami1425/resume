import React, { useCallback, useState } from 'react';
import { Inline, xcss, Box, Stack } from '@atlaskit/primitives';
import FileIcon from '@atlaskit/icon/core/file';
import { CertificateDoc } from './CertificateDoc';
import Lozenge from '@atlaskit/lozenge';

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

const statusLabels = {
  inprogress: 'In Progress',
  success: 'Completed',
};

export function Certificate({ title, certificate, status }) {
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
      <Stack space="space.050">
        <Inline space="space.100" alignInline="center" alignBlock="center">
          <span>{title}</span>
          {status === 'success' && <FileIcon label="File" />}
        </Inline>

        <Box>
          <Lozenge appearance={status} isBold>
            {statusLabels[status]}
          </Lozenge>
        </Box>
      </Stack>
      {showCertificate && (
        <CertificateDoc visible={showCertificate} onClick={onBlanketClicked} certificate={certificate} alt={title} />
      )}
    </Box>
  );
}
