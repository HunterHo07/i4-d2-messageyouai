// App Configuration
export const APP_CONFIG = {
  name: 'MessageYou',
  tagline: 'Snap. Post. Expose. Remember.',
  description: 'Visual-first platform for civic reporting and community transparency',
  version: '1.0.0',
  author: 'MessageYou Team'
};

// API Configuration (Simulated)
export const API_CONFIG = {
  baseUrl: '/api',
  timeout: 5000,
  retries: 3
};

// Entity Types
export const ENTITY_TYPES = {
  PERSON: 'person',
  BUSINESS: 'business',
  PLACE: 'place',
  VEHICLE: 'vehicle',
  ITEM: 'item',
  EVENT: 'event'
};

// Post Tags
export const POST_TAGS = {
  REVIEW: 'review',
  SCAM: 'scam',
  LOST: 'lost',
  FOUND: 'found',
  GOOD_DEED: 'good_deed',
  WARNING: 'warning',
  QUESTION: 'question',
  UPDATE: 'update'
};

// Reputation Levels
export const REPUTATION_LEVELS = {
  EXCELLENT: { min: 4.5, label: 'Excellent', color: 'green' },
  GOOD: { min: 3.5, label: 'Good', color: 'blue' },
  AVERAGE: { min: 2.5, label: 'Average', color: 'yellow' },
  POOR: { min: 1.5, label: 'Poor', color: 'orange' },
  TERRIBLE: { min: 0, label: 'Terrible', color: 'red' }
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.2
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};

// Color Palette (Futuristic AI Theme)
export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75'
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f'
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  }
};

// Demo Data Configuration
export const DEMO_CONFIG = {
  maxEntities: 50,
  maxPostsPerEntity: 20,
  maxCommentsPerPost: 10,
  simulationDelay: 2000,
  typingSpeed: 50
};

// Feature Flags
export const FEATURES = {
  PHOTO_UPLOAD: true,
  AI_ANALYSIS: true,
  REAL_TIME_UPDATES: true,
  NOTIFICATIONS: true,
  DARK_MODE: true,
  ANALYTICS: false,
  BETA_FEATURES: true
};

// Navigation Menu Items
export const NAVIGATION = [
  { name: 'Home', href: '/', icon: 'Home' },
  { name: 'Demo', href: '/demo', icon: 'Play' },
  { name: 'Pitch', href: '/pitch', icon: 'Presentation' },
  { name: 'Why Us', href: '/why-us', icon: 'Users' },
  { name: 'Roadmap', href: '/roadmap', icon: 'Map' },
  { name: 'Sign Up', href: '/signup', icon: 'UserPlus' }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { name: 'GitHub', href: '#', icon: 'Github' },
  { name: 'Discord', href: '#', icon: 'MessageCircle' }
];

// Pricing Plans
export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Basic photo upload',
      'View public posts',
      'Basic search',
      'Limited posts (10/month)',
      'Community support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Premium',
    price: 4.99,
    period: 'month',
    description: 'For active community members',
    features: [
      'Unlimited posts',
      'Advanced AI analysis',
      'Priority search results',
      'Trend alerts',
      'Enhanced privacy',
      'Email support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Business',
    price: 19.99,
    period: 'month',
    description: 'For businesses and organizations',
    features: [
      'Entity claiming',
      'Business dashboard',
      'Response tools',
      'Analytics & insights',
      'API access',
      'Priority support'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Community Organizer',
    avatar: '/images/avatars/sarah.jpg',
    content: 'MessageYou helped our neighborhood identify and stop a series of scams. The visual-first approach makes reporting so much easier.',
    rating: 5
  },
  {
    name: 'Mike Rodriguez',
    role: 'Small Business Owner',
    avatar: '/images/avatars/mike.jpg',
    content: 'Being able to respond to community feedback directly has improved our customer relationships tremendously.',
    rating: 5
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Urban Planning Researcher',
    avatar: '/images/avatars/emily.jpg',
    content: 'This platform provides invaluable data for understanding community dynamics and safety patterns.',
    rating: 5
  }
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'How does the photo recognition work?',
    answer: 'Our AI analyzes uploaded photos to identify people, places, businesses, and objects, then matches them to existing entities in our database or creates new ones.'
  },
  {
    question: 'Is my personal information safe?',
    answer: 'We prioritize privacy with optional anonymous posting, data encryption, and strict compliance with privacy regulations like GDPR and CCPA.'
  },
  {
    question: 'Can businesses respond to posts about them?',
    answer: 'Yes, verified businesses can claim their entities and respond to posts, providing transparency and accountability for all parties.'
  },
  {
    question: 'How do you prevent false reports?',
    answer: 'We use AI-powered content moderation, community voting, and human review to identify and filter out false or malicious content.'
  },
  {
    question: 'What types of entities can be reported?',
    answer: 'You can report on people, businesses, places, vehicles, lost items, events, and more. If it exists in the real world, it can be documented on MessageYou.'
  }
];

// Animation Presets
export const ANIMATION_PRESETS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.7 }
  }
};
