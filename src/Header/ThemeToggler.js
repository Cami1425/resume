import Toggle from '@atlaskit/toggle';
import { Inline } from '@atlaskit/primitives';
import { setGlobalTheme } from '@atlaskit/tokens';

/*
setGlobalTheme({
  light: 'light',
  dark: 'dark',
  colorMode: 'light',
  typography: 'typography-modernized',
});
*/

export function ThemeToggle() {
  const onChange = (e) => {
    const dark = e.target.checked;

    setGlobalTheme({
      colorMode: dark ? 'dark' : 'light',
    });
  };

  return (
    <Inline alignBlock="center">
      <>Switch to dark</>
      <Toggle onChange={onChange} />
    </Inline>
  );
}
