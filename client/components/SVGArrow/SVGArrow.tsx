import React from 'react';

const SVGArrow = ({ className = '', color = '#2980b9' }: { className?: string, color?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="146" height="152" fill="none">
    <path d="M99.615 1.658C134.5 65.5 92.5 117 45.189 136.89" stroke={color} strokeWidth="7" strokeLinecap="round" />
    <path d="M69 142s-9-4.5-27.867-2.317c9.367-11.183 10.762-25.501 10.762-25.501" stroke={color} strokeWidth="7" strokeLinecap="round" />
  </svg>
);

export default SVGArrow;
