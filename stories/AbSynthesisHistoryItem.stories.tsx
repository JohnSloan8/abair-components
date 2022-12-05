import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AbSynthesisHistoryItem,
  AbSynthesisHistoryItemProps,
} from '../src/AbSynthesisHistoryItem';

const meta: Meta = {
  title: 'AbSynthesisHistoryItem',
  component: AbSynthesisHistoryItem,
};

const Template: Story<AbSynthesisHistoryItemProps> = args => (
  <AbSynthesisHistoryItem {...args} />
);

const Default = Template.bind({});
export default meta;
export { Default };
