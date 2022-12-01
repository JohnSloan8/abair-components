import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

// import styles from './styles';
// import { AbClickableCardProps } from './styles';

interface AbClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  handleClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  variation: 'main' | 'app' | 'sCapp';
  borderColor?: 'primary' | 'secondary' | 'warning';
}

const styles: { [name: string]: AbClickableCardStyles } = {
  main: {
    titleVariant: 'h6',
    color: 'gray',
    padding: 2,
    bottom: 0,
    width: 390,
    height: 260,
    image:
      'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/misc/400x600_fallbackAbairImage.jpg',
  },
  app: {
    titleVariant: 'body1',
    color: 'gray',
    padding: 1,
    bottom: 0,
    width: 330,
    height: 220,
    image:
      'https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/misc/400x400_fallbackAbairImage.jpg',
  },
};

interface AbClickableCardStyles {
  titleVariant: 'h5' | 'h6' | 'body1';
  color: string;
  padding: number;
  bottom?: number;
  width: number;
  height: number;
  image: string;
}

const AbClickableCard = ({
  image,
  title,
  description,
  handleClickEvent = () => {
    console.log('clicked Card');
  },
  variation,
}: AbClickableCardProps) => {
  const style = styles[variation];
  return (
    <Box>
      <Card elevation={4} sx={{ height: style.height, width: style.width }}>
        <CardActionArea onClick={handleClickEvent}>
          <CardContent
            sx={{
              bottom: style.bottom,
              position: 'absolute',
              p: style.padding,
              zIndex: 1000,
            }}
          >
            <Typography
              gutterBottom
              variant={style.titleVariant}
              color={style.color}
            >
              {title}
            </Typography>
            <Typography variant="body2" color={style.color}>
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={image ? image : style.image}
            alt="fallback image"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export { AbClickableCard, AbClickableCardProps };
