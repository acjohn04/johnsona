import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighPercentage: Story = {
  args: {
    name: 'React & Next.js',
    percentage: 95,
  },
};

export const MediumPercentage: Story = {
  args: {
    name: 'Docker',
    percentage: 65,
  },
};

export const LowPercentage: Story = {
  args: {
    name: 'Legacy Systems',
    percentage: 20,
  },
};
