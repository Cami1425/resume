import { xcss, Stack, Box, media } from '@atlaskit/primitives';
import { AnimatedContent } from './AnimatedContent';

const styles = xcss({
  paddingInline: '5rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  [media.above.xl]: {
    paddingInline: '15rem',
  },
});

const wrapperStyles = xcss({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '150px',
  paddingBottom: 'space.500',
});

const headingStyles = xcss({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 'space.600',
  fontSize: '42px',
  position: 'relative',

  ':after': {
    width: '150px',
    height: '1px',
    display: 'block',
    content: '""',
    position: 'absolute',
    marginTop: '55px',
    left: '48%',
    marginLeft: '-50px',
    backgroundColor: 'color.background.accent.gray.subtler.pressed',
  },
  ':before': {
    width: '28px',
    height: '5px',
    display: 'block',
    content: '""',
    position: 'absolute',
    marginTop: '53px',
    left: '50%',
    marginLeft: '-14px',
    backgroundColor: 'color.background.accent.gray.subtler.pressed',
  },
});

const darkStyle = xcss({
  backgroundColor: 'color.background.accent.gray.bolder.pressed',
  color: 'color.text.inverse',
});

const grayStyle = () => {};

export function Section({ children, title, onEnter, mode }) {
  const testId = title.replace(' ', '-').toLowerCase();
  return (
    <Box xcss={[mode === 'dark' && darkStyle, mode === 'gray' && grayStyle]}>
      <AnimatedContent onEnter={onEnter} title={title}>
        <Stack testId={testId} xcss={wrapperStyles} space="space.500">
          <Box id={testId} as="h1" xcss={[headingStyles, mode === 'dark' && darkStyle, mode === 'gray' && grayStyle]}>
            {title}
          </Box>
          <AnimatedContent delay={0.3}>
            <Box xcss={styles}>{children}</Box>
          </AnimatedContent>
        </Stack>
      </AnimatedContent>
    </Box>
  );
}
