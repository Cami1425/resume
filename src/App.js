import React, { useCallback, useLayoutEffect, useState } from 'react';
import '@atlaskit/css-reset';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Education } from './Education/Education';
import { Certificates } from './Certificates/Certificates';
import { Skills } from './Skills/Skills';
import { setGlobalTheme } from '@atlaskit/tokens';
import { Portfolio } from './Portfolio/Portfolio';

import { Stack, Box, xcss } from '@atlaskit/primitives';
import { useSpring } from 'motion/react';

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
  const spring = useSpring(0, { damping: 500, stiffness: 1000 });

  const moveTo = useCallback((key) => {
    spring.set(window.pageYOffset, false);
    setTimeout(() => {
      const v = document.getElementById(key).offsetTop;
      spring.set(v);
    }, 50);
  }, [spring]);

  useLayoutEffect(() => {
    const unsubscribe = spring.on('change', latest => {
      window.scrollTo(0, latest);
    });
    return () => {       unsubscribe();      }
  }, [spring]);

  return (
    <Box>
      <Header activeSection={activeSection} onNavigation={moveTo} />
      <Stack space="space.1000">
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
