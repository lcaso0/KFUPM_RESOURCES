'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ReactNode } from 'react';

interface OptimizedMotionProps {
  children: ReactNode;
  variants?: any;
  initial?: string;
  animate?: string;
  transition?: any;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function OptimizedMotion({
  children,
  variants,
  initial = 'hidden',
  animate = 'visible',
  transition,
  className,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: OptimizedMotionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={initial}
      animate={isIntersecting ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}