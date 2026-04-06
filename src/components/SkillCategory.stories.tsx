import type { Meta, StoryObj } from '@storybook/react';
import { SkillCategory } from './SkillCategory';

const meta = {
  title: 'Components/SkillCategory',
  component: SkillCategory,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkillCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: '01',
    title: 'Frontend',
    skills: [
      { name: 'React & Next.js', percentage: 95 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'CSS Architecture', percentage: 98 },
    ],
  },
};
