import React from 'react';

const SeparationLine = ({position, bottom, opacity, margin, width}) => (
    <hr
      style={{
        position: position,
        bottom: bottom, 
        opacity: opacity, 
        margin: margin,
        width: width,
      }}
    />
  );

export default SeparationLine;