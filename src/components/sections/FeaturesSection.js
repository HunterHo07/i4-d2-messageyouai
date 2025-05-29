'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Camera, 
  Brain, 
  Shield, 
  Search, 
  Users, 
  Zap,
  Eye,
  MessageSquare,
  Star,
  TrendingUp,
  Bell,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const mainFeatures = [
    {
      icon: Camera,
      title: "Photo-to-Entity Mapping",
      description: "Advanced AI instantly recognizes people, places, businesses, and objects from photos",
      details: [
        "95%+ accuracy rate",
        "Works with any camera quality",
        "Instant processing (< 2 seconds)",
        "Privacy-compliant recognition"
      ],
      demo: "Upload any photo and watch our AI identify entities in real-time",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Smart Content Filtering",
      description: "AI-powered moderation prevents spam, harassment, and false reports",
      details: [
        "Real-time content analysis",
        "Automatic spam detection",
        "Bias prevention algorithms",
        "Community-driven validation"
      ],
      demo: "Our AI filters out 99.2% of malicious content automatically",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Reputation System",
      description: "Dynamic scoring based on community feedback and verified interactions",
      details: [
        "Transparent scoring algorithm",
        "Historical trend analysis",
        "Verified business badges",
        "Anonymous reporting options"
      ],
      demo: "See how reputation scores help identify trustworthy entities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "Universal Search",
      description: "Find anyone or anything using photos, text, location, or tags",
      details: [
        "Multi-modal search capabilities",
        "Fuzzy matching algorithms",
        "Location-based filtering",
        "Advanced tag system"
      ],
      demo: "Search by photo, name, location, or any combination",
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Community Verification",
      description: "Crowd-sourced validation ensures accuracy and builds trust"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 AI surveillance for emerging patterns and threats"
    },
    {
      icon: MessageSquare,
      title: "Anonymous Reporting",
      description: "Safe, secure reporting without revealing your identity"
    },
    {
      icon: Star,
      title: "Good Deed Recognition",
      description: "Highlight positive actions and community heroes"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify patterns and emerging issues in your community"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified about relevant activity in your area"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Geographic insights and neighborhood safety data"
    },
    {
      icon: Clock,
      title: "Historical Timeline",
      description: "Track changes and patterns over time"
    }
  ];

  // Auto-cycle through main features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = mainFeatures[activeFeature];
  const IconComponent = currentFeature.icon;

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Everything You Need for</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Civic Transparency
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI, community-driven validation, and real-time insights 
            create the most comprehensive civic reporting platform ever built.
          </p>
        </div>

        {/* Main Features Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Feature Tabs */}
          <div className="space-y-4">
            {mainFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card
                  key={index}
                  variant={index === activeFeature ? "neon" : "default"}
                  className={`cursor-pointer transition-all duration-300 ${
                    index === activeFeature 
                      ? "scale-105 shadow-2xl shadow-primary/20" 
                      : "hover:scale-102 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                        <FeatureIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                      {index === activeFeature && (
                        <CheckCircle className="w-5 h-5 text-primary animate-pulse" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Details */}
          <Card variant="glass" className="p-8 space-y-6 animate-fade-in-scale">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${currentFeature.color} rounded-xl flex items-center justify-center`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{currentFeature.title}</h3>
                <p className="text-muted-foreground">{currentFeature.demo}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Key Capabilities:</h4>
              <div className="grid grid-cols-1 gap-3">
                {currentFeature.details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="neon" className="w-full group">
              <Eye className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              See {currentFeature.title} in Action
            </Button>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2">
              {mainFeatures.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeFeature ? 'w-8 bg-primary' : 'w-2 bg-muted'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Features Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">And Much More</h3>
            <p className="text-muted-foreground">
              Comprehensive tools for every aspect of civic engagement and community safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card 
                  key={index} 
                  variant="minimal" 
                  className="group hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FeatureIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 text-center space-y-8">
          <h3 className="text-3xl font-bold">Why MessageYou Stands Out</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Platforms",
                features: ["Text-only reporting", "Platform silos", "Limited search", "No AI assistance"],
                color: "text-muted-foreground",
                bgColor: "bg-muted/20"
              },
              {
                title: "MessageYou",
                features: ["Visual-first approach", "Universal platform", "AI-powered search", "Smart automation"],
                color: "text-primary",
                bgColor: "bg-primary/10",
                highlight: true
              },
              {
                title: "Future Vision",
                features: ["Global network", "Predictive insights", "AR integration", "Smart city APIs"],
                color: "text-accent",
                bgColor: "bg-accent/10"
              }
            ].map((column, index) => (
              <Card 
                key={index} 
                variant={column.highlight ? "neon" : "default"}
                className={`${column.highlight ? "scale-105 shadow-2xl" : ""} transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className={`text-center ${column.color}`}>
                    {column.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`p-3 rounded-lg ${column.bgColor} text-center text-sm`}
                    >
                      {feature}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
