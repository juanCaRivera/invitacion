import React from 'react';
import { MapPin } from 'lucide-react';

/**
 * Clean map link button — no circles, just a clean text link with icon.
 */
export default function InviteMapLink({ href, label = 'Ver mapa', className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir mapa"
      className={
        'invite-map-link group inline-flex items-center gap-2 no-underline outline-none transition-all duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#b8934d]/35 ' +
        className
      }
    >
      <MapPin size={18} strokeWidth={1.5} className="text-[#b8934d]" />
      <span className="text-sm md:text-base uppercase tracking-[0.2em] font-medium text-[#b8934d] border-b border-[#b8934d]/30 pb-0.5 transition-all duration-300 group-hover:border-[#b8934d]">
        {label}
      </span>
    </a>
  );
}
