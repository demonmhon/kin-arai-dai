import React from 'react';
import { Box } from '@mantine/core';

interface LogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  className,
  onClick,
}) => {
  return (
    <Box
      component="span"
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        filter: 'drop-shadow(0 2px 4px rgba(5, 150, 105, 0.15))',
        flexShrink: 0,
      }}
    >
      {/* Dining Bowl & Cutlery with 3 Traffic-Light Guidance Dots */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGradCutlery" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bbf7d0" />
            <stop offset="0.6" stopColor="#6ee7b7" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {/* Squircle Plate Container */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="14"
          fill="url(#bgGradCutlery)"
          stroke="#6ee7b7"
          strokeWidth="1.2"
        />

        {/* Inner Clean White Rim */}
        <rect
          x="6.5"
          y="6.5"
          width="35"
          height="35"
          rx="11"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.7"
          strokeOpacity="0.85"
        />

        {/* Spoon (Left, angled upward) */}
        <path
          d="M20.5 22.5 L 28 12"
          stroke="#047857"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Spoon Head */}
        <path
          d="M17.5 19.5 C 16 21.5, 17.5 24.5, 20.5 24 C 22.5 23.5, 22.5 20.5, 19.5 19 C 18.5 18.5, 18 18.8, 17.5 19.5 Z"
          fill="#ffffff"
          stroke="#047857"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />

        {/* Fork (Right, angled upward) */}
        <path
          d="M24 23 L 31.5 13.5"
          stroke="#047857"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Fork Head */}
        <path
          d="M22 20.5 C 22.5 23.5, 25 24, 26 22"
          fill="none"
          stroke="#047857"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="23.8"
          y1="21.5"
          x2="24.4"
          y2="23.5"
          stroke="#047857"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Modern Minimalist Bowl */}
        <path
          d="M13 23 C 13 31.5, 17.5 34.5, 24 34.5 C 30.5 34.5, 35 31.5, 35 23 Z"
          fill="#ffffff"
          fillOpacity="0.95"
          stroke="#047857"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        {/* Bowl Rim Curve */}
        <ellipse
          cx="24"
          cy="23"
          rx="11"
          ry="2.4"
          fill="#ffffff"
          stroke="#047857"
          strokeWidth="1.8"
        />
        {/* Inner Accent Curve */}
        <path
          d="M16 27 C 19.5 31, 28.5 31, 32 27"
          stroke="#d1fae5"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* 3 Traffic-Light Guidance Dots at Bottom Plate Edge */}
        {/* Green Dot (Safe) */}
        <circle cx="17.5" cy="39.5" r="3" fill="#ffffff" />
        <circle cx="17.5" cy="39.5" r="2" fill="#10b981" />

        {/* Amber Yellow Dot (Caution) */}
        <circle cx="24" cy="39.5" r="3" fill="#ffffff" />
        <circle cx="24" cy="39.5" r="2" fill="#f59e0b" />

        {/* Coral Red Dot (Avoid) */}
        <circle cx="30.5" cy="39.5" r="3" fill="#ffffff" />
        <circle cx="30.5" cy="39.5" r="2" fill="#ef4444" />
      </svg>
    </Box>
  );
};
