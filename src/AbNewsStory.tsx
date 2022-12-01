import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AbNewsStoryProps {
  title: string;
  date: string;
  blurb: string;
  body: string;
  onClick: () => void;
  image: string;
}

function AbNewsStory({
  title = 'Test Title',
  date = '20-12-2022',
  blurb = 'blurb about the story',
  image = 'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/speech-recognition-image.jpeg',
  onClick = () => {
    console.log('navigating to another page');
  },
}: AbNewsStoryProps) {
  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <CardActionArea onClick={onClick}>
        <Card sx={{ display: 'flex' }}>
          <Box p={1}>
            <CardMedia
              component="img"
              sx={{ width: 180, minWidth: 180, maxWidth: 180 }}
              image={image}
              alt="news story image"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="body2">{date}</Typography>
              <Typography variant="h6">{title}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {blurb}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </CardActionArea>
    </Box>
  );
}

export { AbNewsStory, AbNewsStoryProps };
