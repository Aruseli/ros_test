import React from 'react';


export const Space = ({unit}:{unit?: number}) => {
  return <div style={{height: `${unit * 2}em`, width: '100%'}} />
}