import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbInfoHeader, AbInfoHeaderProps } from '../src/AbInfoHeader';

const meta: Meta = {
  title: 'AbInfoHeader',
  component: AbInfoHeader,
  argTypes: {
    description: {
      defaultValue: 'test description',
    },
  },
};

const Template: Story<AbInfoHeaderProps> = args => <AbInfoHeader {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
