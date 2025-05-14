import { useEffect, useState, useRef } from "react";

export function useScrollDirection({
  tolerance = 10,
  topSafeZone = 400, // new param: distance from top where header stays
} = {}) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < tolerance) {
        // Ignore small scroll movements
        return;
      }

      if (currentScrollY < topSafeZone) {
        // Near the top: force "up" so header stays visible
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tolerance, topSafeZone]);

  return scrollDirection;
}
