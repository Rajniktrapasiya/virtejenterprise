import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
      <img
          src="/images/VTEJ-LOGO.png"
          alt="VTEJ Enterprise Logo"
          className={className}
      />
  );
};

export default Logo;

