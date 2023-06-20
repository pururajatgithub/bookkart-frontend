import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'examples/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {}