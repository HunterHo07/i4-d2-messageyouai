'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  AlertTriangle, 
  MessageSquare, 
  Users, 
  Shield, 
  Search, 
  Zap,
  CheckCircle,
  ArrowRight,
  Eye,
  Camera
} from 'lucide-react';

export default function ProblemSolutionSection() {
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: AlertTriangle,
      title: "Scams Go Unreported",
      description: "87% of scam victims have nowhere to warn others, letting fraudsters continue targeting new victims.",
      stat: "87%",
      color: "text-red-400"
    },
    {
      icon: MessageSquare,
      title: "Information Silos",
      description: "Reports get lost in private messages, closed platforms, or forgotten conversations.",
      stat: "73%",
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "No Reputation System",
      description: "No way to check someone's history before dealing with unknown people or businesses.",
      stat: "68%",
      color: "text-yellow-400"
    },
    {
      icon: Search,
      title: "Hard to Track",
      description: "Lost items, bad actors, and civic issues are nearly impossible to track across platforms.",
      stat: "61%",
      color: "text-blue-400"
    }
  ];

  const solutions = [
    {
      icon: Camera,
      title: "Photo-First Approach",
      description: "Just snap a photo - no need to know names, contacts, or platform handles.",
      benefit: "Universal Access"
    },
    {
      icon: Zap,
      title: "AI Entity Mapping",
      description: "Advanced AI automatically identifies and maps photos to real-world entities.",
      benefit: "Instant Recognition"
    },
    {
      icon: Shield,
      title: "Community Verification",
      description: "Crowd-sourced validation ensures accuracy and prevents false reports.",
      benefit: "Trust & Safety"
    },
    {
      icon: Eye,
      title: "Public Memory",
      description: "Creates a persistent, searchable history of real-world interactions.",
      benefit: "Transparency"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem We Solve
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Civic Reporting is</span>
            <br />
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Broken
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Critical information about people, places, and businesses gets lost in the void. 
            Bad actors hide while good deeds go unrecognized.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card 
                key={index} 
                variant="glass" 
                className="group hover:scale-105 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-current/10 flex items-center justify-center ${problem.color}`}>
                    <IconComponent className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${problem.color}`}>
                    {problem.stat}
                  </div>
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-bounce">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 animate-pulse" />
          </div>
        </div>

        {/* Solution Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Solution
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Visual-First</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Civic Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MessageYou creates a universal layer of transparency where every photo tells a story, 
            and every story builds community trust.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                variant="elevated" 
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in-scale"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{solution.title}</h3>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {solution.benefit}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works - 3 Steps */}
        <div className="text-center space-y-12">
          <h3 className="text-3xl font-bold">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Snap a Photo",
                description: "Point your camera at any person, place, business, or object",
                icon: Camera,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our AI instantly maps the photo to existing entities or creates new ones",
                icon: Zap,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Community Insights",
                description: "Access reports, reviews, and real-time community feedback",
                icon: Users,
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative group animate-slide-in-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}
                  
                  <div className="space-y-4">
                    <div className="relative mx-auto w-20 h-20">
                      <div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button size="xl" variant="holographic" className="group">
              <Camera className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Try It Now - Upload a Photo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
