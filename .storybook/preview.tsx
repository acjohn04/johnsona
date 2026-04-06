import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../messages/en.json';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {/* Wrapper with padding so components aren't flush against the Storybook iframe border */}
          <div style={{ padding: '2rem' }}>
            <Story />
          </div>
        </ThemeProvider>
      </NextIntlClientProvider>
    )
  ]
};

export default preview;