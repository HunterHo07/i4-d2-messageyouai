'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import DemoUpload from '@/components/demo/DemoUpload';
import DemoAnalysis from '@/components/demo/DemoAnalysis';
import DemoResults from '@/components/demo/DemoResults';
import DemoEntityProfile from '@/components/demo/DemoEntityProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { 
  Camera, 
  Brain, 
  Search, 
  Users, 
  ArrowRight, 
  RotateCcw,
  Play,
  Zap
} from 'lucide-react';

export default function DemoPage() {
  const { 
    demoStep, 
    isDemoActive, 
    startDemo, 
    resetDemo, 
    nextDemoStep,
    demoProgress 
  } = useAppStore();

  const demoSteps = [
    {
      id: 0,
      title: "Upload Photo",
      description: "Start by uploading any photo",
      icon: Camera,
      component: DemoUpload
    },
    {
      id: 1,
      title: "AI Analysis",
      description: "Watch our AI analyze the image",
      icon: Brain,
      component: DemoAnalysis
    },
    {
      id: 2,
      title: "Search Results",
      description: "See matching entities found",
      icon: Search,
      component: DemoResults
    },
    {
      id: 3,
      title: "Entity Profile",
      description: "Explore detailed information",
      icon: Users,
      component: DemoEntityProfile
    }
  ];

  const currentStep = demoSteps[demoStep];
  const StepComponent = currentStep?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          
          {/* Demo Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Play className="w-4 h-4 mr-2" />
              Interactive Demo
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Experience</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MessageYou Live
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our AI-powered platform works in real-time. Upload a photo and watch 
              the magic happen as we identify entities and surface community insights.
            </p>
          </div>

          {!isDemoActive ? (
            /* Demo Introduction */
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Demo Preview Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {demoSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <Card 
                      key={step.id} 
                      variant="glass" 
                      className="group hover:scale-105 transition-all duration-300 animate-slide-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-primary font-medium">
                            Step {step.id + 1}
                          </div>
                          <h3 className="font-semibold">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Demo Features */}
              <Card variant="elevated" className="p-8 space-y-6">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">What You'll Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Real AI Processing",
                        description: "Watch our actual AI analyze photos and identify entities in real-time",
                        icon: Brain
                      },
                      {
                        title: "Live Data",
                        description: "Interact with real community reports, ratings, and feedback",
                        icon: Users
                      },
                      {
                        title: "Full Functionality",
                        description: "Experience all features including search, filtering, and posting",
                        icon: Search
                      },
                      {
                        title: "Mobile Optimized",
                        description: "Test the complete mobile experience with touch interactions",
                        icon: Camera
                      }
                    ].map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Start Demo Button */}
              <div className="text-center">
                <Button 
                  size="xl" 
                  variant="holographic" 
                  onClick={startDemo}
                  className="group"
                >
                  <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Start Interactive Demo
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No signup required • Takes 2-3 minutes • Works on any device
                </p>
              </div>
            </div>
          ) : (
            /* Active Demo Interface */
            <div className="max-w-6xl mx-auto space-y-8">
              
              {/* Progress Bar */}
              <Card variant="glass" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">
                    {currentStep.title}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      Step {demoStep + 1} of {demoSteps.length}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={resetDemo}
                      className="group"
                    >
                      <RotateCcw className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Reset
                    </Button>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${demoProgress}%` }}
                  />
                </div>
                
                {/* Step Indicators */}
                <div className="flex justify-between mt-4">
                  {demoSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div 
                        key={step.id} 
                        className={`flex flex-col items-center space-y-2 ${
                          index <= demoStep ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          index <= demoStep 
                            ? 'border-primary bg-primary/10' 
                            : 'border-muted-foreground/30'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium hidden sm:block">
                          {step.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Demo Content */}
              <div className="min-h-[600px]">
                {StepComponent && <StepComponent />}
              </div>

              {/* Demo Navigation */}
              <Card variant="glass" className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{currentStep.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {currentStep.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {demoStep < demoSteps.length - 1 && (
                      <Button 
                        variant="neon" 
                        onClick={nextDemoStep}
                        className="group"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                    
                    {demoStep === demoSteps.length - 1 && (
                      <Button 
                        variant="holographic" 
                        onClick={resetDemo}
                        className="group"
                      >
                        <RotateCcw className="w-4 h-4 mr-2 group-hover:animate-spin" />
                        Try Again
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
