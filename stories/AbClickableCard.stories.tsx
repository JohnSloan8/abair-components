import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbClickableCard, AbClickableCardProps } from '../src/AbClickableCard';

const meta: Meta = {
  title: 'AbClickableCard',
  component: AbClickableCard,
  argTypes: {
    description: {
      defaultValue: 'test description',
    },
    image: {
      defaultValue:
        'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/misc/400x600_fallbackAbairImage_1.png?t=2022-12-01T10%3A26%3A31.619Z',
    },
    title: {
      defaultValue: 'Test Title',
    },
    variation: {
      defaultValue: 'main',
    },
  },
};

const Template: Story<AbClickableCardProps> = args => (
  <AbClickableCard {...args} />
);

const Default = Template.bind({});

export default meta;
export { Default };
