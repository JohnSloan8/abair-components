import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbNewsCard, AbNewsCardProps } from '../src/AbNewsCard';

const meta: Meta = {
  title: 'AbNewsCard',
  component: AbNewsCard,
  argTypes: {
    imageSrc: {
      defaultValue:
        'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/aaaa4.jpg',
    },
  },
};

const Template: Story<AbNewsCardProps> = args => <AbNewsCard {...args} />;

const Default = Template.bind({});

export default meta;
export { Default };
