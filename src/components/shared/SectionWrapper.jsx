import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from './AnimationConfig';

/**
 * Reusable wrapper for wedding sections.
 * Provides consistent padding, centering, and scroll-reveal animation.
 *
 * @param {string}  layout     - 'default' | 'flush' (no padding)
 * @param {string}  container  - 'narrow' | 'wide'
 * @param {boolean} center     - center text content
 * @param {string}  className  - extra classes on the section
 * @param {string}  innerClassName - extra classes on the inner motion div
 */
export default function SectionWrapper({
  children,
  layout = 'default',
  container = 'narrow',
  center = true,
  className = '',
  innerClassName = '',
  id,
}) {
  const sectionCls = [
    layout === 'flush' ? 'section-layout2' : 'section-layout',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerCls = container === 'wide' ? 'container-custom' : 'container-narrow';

  const innerCls = [
    center ? 'text-center' : '',
    innerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionCls} id={id}>
      <div className={containerCls}>
        <motion.div {...scaleIn} className={innerCls}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
