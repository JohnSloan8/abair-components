import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbInfoLinkCard, AbInfoLinkCardProps } from '../src/AbInfoLinkCard';

const meta: Meta = {
  title: 'AbInfoLinkCard',
  component: AbInfoLinkCard,
};

const Template: Story<AbInfoLinkCardProps> = args => (
  <AbInfoLinkCard {...args} />
);

const Default = Template.bind({});

const ComingSoon = Template.bind({});

ComingSoon.args = {
  message: 'coming soon',
};

export default meta;
export { Default, ComingSoon };
