import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  threshold = 0.05,
  rootMargin = "200px 0px 0px 0px",
  delay = "100",
  direction = "up",
  duration = "500",
  stretch = "50",
  sx,
  className,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  function transform() {
    switch (direction) {
      case "left":
        return `translateX(${stretch}px)`;
      case "up":
        return `translateY(${stretch}px)`;
      case "right":
        return `translateX(-${stretch}px)`;
      case "down":
        return `translateY(-${stretch}px)`;
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  return (
    <div
      ref={ref}
      style={{
        willChange: "opacity, transform",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        ...sx,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
