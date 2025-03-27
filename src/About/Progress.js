import React from 'react';
import { Box, Grid, xcss } from '@atlaskit/primitives';
import { progressInfo } from './progressInfo';
import { Framework } from './Framework';

import ProgressBar from '@atlaskit/progress-bar';

const fatBarStyle = xcss({
  '> div,span': {
    height: '10px',
  },
});

export function LevelBar() {
  return (
    <Grid gap="space.200" alignItems="center">
      {progressInfo.map((item) => (
        <>
          <Framework title={item.title} initial={item.initial} />
          <Box xcss={fatBarStyle}>
            <ProgressBar value={item.level / 100} />
          </Box>
        </>
      ))}
    </Grid>
  );
}
