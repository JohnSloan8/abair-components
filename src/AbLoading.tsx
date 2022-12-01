import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

import { FullSizeCenteredFlexBox } from '.';

const AbLoading = () => {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress />
    </FullSizeCenteredFlexBox>
  );
};

export { AbLoading };
