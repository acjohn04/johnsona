import type { Meta, StoryObj } from '@storybook/react';
import { AboutHighlight } from './AboutHighlight';

const meta = {
  title: 'Components/AboutHighlight',
  component: AboutHighlight,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TeamScaling: Story = {
  args: {
    icon: 'groups',
    title: 'Team Scaling & Mentorship',
    description: 'I empower ICs to grow into technical leaders through continuous feedback, pair programming, and structured 1:1 frameworks.',
  },
};

export const Architecture: Story = {
  args: {
    icon: 'architecture',
    title: 'System Architecture',
    description: 'Building platforms, not just pages. I balance rapid product delivery with sustainable architectural patterns.',
  },
};
