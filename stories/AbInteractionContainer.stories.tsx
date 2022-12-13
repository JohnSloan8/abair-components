import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbTextField } from '../src';
import {
  AbInteractionContainer,
  AbInteractionContainerProps,
} from '../src/AbInteractionContainer';

const meta: Meta = {
  title: 'AbInteractionContainer',
  component: AbInteractionContainer,
};

const Template: Story<AbInteractionContainerProps> = args => (
  <AbInteractionContainer {...args} />
);

const Default = Template.bind({});
Default.args = {
  textbox: <AbTextField />,
  variation: 'recognition',
};

const Synthesis = Template.bind({});
Synthesis.args = {
  textbox: <AbTextField />,
  variation: 'rsynthesis',
};

export default meta;
export { Default, Synthesis };
