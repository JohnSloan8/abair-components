import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbNewsStory, AbNewsStoryProps } from '../src/AbNewsStory';

const meta: Meta = {
  title: 'AbNewsStory',
  component: AbNewsStory,
};

const Template: Story<AbNewsStoryProps> = args => <AbNewsStory {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
