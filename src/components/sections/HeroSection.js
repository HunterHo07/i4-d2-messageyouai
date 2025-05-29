'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { APP_CONFIG } from '@/lib/constants';
import { Camera, Upload, Zap, Users, Shield, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  // Demo scenarios
  const demoScenarios = [
    {
      title: "Scam Alert",
      description: "Photo reveals known scammer",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "Good Deed",
      description: "Community hero recognized",
      icon: Sparkles,
      color: "text-green-400"
    },
    {
      title: "Lost & Found",
      description: "Missing item located",
      icon: Users,
      color: "text-blue-400"
    }
  ];

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Cycle through demo scenarios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoScenarios.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentScenario = demoScenarios[currentDemo];
  const IconComponent = currentScenario.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ background: 'transparent' }}
      />
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Civic Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {APP_CONFIG.name}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                {APP_CONFIG.tagline}
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Snap a photo of anyone or anything to instantly access community reports, 
                warnings, and real-world reputation. No names needed—just point, post, and protect.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="neon"
                className="group"
              >
                <Camera className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Try Demo Now
              </Button>
              
              <Button 
                size="xl" 
                variant="glass"
                className="group"
              >
                <Upload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Upload Photo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Reports Filed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className={`${isLoaded ? 'animate-fade-in-scale delay-300' : 'opacity-0'}`}>
            <Card variant="glass" className="p-8 space-y-6 hover:shadow-2xl transition-all duration-500">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">Live Demo</h3>
                <p className="text-muted-foreground">
                  See how MessageYou works in real-time
                </p>
              </div>

              {/* Demo Phone Mockup */}
              <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-cyber-dark to-cyber-gray rounded-3xl p-4 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-background rounded-2xl p-4 relative overflow-hidden">
                  {/* Demo Content */}
                  <div className="space-y-4">
                    {/* Camera Viewfinder */}
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center relative">
                      <Camera className="w-12 h-12 text-primary animate-pulse" />
                      
                      {/* Scanning Animation */}
                      <div className="absolute inset-0 border-2 border-neon-blue rounded-xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue animate-pulse delay-500" />
                      </div>
                    </div>

                    {/* Analysis Result */}
                    <Card variant="cyber" className="p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full bg-current/10 ${currentScenario.color}`}>
                          <IconComponent className={`w-5 h-5 ${currentScenario.color}`} />
                        </div>
                        <div>
                          <div className="font-semibold">{currentScenario.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {currentScenario.description}
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: '85%' }}
                        />
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Confidence: 85% • Processing: 1.2s
                      </div>
                    </Card>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="neon" className="text-xs">
                        View Reports
                      </Button>
                      <Button size="sm" variant="glass" className="text-xs">
                        Add Report
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-muted rounded-full" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-muted rounded-full" />
              </div>

              {/* Demo Indicators */}
              <div className="flex justify-center space-x-2">
                {demoScenarios.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDemo ? 'bg-primary w-6' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
