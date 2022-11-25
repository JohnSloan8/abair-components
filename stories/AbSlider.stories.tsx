import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbSlider, AbSliderProps } from '../src/AbSlider';
import SpeedIcon from '@mui/icons-material/Speed';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const meta: Meta = {
  title: 'AbSlider',
  component: AbSlider,
  argTypes: {
    handleChange: {
      defaultValue: () => {
        console.log('changed');
      },
    },
  },
};

const Template: Story<AbSliderProps> = args => <AbSlider {...args} />;

const Default = Template.bind({});

const Speed = Template.bind({});
Speed.args = {
  icon: SpeedIcon,
};

const SpeedLarge = Template.bind({});
SpeedLarge.args = {
  icon: SpeedIcon,
  iconSize: 'large',
};

const Pitch = Template.bind({});
Pitch.args = {
  icon: GraphicEqIcon,
};

export default meta;
export { Default, Speed, SpeedLarge, Pitch };
