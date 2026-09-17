import type { ReactNode } from 'react';

interface NoticeProps {
  variant?: 'default' | 'success' | 'error';
  children: ReactNode;
}

export function Notice({ variant = 'default', children }: NoticeProps) {
  const className = ['notice', variant !== 'default' && `notice--${variant}`]
    .filter(Boolean)
    .join(' ');
  return <div className={className}>{children}</div>;
}
