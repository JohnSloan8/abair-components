import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbMap, AbMapProps } from '../src/AbMap';

const meta: Meta = {
  title: 'AbMap',
  component: AbMap,
};

const Template: Story<AbMapProps> = args => <AbMap {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
