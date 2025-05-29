'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { 
  Brain, 
  Eye, 
  Zap, 
  Search, 
  CheckCircle,
  ArrowRight,
  Loader2,
  Scan,
  Target,
  Database
} from 'lucide-react';

export default function DemoAnalysis() {
  const [analysisStep, setAnalysisStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const { uploadedPhoto, analysisResult, nextDemoStep } = useAppStore();

  const analysisSteps = [
    {
      id: 0,
      title: "Image Processing",
      description: "Analyzing image quality and extracting features",
      icon: Eye,
      duration: 1000,
      details: [
        "Detecting image resolution: 1920x1080",
        "Extracting color profiles and lighting",
        "Identifying objects and regions of interest",
        "Preprocessing for AI analysis"
      ]
    },
    {
      id: 1,
      title: "Computer Vision",
      description: "Running advanced AI recognition algorithms",
      icon: Brain,
      duration: 1500,
      details: [
        "Facial recognition analysis",
        "Object detection and classification",
        "Text and license plate recognition",
        "Scene understanding and context"
      ]
    },
    {
      id: 2,
      title: "Entity Matching",
      description: "Searching database for matching entities",
      icon: Database,
      duration: 1200,
      details: [
        "Comparing against 50,000+ entities",
        "Calculating similarity scores",
        "Cross-referencing location data",
        "Validating match confidence"
      ]
    },
    {
      id: 3,
      title: "Results Compilation",
      description: "Gathering community reports and insights",
      icon: Target,
      duration: 800,
      details: [
        "Collecting related posts and reviews",
        "Calculating reputation scores",
        "Analyzing sentiment and trends",
        "Preparing comprehensive report"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(stepTimer);
  }, []);

  const currentStep = analysisSteps[analysisStep];
  const IconComponent = currentStep?.icon || Brain;
  const isComplete = progress >= 100 && analysisStep >= analysisSteps.length - 1;

  return (
    <div className="space-y-8">
      
      {/* Analysis Header */}
      <Card variant="glass" className="p-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
            {isComplete ? (
              <CheckCircle className="w-10 h-10 text-primary animate-pulse" />
            ) : (
              <IconComponent className="w-10 h-10 text-primary animate-pulse" />
            )}
          </div>
          <h2 className="text-2xl font-bold">
            {isComplete ? 'Analysis Complete!' : 'AI Analysis in Progress'}
          </h2>
          <p className="text-muted-foreground">
            {isComplete 
              ? 'Your photo has been successfully analyzed and matched'
              : 'Our advanced AI is processing your image...'
            }
          </p>
        </div>
      </Card>

      {/* Progress Overview */}
      <Card variant="elevated" className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Processing Progress</h3>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {analysisSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === analysisStep;
              const isCompleted = index < analysisStep;
              
              return (
                <div 
                  key={step.id}
                  className={`text-center space-y-2 transition-all duration-300 ${
                    isActive ? 'scale-105' : ''
                  }`}
                >
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'border-primary bg-primary/10 text-primary' 
                      : isActive
                      ? 'border-primary bg-primary/5 text-primary animate-pulse'
                      : 'border-muted-foreground/30 text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <StepIcon className={`w-6 h-6 ${isActive ? 'animate-pulse' : ''}`} />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-sm font-medium ${
                      isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Current Step Details */}
      {currentStep && (
        <Card variant="cyber" className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{currentStep.title}</h3>
                <p className="text-sm text-muted-foreground">{currentStep.description}</p>
              </div>
            </div>

            <div className="space-y-2">
              {currentStep.details.map((detail, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                    index <= (progress / 100) * currentStep.details.length 
                      ? 'text-foreground' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {index <= (progress / 100) * currentStep.details.length ? (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-muted-foreground flex-shrink-0 animate-spin" />
                  )}
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Analysis Results Preview */}
      {isComplete && (
        <Card variant="glass" className="p-6 animate-fade-in-scale">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Analysis Results</h3>
              <p className="text-muted-foreground">
                We found matching entities in our database
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Entity Match",
                  value: "95.7%",
                  description: "Confidence score",
                  icon: Target,
                  color: "text-green-400"
                },
                {
                  title: "Processing Time",
                  value: "2.3s",
                  description: "Analysis duration",
                  icon: Zap,
                  color: "text-blue-400"
                },
                {
                  title: "Reports Found",
                  value: "23",
                  description: "Community posts",
                  icon: Search,
                  color: "text-purple-400"
                }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center space-y-2 p-4 rounded-lg bg-muted/20"
                  >
                    <div className={`mx-auto w-10 h-10 rounded-full bg-current/10 flex items-center justify-center ${stat.color}`}>
                      <StatIcon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{stat.title}</div>
                      <div className="text-xs text-muted-foreground">{stat.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                variant="holographic" 
                onClick={nextDemoStep}
                className="group"
              >
                <Search className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                View Results
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Technical Details */}
      <Card variant="minimal" className="p-6">
        <div className="text-center space-y-4">
          <h3 className="font-semibold">Behind the Scenes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">AI Technologies Used</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Computer Vision Neural Networks</li>
                <li>• Facial Recognition Algorithms</li>
                <li>• Object Detection Models</li>
                <li>• Natural Language Processing</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Privacy & Security</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• End-to-end encryption</li>
                <li>• GDPR compliant processing</li>
                <li>• No permanent image storage</li>
                <li>• Anonymous analysis options</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
