import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbTextField, AbTextFieldProps } from '../src/AbTextField';

const meta: Meta = {
  title: 'AbTextField',
  component: AbTextField,
  argTypes: {
    onChange: {
      action: 'TextField-changed',
    },
  },
};

const Template: Story<AbTextFieldProps> = args => <AbTextField {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
