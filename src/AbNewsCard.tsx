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
  imageHeight?: number;
  imageWidth?: number;
  textHeight?: number;
}

const AbNewsCard = ({
  title = 'Test Title',
  blurb = 'Test blurb',
  date = '2022-11-02',
  imageSrc = '',
  cardWidth = 300,
  imageHeight = 140,
  imageWidth = 140,
  textHeight = 200,
  onClick = () => {
    console.log('news clicked');
  },
}: AbNewsCardProps) => {
  return (
    <Card sx={{ boxShadow: 3, width: cardWidth, height: '100%' }}>
      <CardActionArea onClick={onClick}>
        <CenteredFlexBox>
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
        </CenteredFlexBox>
        <CardContent>
          <Box height={textHeight}>
            <Typography variant="body2">{date}</Typography>
            <Typography gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {blurb}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { AbNewsCard, AbNewsCardProps };
