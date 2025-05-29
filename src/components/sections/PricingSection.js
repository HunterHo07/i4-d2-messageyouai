'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/constants';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Building, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPlanIcon = (planName) => {
    switch (planName.toLowerCase()) {
      case 'free': return Users;
      case 'premium': return Star;
      case 'business': return Building;
      default: return Zap;
    }
  };

  const getPlanVariant = (planName, isPopular) => {
    if (isPopular) return 'neon';
    switch (planName.toLowerCase()) {
      case 'free': return 'glass';
      case 'business': return 'cyber';
      default: return 'elevated';
    }
  };

  const getDiscountedPrice = (price) => {
    return isAnnual ? Math.round(price * 0.8 * 100) / 100 : price;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <Crown className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Choose Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Community Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as your community grows. Every plan includes our core 
            AI-powered features with no hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isAnnual 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan, index) => {
            const IconComponent = getPlanIcon(plan.name);
            const discountedPrice = getDiscountedPrice(plan.price);
            const savings = isAnnual && plan.price > 0 ? (plan.price * 12 - discountedPrice * 12) : 0;
            
            return (
              <Card
                key={index}
                variant={getPlanVariant(plan.name, plan.popular)}
                className={`relative transition-all duration-300 ${
                  plan.popular 
                    ? 'scale-105 shadow-2xl shadow-primary/20 animate-glow' 
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold">
                        ${plan.price === 0 ? '0' : discountedPrice}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-muted-foreground">
                          /{isAnnual ? 'year' : plan.period}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">${plan.price * 12}/year</span>
                        <span className="text-accent ml-2">Save ${savings.toFixed(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3 animate-slide-in-up"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? 'holographic' : plan.name === 'Business' ? 'cyber' : 'neon'}
                    className="w-full group"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Additional Info */}
                  {plan.name === 'Free' && (
                    <p className="text-xs text-center text-muted-foreground">
                      No credit card required
                    </p>
                  )}
                  {plan.name === 'Premium' && (
                    <p className="text-xs text-center text-muted-foreground">
                      14-day free trial included
                    </p>
                  )}
                  {plan.name === 'Business' && (
                    <p className="text-xs text-center text-muted-foreground">
                      Custom enterprise solutions available
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Compare All Features</h3>
            <p className="text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          <Card variant="glass" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Features</th>
                    {PRICING_PLANS.map((plan) => (
                      <th key={plan.name} className="text-center p-4 font-semibold">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Photo Upload & Analysis', free: true, premium: true, business: true },
                    { feature: 'Basic Search', free: true, premium: true, business: true },
                    { feature: 'View Public Posts', free: true, premium: true, business: true },
                    { feature: 'Monthly Post Limit', free: '10', premium: 'Unlimited', business: 'Unlimited' },
                    { feature: 'Advanced AI Analysis', free: false, premium: true, business: true },
                    { feature: 'Priority Search Results', free: false, premium: true, business: true },
                    { feature: 'Trend Alerts', free: false, premium: true, business: true },
                    { feature: 'Enhanced Privacy Controls', free: false, premium: true, business: true },
                    { feature: 'Entity Claiming', free: false, premium: false, business: true },
                    { feature: 'Business Dashboard', free: false, premium: false, business: true },
                    { feature: 'Analytics & Insights', free: false, premium: false, business: true },
                    { feature: 'API Access', free: false, premium: false, business: true },
                    { feature: 'Priority Support', free: false, premium: 'Email', business: 'Phone & Email' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.free === 'boolean' ? (
                          row.free ? <Check className="w-5 h-5 text-primary mx-auto" /> : '—'
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <Check className="w-5 h-5 text-primary mx-auto" /> : '—'
                        ) : (
                          row.premium
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.business === 'boolean' ? (
                          row.business ? <Check className="w-5 h-5 text-primary mx-auto" /> : '—'
                        ) : (
                          row.business
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center space-y-8">
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle."
              },
              {
                question: "Is there a free trial for paid plans?",
                answer: "Premium plans include a 14-day free trial. Business plans can request a custom trial period."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans, no questions asked."
              }
            ].map((faq, index) => (
              <Card key={index} variant="minimal" className="p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-3xl font-bold">Ready to Transform Your Community?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who are already making their communities safer and more transparent with MessageYou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="holographic" className="group">
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Free Trial
            </Button>
            <Button size="xl" variant="glass" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
