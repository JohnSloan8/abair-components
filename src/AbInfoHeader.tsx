import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import { CenteredFlexBox } from '.';

interface AbInfoHeaderProps {
  title: string;
  color?: 'text.primary' | 'text.secondary';
  description?: string;
  heights?: number[];
  titleFonts?: ['h5', 'h6'] | ['h6', 'body1'];
  descriptionFonts?: ['h6', 'body1'] | ['body1', 'body2'];
}

function AbInfoHeader({
  title = 'Test Header',
  description = 'Test Description',
  color = 'text.primary',
  titleFonts = ['h5', 'h6'],
  descriptionFonts = ['h6', 'body1'],
}: AbInfoHeaderProps) {
  return (
    <CenteredFlexBox width="100%" maxWidth="md" px={1}>
      <Grid container direction={'column'}>
        <Typography
          color={color}
          sx={{
            typography: {
              sm: titleFonts[0],
              xs: titleFonts[1],
            },
          }}
          align="center"
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            pt={1}
            sx={{
              typography: {
                sm: descriptionFonts[0],
                xs: descriptionFonts[1],
              },
            }}
            color={color}
            align="center"
          >
            {description}
          </Typography>
        ) : null}
      </Grid>
    </CenteredFlexBox>
  );
}

export { AbInfoHeader, AbInfoHeaderProps };
