'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAppStore } from '@/store/useAppStore';
import { getPostsByEntityId } from '@/lib/data/posts';
import { formatDate, getEntityColor, getReputationColor } from '@/lib/utils';
import { 
  Star, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Shield,
  AlertTriangle,
  Plus,
  Send,
  TrendingUp,
  Users,
  Eye,
  Flag,
  Share2,
  RotateCcw
} from 'lucide-react';

export default function DemoEntityProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [newPost, setNewPost] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  
  const { selectedEntity, resetDemo, voteOnPost, createPost } = useAppStore();

  if (!selectedEntity) {
    return (
      <Card variant="glass" className="p-8 text-center">
        <p className="text-muted-foreground">No entity selected</p>
      </Card>
    );
  }

  const entity = selectedEntity;
  const posts = getPostsByEntityId(entity.id);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'posts', label: 'Community Posts', icon: MessageSquare },
    { id: 'add-post', label: 'Add Report', icon: Plus }
  ];

  const postTags = [
    'review', 'scam', 'good_deed', 'warning', 'lost', 'found', 'helpful', 'suspicious'
  ];

  const handleVote = (postId, voteType) => {
    voteOnPost(postId, voteType);
  };

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      createPost({
        entityId: entity.id,
        content: newPost,
        tags: selectedTags,
        location: entity.location
      });
      setNewPost('');
      setSelectedTags([]);
      setActiveTab('posts');
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Entity Header */}
      <Card variant="glass" className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
          
          {/* Entity Info */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getEntityColor(entity.type)}/10`}>
                  <div className={`w-8 h-8 rounded ${getEntityColor(entity.type)}`} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{entity.name}</h1>
                  <p className="text-muted-foreground capitalize">{entity.type}</p>
                  {entity.verified && (
                    <div className="flex items-center space-x-1 text-primary mt-1">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Verified Entity</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="group">
                  <Share2 className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="group">
                  <Flag className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Report
                </Button>
              </div>
            </div>

            {/* Location & Last Seen */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{entity.location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Last seen {formatDate(entity.lastSeen)}</span>
              </div>
            </div>

            {/* Tags */}
            {entity.tags && entity.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entity.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag.replace('_', ' ')}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Reputation Card */}
          <Card variant="elevated" className="lg:w-80">
            <CardContent className="p-6 text-center space-y-4">
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${getReputationColor(entity.reputation.score)}`}>
                  {entity.reputation.score}/5
                </div>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-5 h-5 ${
                        star <= entity.reputation.score 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {entity.reputation.totalVotes} community votes
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1 text-green-400">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-medium">{entity.reputation.upVotes}</span>
                  </div>
                  <p className="text-muted-foreground">Positive</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1 text-red-400">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="font-medium">{entity.reputation.downVotes}</span>
                  </div>
                  <p className="text-muted-foreground">Negative</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Card>

      {/* Tabs */}
      <Card variant="glass">
        <div className="flex border-b border-border">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.id === 'posts' && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                    {posts.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Community Posts",
                    value: entity.postCount,
                    description: "Total reports",
                    icon: MessageSquare,
                    color: "text-blue-400"
                  },
                  {
                    title: "Reputation Trend",
                    value: "+0.3",
                    description: "This month",
                    icon: TrendingUp,
                    color: "text-green-400"
                  },
                  {
                    title: "Community Size",
                    value: "1.2K",
                    description: "Active users",
                    icon: Users,
                    color: "text-purple-400"
                  }
                ].map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <Card key={index} variant="minimal" className="p-4 text-center">
                      <div className={`mx-auto w-10 h-10 rounded-full bg-current/10 flex items-center justify-center mb-3 ${stat.color}`}>
                        <StatIcon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{stat.title}</div>
                        <div className="text-xs text-muted-foreground">{stat.description}</div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {posts.slice(0, 3).map((post, index) => (
                    <Card key={post.id} variant="minimal" className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{post.content}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>{post.authorName}</span>
                            <span>{formatDate(post.createdAt)}</span>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{post.votes.up}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Posts Tab */}
          {activeTab === 'posts' && (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} variant="minimal" className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{post.authorName}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatDate(post.createdAt)}
                          </div>
                        </div>
                      </div>
                      {post.verified && (
                        <Shield className="w-5 h-5 text-primary" />
                      )}
                    </div>

                    <p className="text-sm">{post.content}</p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tag.replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleVote(post.id, 'up')}
                        className="group"
                      >
                        <ThumbsUp className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        {post.votes.up}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleVote(post.id, 'down')}
                        className="group"
                      >
                        <ThumbsDown className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        {post.votes.down}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Add Post Tab */}
          {activeTab === 'add-post' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Add Community Report</h3>
                <p className="text-muted-foreground mb-6">
                  Share your experience with {entity.name} to help the community
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Report</label>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Describe your experience..."
                    className="w-full h-32 p-3 border border-input rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {postTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {tag.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="holographic" 
                  onClick={handleSubmitPost}
                  disabled={!newPost.trim()}
                  className="group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Submit Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Demo Complete */}
      <Card variant="cyber" className="p-6 text-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Demo Complete!</h3>
          <p className="text-muted-foreground">
            You've experienced the full MessageYou workflow from photo upload to community insights.
          </p>
          <Button 
            variant="holographic" 
            onClick={resetDemo}
            className="group"
          >
            <RotateCcw className="w-4 h-4 mr-2 group-hover:animate-spin" />
            Try Another Photo
          </Button>
        </div>
      </Card>
    </div>
  );
}
