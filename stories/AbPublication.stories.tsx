import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbPublication, AbPublicationProps } from '../src/AbPublication';

const meta: Meta = {
  title: 'AbPublication',
  component: AbPublication,
};

const Template: Story<AbPublicationProps> = args => <AbPublication {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
