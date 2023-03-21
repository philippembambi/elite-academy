import { useState, useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

function getWindowDimensions() {
  const mWindow = isBrowser() ? window : { width: 1300, height: 0 };
  const { innerWidth: width, innerHeight: height } = mWindow;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
