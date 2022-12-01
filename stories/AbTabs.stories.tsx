import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbTabs, AbTabsProps } from '../src/AbTabs';

const meta: Meta = {
  title: 'AbTabs',
  component: AbTabs,
};

const Template: Story<AbTabsProps> = args => <AbTabs {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
