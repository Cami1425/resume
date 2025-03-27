import React from 'react';
import { Box, xcss } from '@atlaskit/primitives';
import Blanket from '@atlaskit/blanket';
import Image from '@atlaskit/image';

const styles = xcss({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function CertificateDoc({ visible, onClick, certificate, alt }) {
  return (
    <Blanket isTinted={visible}>
      <Box onClick={onClick} xcss={styles}>
        <Image width={700} src={process.env.PUBLIC_URL + certificate} alt={alt}></Image>
      </Box>
    </Blanket>
  );
}
