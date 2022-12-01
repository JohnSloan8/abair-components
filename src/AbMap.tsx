import Box from '@mui/material/Box';
import { blue, green } from '@mui/material/colors';
import React, { useState } from 'react';
import irelandMapData from './data/irelandMapData';
interface mapDataModel {
  name: string;
  coordinates: string;
}

interface AbMapProps {
  height?: number;
  mapData?: mapDataModel[];
  gaeltachts?: string[];
  selectedCounty?: string;
  setSelectedCounty?: (name: string) => void;
}

const AbMap = ({
  height = 400,
  mapData = irelandMapData,
  gaeltachts = ['Ulster', 'Connemara', 'Munster'],
  selectedCounty = 'Ulster',
  setSelectedCounty = () => {
    console.log('setSelectedCounty complete');
  },
}: AbMapProps) => {
  const [hoverCounty, setHoverCounty] = useState('');
  const [selectCounty, setSelectCounty] = useState(selectedCounty);

  const getMapColor = (c: mapDataModel) => {
    return gaeltachts.includes(c.name)
      ? c.name === hoverCounty
        ? [blue[900], blue[900]]
        : c.name === selectCounty
        ? [blue[800], blue[900]]
        : [blue[200], blue[400]]
      : [green[100], green[400]];
  };

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoverCounty(county) : setHoverCounty('');
  };

  const handleMouseLeave = () => {
    setHoverCounty('');
  };

  const handleClick = (county: string) => {
    if (county !== selectCounty) {
      if (gaeltachts.includes(county)) {
        setSelectCounty(county);
        setSelectedCounty(county);
      }
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <svg viewBox="0 520 450 600" height={height > 220 ? height * 0.9 : 200}>
        <g transform="scale(1.1)" onMouseLeave={() => handleMouseLeave()}>
          {mapData.map((c: mapDataModel, i: number) => (
            <g
              key={i}
              fill={getMapColor(c)[0]}
              stroke={getMapColor(c)[1]}
              opacity={gaeltachts.includes(c.name) ? 0.6 : 1}
              onMouseEnter={() => handleMouseEnter(c.name)}
              onClick={() => {
                handleClick(c.name);
              }}
              style={{ cursor: 'pointer' }}
            >
              <path
                d={c.coordinates}
                strokeWidth={gaeltachts.includes(c.name) ? '2.5' : '0.5'}
              />
            </g>
          ))}
        </g>
      </svg>
    </Box>
  );
};

export { AbMap, AbMapProps };
