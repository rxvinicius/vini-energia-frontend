import React, { useState, useRef, useImperativeHandle } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { eyeIcon, eyeSlashIcon } from '@/assets/icons';

export interface PasswordInputProps extends Omit<InputProps, 'type'> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const localRef = useRef<HTMLInputElement>(null);

    // Exposing the inner ref to the outer ref
    useImperativeHandle(ref, () => localRef.current!);

    const handleIconClick = () => {
      setShowPassword((prev) => !prev);
      // Ensures that the input is focused when clicking the icon
      localRef.current?.focus();
    };

    return (
      <Input
        type={showPassword ? 'text' : 'password'}
        className={`shad-input ${className}`}
        icon={
          <img
            src={showPassword ? eyeIcon : eyeSlashIcon}
            alt="Eye icon"
            className="h-5 w-5 object-contain cursor-pointer"
            onClick={handleIconClick}
          />
        }
        ref={localRef}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
