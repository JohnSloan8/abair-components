import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbPopup, AbPopupProps } from '../src/AbPopup';

const meta: Meta = {
  title: 'AbPopup',
  component: AbPopup,
};

const Template: Story<AbPopupProps> = args => <AbPopup {...args} />;

const Default = Template.bind({});

const SingleButtonAgree = Template.bind({});
SingleButtonAgree.args = {
  borderColor: 'primary.main',
  buttons: [['ok', 'primary']],
};

export default meta;
export { Default, SingleButtonAgree };
