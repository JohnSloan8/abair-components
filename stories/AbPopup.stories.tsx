import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbPopup, AbPopupProps } from '../src/AbPopup';

const meta: Meta = {
  title: 'AbPopup',
  component: AbPopup,
};

const Template: Story<AbPopupProps> = args => <AbPopup {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
