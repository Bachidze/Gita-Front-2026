import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.35 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);

      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest("[data-cursor-grow]"));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      animate={{ scale: isHovered ? 3.2 : 1 }}
      transition={{ type: "spring", damping: 22, stiffness: 320, mass: 0.3 }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[#FF52C1] bg-[#FF52C1]/20 pointer-events-none z-50 will-change-transform origin-center"
    />
  );
}
