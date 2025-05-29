import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(({ 
  className, 
  type = 'text',
  variant = 'default',
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

const inputVariants = ({ variant }) => {
  const baseStyles = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200';
  
  const variants = {
    default: 'hover:border-primary/50 focus:border-primary',
    neon: 'bg-transparent border-neon-blue text-neon-blue placeholder:text-neon-blue/50 focus:neon-glow focus:border-neon-blue',
    glass: 'glass border-white/30 placeholder:text-white/50 focus:border-white/50',
    cyber: 'bg-cyber-dark border-neon-green text-neon-green placeholder:text-neon-green/50 focus:border-neon-green focus:shadow-lg focus:shadow-neon-green/20',
    minimal: 'border-0 border-b-2 border-border rounded-none bg-transparent focus:border-primary px-0',
    floating: 'shadow-lg hover:shadow-xl focus:shadow-2xl border-primary/20 focus:border-primary'
  };
  
  return cn(
    baseStyles,
    variants[variant] || variants.default
  );
};

export { Input, inputVariants };
export default Input;
