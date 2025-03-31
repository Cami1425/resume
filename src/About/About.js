import { Box, Flex, Stack, Text, xcss } from '@atlaskit/primitives';
import { Section } from '../General/Section';
import { LevelBar } from './Progress';
import { DownloadButton } from './DownloadButton';

const style = xcss({
  width: '50%',
  textAlign: 'justify',
  padding: 'space.400',
});

export function About({ onEnter }) {
  return (
    <Section onEnter={onEnter} title="About me">
      <Flex gap="space.600">
        <Stack space="space.200" xcss={style}>
          <Box>
            <Text size="large">
              Enthusiastic Information System Technology recent graduate from Northern Virginia Community College seeking
              to leverage academic knowledge in an industry career. Eager to learn new skills, and contribute in a dynamic
              environment with interpersonal relationships. I am looking for growing opportunities that will help to
              develop and enlarge my career profile. I believe continuous learning is the key to success.
            </Text>
          </Box>

          <Box style={{ justifyContent: 'center', display: 'flex' }}>
            <DownloadButton />
          </Box>
        </Stack>
        <Box xcss={style}>
          <LevelBar />
        </Box>
      </Flex>
    </Section>
  );
}
