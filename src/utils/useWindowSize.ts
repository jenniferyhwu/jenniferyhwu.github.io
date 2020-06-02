import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateOnResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    updateOnResize();
    window.addEventListener("resize", updateOnResize);
    return () => window.removeEventListener("resize", updateOnResize);
  }, []);

  return { windowWidth: width, windowHeight: height };
};
