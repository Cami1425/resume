import React from 'react';
import { xcss, Box } from '@atlaskit/primitives';
import Button from '@atlaskit/button/new';
import DownloadIcon from '@atlaskit/icon/core/download';
import { useCallback } from 'react';
import { token } from '@atlaskit/tokens';

const buttonStyle = xcss({
  border: `1px solid ${token('color.background.neutral.bold')}`,
  borderRadius: '3px',
  width: 'fit-content',
  boxShadow: 'elevation.shadow.raised',
});

export function DownloadButton() {
  const download = useCallback(() => {
    const link = document.createElement('a');
    link.setAttribute('download', 'CamilaLopez-Resume.pdf');
    link.href = '/CamilaLopezResume.pdf';
    // add element to dom
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }, []);

  return (
    <Box xcss={buttonStyle}>
      <Button appearance="subtle" iconBefore={DownloadIcon} onClick={download}>
        Download Resume
      </Button>
    </Box>
  );
}
