'use client'

import { useState } from 'react';
import { IconButton } from "@material-tailwind/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real application, you would update the theme here
  };

  return (
    <IconButton onClick={toggleTheme} variant="text" color="blue-gray">
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </IconButton>
  );
}
