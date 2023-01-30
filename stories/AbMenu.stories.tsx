import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbMenu, AbMenuProps } from '../src/AbMenu';

const meta: Meta = {
  title: 'AbMenu',
  component: AbMenu,
};

const Template: Story<AbMenuProps> = args => <AbMenu {...args} />;

const Default = Template.bind({});

Default.args = { name: 'Bat Menu' };

export default meta;
export { Default };
