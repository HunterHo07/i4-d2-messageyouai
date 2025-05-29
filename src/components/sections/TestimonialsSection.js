'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/constants';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Shield,
  TrendingUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Extended testimonials for demo
  const allTestimonials = [
    ...TESTIMONIALS,
    {
      name: 'David Kim',
      role: 'Local Business Owner',
      avatar: '/images/avatars/david.jpg',
      content: 'MessageYou helped us respond to customer feedback quickly and transparently. Our reputation score improved by 40% in just 3 months.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Neighborhood Watch Coordinator',
      avatar: '/images/avatars/maria.jpg',
      content: 'The AI-powered alerts have made our community so much safer. We can now track patterns and prevent incidents before they happen.',
      rating: 5
    },
    {
      name: 'Alex Chen',
      role: 'Tech Journalist',
      avatar: '/images/avatars/alex.jpg',
      content: 'This is the future of civic engagement. The visual-first approach makes reporting accessible to everyone, regardless of language barriers.',
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, allTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentTest = allTestimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Community Voices
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Communities Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how MessageYou is transforming civic engagement and building safer, 
            more connected communities around the globe.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card variant="glass" className="p-8 lg:p-12 relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-4 right-4 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>
            
            <div className="relative z-10 space-y-8">
              {/* Rating */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-6 h-6 ${
                        star <= currentTest.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl lg:text-2xl text-center font-medium leading-relaxed">
                "{currentTest.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{currentTest.name}</div>
                  <div className="text-muted-foreground">{currentTest.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevTestimonial}
                className="group"
              >
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Previous
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {allTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary w-6' 
                        : 'bg-muted hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextTestimonial}
                className="group"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Active Users",
              value: "50K+",
              description: "Community members",
              icon: Users,
              color: "text-blue-400"
            },
            {
              title: "Reports Filed",
              value: "250K+",
              description: "Community posts",
              icon: MessageSquare,
              color: "text-green-400"
            },
            {
              title: "Safety Score",
              value: "98%",
              description: "Accuracy rate",
              icon: Shield,
              color: "text-purple-400"
            },
            {
              title: "Growth Rate",
              value: "300%",
              description: "Year over year",
              icon: TrendingUp,
              color: "text-orange-400"
            }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <Card 
                key={index} 
                variant="elevated" 
                className="p-6 text-center group hover:scale-105 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`mx-auto w-12 h-12 rounded-full bg-current/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                  <StatIcon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="space-y-1">
                  <div className="font-medium">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* All Testimonials Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">More Success Stories</h3>
            <p className="text-muted-foreground">
              Join thousands of satisfied users making their communities better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <Card 
                key={index}
                variant="minimal"
                className={`p-6 group hover:shadow-lg transition-all duration-300 animate-fade-in-scale ${
                  index === currentTestimonial ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-4 h-4 ${
                          star <= testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl font-bold">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start building safer, more connected communities today. 
            Experience the power of AI-driven civic engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="holographic" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Join Community
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="glass" className="group">
              <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
