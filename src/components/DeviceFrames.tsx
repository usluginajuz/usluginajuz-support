import type { ReactNode } from 'react';

/**
 * CSS-only iPhone frame — bezel and corner radius only. The demo screens and videos
 * already carry their own status-bar pill, so the frame draws nothing over the screen.
 */
export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.6rem] border-[9px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/30 dark:border-neutral-800 dark:bg-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * CSS-only iPad frame.
 */
export function TabletFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.8rem] border-[12px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/30 dark:border-neutral-800 dark:bg-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Light/dark image pair — the browser swaps them with prefers-color-scheme,
 * both lazy-loaded.
 */
export function ThemedImage({
  light,
  dark,
  alt,
  className = '',
  eager = false,
}: {
  light: string;
  dark: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const loading = eager ? 'eager' : 'lazy';
  return (
    <>
      <img src={light} alt={alt} loading={loading} className={`block dark:hidden ${className}`} />
      <img src={dark} alt={alt} loading={loading} className={`hidden dark:block ${className}`} />
    </>
  );
}
