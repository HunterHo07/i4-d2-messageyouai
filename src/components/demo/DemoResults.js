'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { sampleEntities } from '@/lib/data/entities';
import { getEntityColor, formatDate, calculateReputation } from '@/lib/utils';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Filter,
  Eye,
  MessageSquare,
  TrendingUp,
  Shield,
  AlertTriangle
} from 'lucide-react';

export default function DemoResults() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { nextDemoStep, selectEntity } = useAppStore();

  // Get sample results (first 6 entities for demo)
  const searchResults = sampleEntities.slice(0, 6);

  const filters = [
    { id: 'all', label: 'All Results', count: searchResults.length },
    { id: 'person', label: 'People', count: searchResults.filter(e => e.type === 'person').length },
    { id: 'business', label: 'Businesses', count: searchResults.filter(e => e.type === 'business').length },
    { id: 'place', label: 'Places', count: searchResults.filter(e => e.type === 'place').length },
    { id: 'vehicle', label: 'Vehicles', count: searchResults.filter(e => e.type === 'vehicle').length }
  ];

  const filteredResults = selectedFilter === 'all' 
    ? searchResults 
    : searchResults.filter(entity => entity.type === selectedFilter);

  const getReputationIcon = (score) => {
    if (score >= 4) return <Shield className="w-4 h-4 text-green-400" />;
    if (score >= 3) return <Star className="w-4 h-4 text-yellow-400" />;
    return <AlertTriangle className="w-4 h-4 text-red-400" />;
  };

  const getReputationLabel = (score) => {
    if (score >= 4) return 'Trusted';
    if (score >= 3) return 'Average';
    return 'Caution';
  };

  const handleEntitySelect = (entity) => {
    selectEntity(entity.id);
    nextDemoStep();
  };

  return (
    <div className="space-y-8">
      
      {/* Results Header */}
      <Card variant="glass" className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Search Results</h2>
            <p className="text-muted-foreground">
              Found {filteredResults.length} matching entities in our database
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">95.7% match confidence</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'neon' : 'ghost'}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className="group"
            >
              <Filter className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              {filter.label}
              <span className="ml-2 px-2 py-0.5 bg-current/10 rounded-full text-xs">
                {filter.count}
              </span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((entity, index) => (
          <Card 
            key={entity.id}
            variant="elevated"
            className="group cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => handleEntitySelect(entity)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getEntityColor(entity.type)}/10`}>
                    <div className={`w-6 h-6 rounded ${getEntityColor(entity.type)}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {entity.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground capitalize">
                      {entity.type}
                    </p>
                  </div>
                </div>
                {entity.verified && (
                  <div className="flex items-center space-x-1 text-primary">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs">Verified</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Reputation Score */}
              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  {getReputationIcon(entity.reputation.score)}
                  <span className="font-medium">{getReputationLabel(entity.reputation.score)}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">{entity.reputation.score}/5</div>
                  <div className="text-xs text-muted-foreground">
                    {entity.reputation.totalVotes} votes
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{entity.location.address}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>{entity.postCount} posts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{formatDate(entity.lastSeen).split(',')[0]}</span>
                </div>
              </div>

              {/* Tags */}
              {entity.tags && entity.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {entity.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {entity.tags.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{entity.tags.length - 2}
                    </span>
                  )}
                </div>
              )}

              {/* Action Button */}
              <Button 
                variant="neon" 
                size="sm" 
                className="w-full group"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEntitySelect(entity);
                }}
              >
                <Eye className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Results Summary */}
      <Card variant="cyber" className="p-6">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Total Matches",
              value: searchResults.length,
              description: "Entities found",
              icon: Search,
              color: "text-blue-400"
            },
            {
              title: "High Confidence",
              value: searchResults.filter(e => e.reputation.score >= 4).length,
              description: "Trusted entities",
              icon: Shield,
              color: "text-green-400"
            },
            {
              title: "Community Posts",
              value: searchResults.reduce((sum, e) => sum + e.postCount, 0),
              description: "Total reports",
              icon: MessageSquare,
              color: "text-purple-400"
            },
            {
              title: "Avg. Reputation",
              value: (searchResults.reduce((sum, e) => sum + e.reputation.score, 0) / searchResults.length).toFixed(1),
              description: "Overall rating",
              icon: TrendingUp,
              color: "text-orange-400"
            }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center space-y-2">
                <div className={`mx-auto w-12 h-12 rounded-full bg-current/10 flex items-center justify-center ${stat.color}`}>
                  <StatIcon className={`w-6 h-6 ${stat.color}`} />
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
      </Card>

      {/* Search Tips */}
      <Card variant="minimal" className="p-6">
        <div className="text-center space-y-4">
          <h3 className="font-semibold">Search Tips</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-4 h-4 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Use filters to narrow down results by entity type
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Check reputation scores before engaging
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Click any entity to see detailed community reports
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
