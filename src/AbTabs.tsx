import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from 'react';

interface AbTabsProps {
  label: string;
  color: 'primary' | 'secondary';
  value?: number;
  setter?: (val: number) => void;
  items: string[];
}

const AbTabs = ({
  label = 'test label',
  color = 'secondary',
  value = 0,
  setter = val => {
    console.log('val:', val);
  },
  items = ['speak', 'listen'],
}: AbTabsProps) => {
  const [tabVal, setTabVal] = useState(value);

  return (
    <Tabs
      onChange={(_e, val) => {
        setTabVal(val); // for Storybook to display interactivity
        setter(val); // for Application to change state
      }}
      aria-label={label}
      value={tabVal}
      textColor={color}
      indicatorColor={color}
      //   sx={{ fontStyle: 'none' }}
    >
      {items.map((t, i) => (
        <Tab key={i} label={t} />
      ))}
    </Tabs>
  );
};

export { AbTabs, AbTabsProps };
