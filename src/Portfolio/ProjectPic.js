import React from 'react';
import { Inline } from '@atlaskit/primitives';
import Image from '@atlaskit/image';

export function ProjectPic({ projectPic, onClick }) {
  return (
    <Inline>
      <Image width="800" src={process.env.PUBLIC_URL + projectPic} onClick={onClick}></Image>
    </Inline>
  );
}
