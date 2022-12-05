import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbRecognition, AbRecognitionProps } from '../src/AbRecognition';
import { AbTextField } from '../src';

const meta: Meta = {
  title: 'AbRecognition',
  component: AbRecognition,
};

const Template: Story<AbRecognitionProps> = args => <AbRecognition {...args} />;

const Default = Template.bind({});
Default.args = {
  textbox: (
    <AbTextField
      onChange={e => {
        console.log('e:', e);
      }}
      label={'write here'}
      rows={3}
      value={'test'}
    />
  ),
};

export default meta;
export { Default };
