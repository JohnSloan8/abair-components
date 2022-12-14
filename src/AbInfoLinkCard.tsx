import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Image from 'mui-image';
import { CenteredFlexBox, FlexBox } from '.';

interface AbInfoLinkCardProps {
  name: string;
  onClick: () => void;
  image: string;
  description: string;
  message: string;
  breakpointSize: string;
}

const AbInfoLinkCard = ({
  name = 'Test name',
  onClick,
  description = 'some descriptions text about what this is',
  image = 'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/applications/scealai-image.png',
  message = '',
  breakpointSize = 'xs',
}: AbInfoLinkCardProps) => {
  return (
    <Box m={{ sm: 2, xs: 1 }} sx={{ position: 'relative' }}>
      {message !== '' && (
        <CenteredFlexBox
          sx={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 1,
          }}
        >
          <Typography variant={'h4'} color={'white'}>
            {message}
          </Typography>
        </CenteredFlexBox>
      )}
      <CardActionArea onClick={onClick}>
        <Card sx={{ display: 'flex', position: 'relative' }}>
          <Grid container>
            <Grid item xs={8}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} p={1}>
              <FlexBox
                width={'100%'}
                height={'100%'}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Image
                  duration={1000}
                  height={breakpointSize === 'xs' ? 120 : 180}
                  width={breakpointSize === 'xs' ? 185 : 260}
                  easing="ease-out"
                  alt="Abair InfoLinks"
                  //   src={image !== null ? image : fallbackImage}
                  src={image !== null ? image : ''}
                  showLoading
                />
              </FlexBox>
            </Grid>
          </Grid>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export { AbInfoLinkCard, AbInfoLinkCardProps };
