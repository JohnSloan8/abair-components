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
  color: 'warning.light',
};

const Synthesis = Template.bind({});
Synthesis.args = {
  textbox: <AbTextField />,
  color: 'secondary.light',
};

export default meta;
export { Default, Synthesis };
