import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ className, textClassName = 'text-slate-800' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 100"
      className={className}
      aria-label="VTEJ Enterprise Logo"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#dcb14a' }} />
          <stop offset="100%" style={{ stopColor: '#b38b29' }} />
        </linearGradient>
        <linearGradient id="blackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4A4A4A' }} />
          <stop offset="100%" style={{ stopColor: '#1A1A1A' }} />
        </linearGradient>
      </defs>

      {/* Icon */}
      <g transform="translate(0, 5)">
        <path
          d="M50 0 L0 80 L25 80 L50 40 L75 80 L100 80 Z"
          fill="url(#blackGradient)"
        />
        <path
          d="M50 8 L13 80 L30 80 L50 48 L70 80 L87 80 Z"
          fill="url(#blackGradient)"
        />
        <path d="M55 45 H 80 V 55 H 55 Z" fill="url(#goldGradient)" />
        <path d="M55 60 H 80 V 70 H 55 Z" fill="url(#goldGradient)" />
      </g>

      {/* Text */}
      <text
        x="120"
        y="65"
        fontFamily="serif"
        fontSize="60"
        className={textClassName}
        fontWeight="bold"
        fill="currentColor"
      >
        VTEJ
      </text>
      <text
        x="125"
        y="90"
        fontFamily="sans-serif"
        fontSize="22"
        letterSpacing="2"
        fill="url(#goldGradient)"
      >
        ENTERPRISE
      </text>
    </svg>
  );
};

export default Logo;
