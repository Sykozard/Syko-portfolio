import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() === "a" || (e.target as HTMLElement).tagName.toLowerCase() === "button") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 mix-blend-screen"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 20 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/30"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 15 }}
      />
    </>
  );
}
