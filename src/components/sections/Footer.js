'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { APP_CONFIG, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
import { 
  Zap, 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
  ArrowRight,
  Heart,
  Shield,
  Globe
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Demo", href: "/demo" },
        { name: "Pricing", href: "/#pricing" },
        { name: "API", href: "/api" },
        { name: "Mobile App", href: "/mobile" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Status", href: "/status" },
        { name: "Changelog", href: "/changelog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" }
      ]
    }
  ];

  const socialIcons = {
    Twitter: Twitter,
    Linkedin: Linkedin,
    Github: Github,
    MessageCircle: MessageCircle
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      
      {/* Newsletter Section */}
      <div className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <Card variant="glass" className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Stay Updated with
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}MessageYou
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Get the latest updates on new features, community insights, and platform improvements.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    variant="glass"
                    className="flex-1"
                  />
                  <Button variant="holographic" className="group">
                    <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {APP_CONFIG.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {APP_CONFIG.tagline}
                  </div>
                </div>
              </Link>
              
              <p className="text-muted-foreground">
                Building the future of civic transparency through AI-powered community reporting. 
                Empowering citizens to create safer, more connected communities.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = socialIcons[social.icon] || MessageCircle;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group flex items-center"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© {currentYear} {APP_CONFIG.name}. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>for safer communities</span>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/cookies" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-muted-foreground">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
