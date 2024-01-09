import { useState, useEffect } from "react";

// Define an interface for the scrolling state
interface ScrollState {
  lastValue: number;
  status: boolean;
}

const useScrollStatus = (): ScrollState => {
  const [scrolling, setScrolling] = useState<ScrollState>({
    lastValue: 0,
    status: false,
  });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolling =
        currentScrollY > 200 && Math.abs(currentScrollY - lastScrollY) > 5;

      setScrolling({
        lastValue: currentScrollY,
        status: isScrolling,
      });

      lastScrollY = currentScrollY;
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return scrolling;
};

export default useScrollStatus;
