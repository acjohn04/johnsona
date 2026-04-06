import type { Meta, StoryObj } from '@storybook/react';
import { TopAppBar } from './TopAppBar';

const meta = {
  title: 'Sections/TopAppBar',
  component: TopAppBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
