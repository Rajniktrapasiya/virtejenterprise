import React from 'react';

interface LogoProps {
  className?: string;
}

const FooterLogo: React.FC<LogoProps> = ({ className }) => {
  return (
      <img
          src="/images/VTEJ-LOGO-white.png"
          alt="VTEJ Enterprise Logo"
          className={className}
      />
  );
};

export default FooterLogo;
