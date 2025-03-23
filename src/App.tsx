import '@mantine/core/styles.css';
import '@fontsource/vazirmatn';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <DirectionProvider initialDirection="rtl">
      <MantineProvider theme={theme} forceColorScheme="light">
        <Router />
      </MantineProvider>
    </DirectionProvider>
  );
}
