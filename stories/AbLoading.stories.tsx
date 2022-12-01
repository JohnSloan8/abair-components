import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbLoading } from '../src/AbLoading';

const meta: Meta = {
  title: 'AbLoading',
  component: AbLoading,
};

const Template: Story = args => <AbLoading {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
