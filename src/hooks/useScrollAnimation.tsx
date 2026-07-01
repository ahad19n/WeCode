// src/hooks/useScrollAnimation.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// For elements that should animate from left
export const useSlideInLeft = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  return {
    ref,
    className: isVisible 
      ? `opacity-100 translate-x-0 transition-all duration-700 ease-out`
      : `opacity-0 -translate-x-12 transition-all duration-700 ease-out`,
    style: { transitionDelay: `${delay}s` }
  };
};

// For elements that should animate from right
export const useSlideInRight = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  return {
    ref,
    className: isVisible 
      ? `opacity-100 translate-x-0 transition-all duration-700 ease-out`
      : `opacity-0 translate-x-12 transition-all duration-700 ease-out`,
    style: { transitionDelay: `${delay}s` }
  };
};

// For elements that should animate from bottom
export const useSlideUp = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  return {
    ref,
    className: isVisible 
      ? `opacity-100 translate-y-0 transition-all duration-700 ease-out`
      : `opacity-0 translate-y-16 transition-all duration-700 ease-out`,
    style: { transitionDelay: `${delay}s` }
  };
};

// For elements that should scale in
export const useScaleIn = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  return {
    ref,
    className: isVisible 
      ? `opacity-100 scale-100 transition-all duration-700 ease-out`
      : `opacity-0 scale-90 transition-all duration-700 ease-out`,
    style: { transitionDelay: `${delay}s` }
  };
};

// For elements that should fade in
export const useFadeIn = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation();
  return {
    ref,
    className: isVisible 
      ? `opacity-100 transition-all duration-1000 ease-out`
      : `opacity-0 transition-all duration-1000 ease-out`,
    style: { transitionDelay: `${delay}s` }
  };
};