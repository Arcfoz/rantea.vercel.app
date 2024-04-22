"use client";

import * as React from "react";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  // Update the iframe's src whenever the theme changes
  React.useEffect(() => {
    const iframeElement = window.parent.document.getElementById("my-frame");
    if (iframeElement) {
      const iframe = iframeElement as HTMLIFrameElement;
      iframe.id = "my-frame";
      iframe.src = `https://rantea.betteruptime.com/badge?theme=${theme}`;
    }
  }, [theme]);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleMode}>
        <FiMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <LuSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
