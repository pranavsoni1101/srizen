import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  size = 'xl'
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',      // 672px
    md: 'max-w-4xl',      // 896px  
    lg: 'max-w-6xl',      // 1152px
    xl: 'max-w-7xl',      // 1280px
    full: 'max-w-full'    // No max width
  };

  return (
    <div 
      className={cn(
        'w-full mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-12 lg:py-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};
