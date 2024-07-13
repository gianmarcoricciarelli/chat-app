import { ChatApp } from './components/ChatApp/ChatApp';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <ChatApp />
    </ThemeProvider>,
);
