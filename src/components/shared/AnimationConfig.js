/**
 * Shared animation configuration for consistent motion across components.
 */

/** Premium cubic-bezier easing curve */
export const EASE = [0.22, 1, 0.36, 1];

/** Default viewport trigger for whileInView animations */
export const VIEWPORT_ONCE = { once: true, margin: '-50px' };

/** Standard fade-up entrance */
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_ONCE,
  transition: { duration: 0.8, ease: EASE },
};

/** Subtle scale entrance */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: VIEWPORT_ONCE,
  transition: { duration: 0.9, ease: EASE },
};
