export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const getMotionSafeScrollBehavior = (): ScrollBehavior =>
  prefersReducedMotion() ? "auto" : "smooth";
