import React from 'react';
import { Grid, xcss, Text, Stack, Box } from '@atlaskit/primitives';
import { media } from '@atlaskit/primitives/responsive';

import { Certificate } from './Certificate';
import { courseInfo } from './courseInfo';
import { Section } from '../General/Section';

const responsiveStyles = xcss({
  [media.above.xxs]: { gridTemplateColumns: 'repeat(1, 1fr)' },
  [media.above.xs]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [media.above.sm]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [media.above.lg]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});

export function Certificates({ onEnter }) {
  return (
    <Box>
      <Section onEnter={onEnter} title="Certificates" mode='dark'>
        <Stack space="space.400">
          <Text size="large" color="color.text.inverse">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Grid xcss={responsiveStyles} gap="space.200" alignItems="center">
            {courseInfo.map(({ title, certificate }) => (
              <Certificate title={title} certificate={certificate} />
            ))}
          </Grid>
        </Stack>
      </Section>
    </Box>
  );
}
