import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  asChild = false,
  children,
  ...props 
}, ref) => {
  const Comp = asChild ? 'span' : 'button';
  
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = 'Button';

const buttonVariants = ({ variant, size, className }) => {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    neon: 'bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black neon-glow hover:animate-glow',
    holographic: 'holographic text-white border-0 shadow-2xl hover:shadow-neon-blue/50',
    glass: 'glass text-foreground hover:bg-white/20 border border-white/30',
    cyber: 'bg-cyber-dark text-neon-green border border-neon-green hover:bg-neon-green hover:text-cyber-dark transition-all duration-300'
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    xl: 'h-12 rounded-lg px-10 text-base',
    icon: 'h-10 w-10'
  };
  
  return cn(
    baseStyles,
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    className
  );
};

export { Button, buttonVariants };
export default Button;
