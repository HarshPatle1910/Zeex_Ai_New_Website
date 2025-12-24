import { motion } from 'framer-motion';
import { useState } from 'react';



interface FloatingBubbleProps {
  delay: number;
  duration: number;
  size: number;
  color: string;
  x: number;
  y: number;
  blur: boolean;
}

export default function FloatingBubble({
  delay,
  duration,
  size,
  color,
  x,
  y,
  blur
}: FloatingBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);

  const randomOffset = Math.random() * 200 - 100;
  const randomOffsetY = Math.random() * 200 - 100;

  const colorMap: { [key: string]: string } = {
    'bg-cyan-500': '#06b6d4',
    'bg-blue-500': '#3b82f6',
    'bg-purple-500': '#a855f7',
    'bg-cyan-400': '#22d3ee',
    'bg-blue-400': '#60a5fa',
    'bg-cyan-600': '#0891b2',
    'bg-violet-500': '#8b5cf6',
    'bg-blue-600': '#2563eb',
  };

  const bubbleColor = colorMap[color] || '#06b6d4';

  return (
    <motion.div
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: [x, x + randomOffset, x - randomOffset / 2, x],
        y: [y, y + randomOffsetY, y - randomOffsetY / 2, y],
        opacity: 1,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="floating-bubble"
      style={{
        width: size,
        height: size,
        filter: blur ? 'blur(80px)' : 'blur(60px)',
        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
    >
      <motion.div
        animate={{
          opacity: isHovered ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="floating-bubble-inner"
        style={{
          backgroundColor: bubbleColor,
          boxShadow: isHovered
            ? `0 0 80px ${bubbleColor}`
            : `0 0 40px ${bubbleColor}`,
        }}
      />
    </motion.div>
  );
}