"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggleIcon() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Choose icon based on theme setting (not resolved theme)
  let Icon;
  if (theme === "system") Icon = Monitor;
  else if (theme === "dark") Icon = Moon;
  else Icon = Sun; // light

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
        )
      }
      className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg'
      title={`Current theme: ${currentTheme}`}
    >
      <Icon size={20} />
    </button>
  );
}
