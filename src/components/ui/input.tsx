import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    React.useEffect(() => {
      const handleWheel = (event: WheelEvent) => {
        if ((event.target as HTMLInputElement).type === 'number') {
          event.preventDefault();
        }
      };

      document.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        document.removeEventListener('wheel', handleWheel);
      };
    }, []);

    return (
      <div className="relative flex items-center w-full">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute right-3 flex items-center justify-center">
            {icon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
