import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AbRecognitionWaveVisual,
  AbRecognitionWaveVisualProps,
} from '../src/AbRecognitionWaveVisual';

const meta: Meta = {
  title: 'AbRecognitionWaveVisual',
  component: AbRecognitionWaveVisual,
};

const Template: Story<AbRecognitionWaveVisualProps> = args => (
  <AbRecognitionWaveVisual {...args} />
);

const Default = Template.bind({});

export default meta;
export { Default };
