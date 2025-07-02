import React from 'react';

interface DomeLogoProps {
  className?: string;
  fill?: string;
}

const DomeLogo: React.FC<DomeLogoProps> = ({ className = "w-32 h-24", fill = "white" }) => {
  return (
    <img 
      src="/logos/dome-krem.svg"
      alt="DOME Logo"
      className={className}
      style={{
        filter: fill !== "#cec3a3" ? `brightness(0) saturate(100%) invert(${fill === "white" ? "100%" : "0%"})` : "none"
      }}
    />
  );
};

export default DomeLogo;
