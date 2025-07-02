
import React from 'react';

interface StarBackgroundProps {
  className?: string;
  opacity?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ className = "w-40 h-40", opacity = 0.5 }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <polygon 
        points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" 
        fill="rgba(0, 0, 0, 0.8)"
      />
    </svg>
  );
};

export default StarBackground;
