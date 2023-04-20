import { Card, CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Image from 'mui-image';
import { CenteredFlexBox } from '.';
import { SportsRugbySharp } from '@mui/icons-material';

interface AbNewsCardProps {
  title: string;
  onClick: () => void;
  imageSrc: string;
  date: string;
  blurb: string;
  cardWidth?: number;
  imageHeight?: string;
  imageWidth?: string;
  textHeight?: string;
}

const AbNewsCard = ({
  title = 'Test Title',
  blurb = 'Test blurb',
  date = '2022-11-02',
  imageSrc = '',
  cardWidth = 300,
  imageHeight = '200px',
  imageWidth = '300px',
  textHeight = '120px',
  onClick = () => {
    console.log('news clicked');
  },
}: AbNewsCardProps) => {
  return (
    <Card sx={{ boxShadow: 2, width: cardWidth, height: '100%' }}>
      <CardActionArea
        onClick={onClick}
        sx={{ backgroundColor: 'secondary.main' }}
      >
        <CenteredFlexBox
          sx={{ position: 'relative' }}
          borderBottom={4}
          borderColor={'secondary.dark'}
        >
          <Image
            duration={1000}
            height={imageHeight}
            width={imageWidth}
            easing="ease-out"
            alt={`news Image`}
            src={imageSrc}
            bgColor="#fff"
            showLoading
          />
          <Box
            width={'100%'}
            sx={{
              position: 'absolute',
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,1))',
            }}
          >
            <Typography align="center" p={1} variant="h6" color="#fff">
              {title}
            </Typography>
          </Box>
        </CenteredFlexBox>
        <CardContent>
          <Box height={textHeight}>
            <Typography
              align="center"
              color="background.default"
              variant="body2"
            >
              {date}
            </Typography>
            <Typography mt={0.5} variant="body1">
              {blurb}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { AbNewsCard, AbNewsCardProps };
