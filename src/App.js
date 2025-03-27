import React, { useState } from 'react';
import '@atlaskit/css-reset';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Education } from './Education/Education';
import { Certificates } from './Certificates/Certificates';
import { Skills } from './Skills/Skills';
import { setGlobalTheme } from '@atlaskit/tokens';
import { Portfolio } from './Portfolio/Portfolio';

import { Stack, Box, xcss } from '@atlaskit/primitives';

setGlobalTheme({
  light: 'light',
  dark: 'dark',
  colorMode: 'light',
  typography: 'typography-modernized',
});

function App() {
  const [activeSection, setActiveSection] = useState();
  const onChange = (title) => {
    setActiveSection(title);
  };

  return (
    <Box xcss={xcss({ scrollSnapType: 'y proximity', height: '100vh', overflowY: 'auto', overflowX: 'hidden' })}>
      <Header activeSection={activeSection} />
      <Stack space="space.500">
        <About onEnter={onChange} />
        <Education onEnter={onChange} />
        <Certificates onEnter={onChange} />
        <Skills onEnter={onChange} />
        <Portfolio onEnter={onChange} />
      </Stack>
    </Box>
  );
}

export default App;
