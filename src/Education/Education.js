import { Accordion } from './Accordion.js';
import { Flex, Stack, Inline, xcss, Box } from '@atlaskit/primitives';
import { novaData } from './data.js';
import { Section } from '../General/Section.js';
import { useCallback, useState } from 'react';
import { NovaInfo } from './NovaInfo.js';

const styles = xcss({
  padding: 'space.400',
  width: '100%',
});

export function Education({ onEnter }) {
  const [currentOpenAccordion, setCurrentOpenAccordion] = useState();

  const onClick = useCallback((title) => {
    setCurrentOpenAccordion(title);
  }, []);

  return (
    // <Box xcss={backgroundStyles}>
      <Section onEnter={onEnter} title="Education">
        <Flex gap="space.600" justifyContent="center">
          <Inline xcss={styles}>
            <NovaInfo />
            <Stack grow="fill" space="space.200">
              {novaData.map(({ title, content, icon }) => (
                <Accordion
                  Icon={icon}
                  title={title}
                  content={content}
                  show={currentOpenAccordion === title}
                  onClick={() => onClick(title)}
                />
              ))}
            </Stack>
          </Inline>
        </Flex>
      </Section>
    // </Box>
  );
}
