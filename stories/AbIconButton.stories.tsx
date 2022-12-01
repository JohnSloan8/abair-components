import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbIconButton, AbIconButtonProps } from '../src/AbIconButton';
import FemaleIcon from '@mui/icons-material/Female';

const meta: Meta = {
  title: 'AbIconButton',
  component: AbIconButton,
};

const Template: Story<AbIconButtonProps> = args => <AbIconButton {...args} />;

const Default = Template.bind({});

Default.args = {
  icon: FemaleIcon,
  color: 'secondary',
};

export default meta;
export { Default };
