import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { AtlassianNavigation, PrimaryButton } from '@atlaskit/atlassian-navigation';
import { Box, xcss } from '@atlaskit/primitives';
import { useSpring } from 'motion/react'

import { ThemeToggle } from './ThemeToggler';
import { HeaderTitle } from './HeaderTitle';

const style = xcss({
  position: 'sticky',
  top: 0,
  zIndex: 10,
});

const TABS = [
  { name: 'About me', key: 'about-me' },
  { name: 'Education', key: 'education' },
  { name: 'Certificates', key: 'certificates' },
  { name: 'Skills', key: 'skills' },
  { name: 'Portfolio', key: 'portfolio' },
  { name: 'Contact', key: 'contact' },
];

export function Header({ activeSection, onNavigation }) {
  const [selectedTab, setSelectedTab] = useState('About me');

  useEffect(() => {
    if (activeSection && selectedTab !== activeSection) {
      setSelectedTab(activeSection);
    }
  }, [activeSection]);

  return (
    <>
      <HeaderTitle />
      <Box xcss={style}>
        <AtlassianNavigation
          label="site"
          primaryItems={TABS.map((tab) => (
            <PrimaryButton onClick={() => {
              setSelectedTab(tab.name);
              onNavigation(tab.key);
            }} isHighlighted={selectedTab === tab.name}>
              {tab.name}
            </PrimaryButton>
          ))}
          renderHelp={ThemeToggle}
        />
      </Box>
    </>
  );
}
