import React from 'react';

interface PageBreadcrumbProps {
  primary: string;
  secondary: string;
  className?: string;
}

export default function PageBreadcrumb({
  primary,
  secondary,
  className = '',
}: PageBreadcrumbProps) {
  return (
    <div
      className={`flex items-center gap-3 border-b border-stone-200/90 pb-4 ${className}`}
      aria-label="Breadcrumb"
    >
      <span className="font-mono text-xs font-bold tracking-widest text-[#0284C7] uppercase">
        {primary}
      </span>
      <span className="text-stone-300 font-mono text-xs" aria-hidden="true">
        /
      </span>
      <span className="font-mono text-xs tracking-wider text-stone-500 uppercase">
        {secondary}
      </span>
    </div>
  );
}
