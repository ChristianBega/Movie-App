import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY > 0) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY + 1000,
            behavior: "smooth",
          });
        } else {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY - 1000,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

// - is up - left
// + is down - right
