import { Stack, Box, xcss } from '@atlaskit/primitives';
import Blanket from '@atlaskit/blanket';
import CloseIcon from '@atlaskit/icon/core/close';

const iframeStyle = xcss({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
  zIndex: '100000000',
  position: 'relative',
});

export function ProjectOverlay({ onClose, url }) {
  return (
    <Blanket isTinted>
      <Box xcss={iframeStyle}>
        <Stack space="space.200">
          <Box style={{ width: '1000px', display: 'flex', justifyContent: 'end' }}>
            <Box onClick={onClose}>
              <CloseIcon label="Close" />
            </Box>
          </Box>
          <Box xcss={iframeStyle}>
            <iframe width={1000} height={600} src={url} style={{ backgroundColor: 'white' }}></iframe>
          </Box>
        </Stack>
      </Box>
    </Blanket>
  );
}
