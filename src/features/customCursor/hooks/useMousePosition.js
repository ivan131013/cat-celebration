import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    angle: null,
  });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;

      const angle = Math.atan(
        (mousePosition.y - clientY) / (mousePosition.x - clientX)
      );

      setMousePosition({ x: clientX, y: clientY, angle });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
