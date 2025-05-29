import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Card = forwardRef(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

const cardVariants = ({ variant }) => {
  const baseStyles = 'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg';
  
  const variants = {
    default: 'border-border',
    glass: 'glass border-white/20 backdrop-blur-md',
    neon: 'border-neon-blue neon-border bg-transparent',
    cyber: 'bg-cyber-gray border-neon-green/30 hover:border-neon-green',
    holographic: 'holographic border-0 text-white',
    elevated: 'shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-card to-card/80',
    minimal: 'border-0 shadow-none bg-transparent',
    floating: 'shadow-2xl hover:shadow-neon-blue/20 border-neon-blue/20 animate-float'
  };
  
  return cn(
    baseStyles,
    variants[variant] || variants.default
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants
};

export default Card;
