import { Card, CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Image from 'mui-image';
import { CenteredFlexBox } from '.';

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
        sx={{ backgroundColor: 'rgba(227, 242, 253,1)' }}
      >
        <CenteredFlexBox sx={{ position: 'relative' }}>
          <Image
            duration={1000}
            height={imageHeight}
            width={imageWidth}
            easing="ease-out"
            alt={`news Image`}
            src={imageSrc}
            bgColor="rgba(227, 242, 253,1)"
            showLoading
          />
          <Box
            width={'100%'}
            sx={{
              position: 'absolute',
              bottom: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(227, 242, 253,1))',
            }}
          >
            <Typography
              sx={{
                position: 'relative',
                bottom: -24,
              }}
              align="center"
              p={1}
              variant="h6"
            >
              {title}
            </Typography>
          </Box>
        </CenteredFlexBox>
        <CardContent>
          <Box height={textHeight}>
            <Typography align="center" color="text.secondary" variant="body2">
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
