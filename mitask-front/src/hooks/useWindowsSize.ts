"use client";
import { useState, useEffect } from "react";

interface WindowSize {
  isMobile: boolean;
}

function useWindowSize(): WindowSize {
  // Initialize state with undefined width so server and client renders match
  const [windowSize, setWindowSize] = useState<WindowSize>({
    isMobile: typeof window !== "undefined" && window.innerWidth <= 1024,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        isMobile: window.innerWidth <= 1024,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
