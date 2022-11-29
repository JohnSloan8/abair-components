import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbProgressBar, AbProgressBarProps } from '../src/AbProgressBar';

const meta: Meta = {
  title: 'AbProgressBar',
  component: AbProgressBar,
};

const Template: Story<AbProgressBarProps> = args => <AbProgressBar {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
