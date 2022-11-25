import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbButton, AbButtonProps } from '../src/AbButton';

const meta: Meta = {
  title: 'AbButton',
  component: AbButton,
  argTypes: {
    label: {
      defaultValue: 'default button',
    },
  },
};

const Template: Story<AbButtonProps> = args => <AbButton {...args} />;

const Default = Template.bind({});

const DefaultFullWidth = Template.bind({});
DefaultFullWidth.args = {
  fullWidth: true,
};

const DefaultFullWidthFlat = Template.bind({});
DefaultFullWidthFlat.args = {
  fullWidth: true,
  borderRadius: 0,
};

const Secondary = Template.bind({});
Secondary.args = {
  label: 'secondary',
  color: 'secondary',
};

export default meta;
export { Default, DefaultFullWidth, DefaultFullWidthFlat, Secondary };
