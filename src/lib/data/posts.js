// Sample posts data for demo purposes
export const samplePosts = [
  // Posts about John Smith (person_001)
  {
    id: 'post_001',
    entityId: 'person_001',
    authorId: 'user_anonymous_001',
    authorName: 'Anonymous',
    content: 'John helped me carry groceries when I was struggling with heavy bags. Really kind person!',
    tags: ['good_deed', 'helpful'],
    votes: { up: 23, down: 2 },
    images: [],
    verified: false,
    createdAt: '2024-01-20T14:30:00Z',
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 'post_002',
    entityId: 'person_001',
    authorId: 'user_anonymous_002',
    authorName: 'CommunityMember',
    content: 'Saw John return a lost wallet to the police station. Stand-up guy.',
    tags: ['good_deed', 'trustworthy'],
    votes: { up: 18, down: 1 },
    images: [],
    verified: false,
    createdAt: '2024-01-18T11:15:00Z',
    location: { lat: 40.7128, lng: -74.0060 }
  },

  // Posts about Sarah Johnson (person_002)
  {
    id: 'post_003',
    entityId: 'person_002',
    authorId: 'user_anonymous_003',
    authorName: 'NeighborWatch',
    content: 'Sarah organized the neighborhood cleanup last weekend. Amazing community leader!',
    tags: ['community-leader', 'good_deed'],
    votes: { up: 45, down: 0 },
    images: ['/images/posts/cleanup_event.jpg'],
    verified: true,
    createdAt: '2024-01-21T09:20:00Z',
    location: { lat: 40.7589, lng: -73.9851 }
  },

  // Posts about Mike Rodriguez (person_003) - Scammer
  {
    id: 'post_004',
    entityId: 'person_003',
    authorId: 'user_anonymous_004',
    authorName: 'ScamVictim',
    content: 'WARNING: This person tried to sell me fake concert tickets for $200. Complete scam!',
    tags: ['scam', 'warning', 'fake-tickets'],
    votes: { up: 34, down: 3 },
    images: ['/images/posts/fake_tickets.jpg'],
    verified: false,
    createdAt: '2024-01-19T16:45:00Z',
    location: { lat: 40.7505, lng: -73.9934 }
  },
  {
    id: 'post_005',
    entityId: 'person_003',
    authorId: 'user_anonymous_005',
    authorName: 'TouristBeware',
    content: 'Approached me with a "charity" donation scam. Very pushy and aggressive.',
    tags: ['scam', 'warning', 'aggressive'],
    votes: { up: 28, down: 2 },
    images: [],
    verified: false,
    createdAt: '2024-01-18T20:30:00Z',
    location: { lat: 40.7505, lng: -73.9934 }
  },

  // Posts about Joe's Coffee Shop (business_001)
  {
    id: 'post_006',
    entityId: 'business_001',
    authorId: 'user_anonymous_006',
    authorName: 'CoffeeAddict',
    content: 'Best coffee in the neighborhood! Staff is super friendly and prices are reasonable.',
    tags: ['review', 'coffee', 'friendly-staff'],
    votes: { up: 67, down: 4 },
    images: ['/images/posts/coffee_shop_interior.jpg'],
    verified: false,
    createdAt: '2024-01-21T08:15:00Z',
    location: { lat: 40.7614, lng: -73.9776 }
  },
  {
    id: 'post_007',
    entityId: 'business_001',
    authorId: 'user_anonymous_007',
    authorName: 'LocalResident',
    content: 'They let me use their WiFi for hours while I worked. Great atmosphere for remote work.',
    tags: ['review', 'wifi', 'work-friendly'],
    votes: { up: 23, down: 1 },
    images: [],
    verified: false,
    createdAt: '2024-01-19T14:20:00Z',
    location: { lat: 40.7614, lng: -73.9776 }
  },

  // Posts about TechFix Repair (business_002)
  {
    id: 'post_008',
    entityId: 'business_002',
    authorId: 'user_anonymous_008',
    authorName: 'FrustratedCustomer',
    content: 'Charged me $150 to "fix" my phone, but it broke again after 2 days. Poor service.',
    tags: ['review', 'poor-service', 'overpriced'],
    votes: { up: 42, down: 8 },
    images: ['/images/posts/broken_phone.jpg'],
    verified: false,
    createdAt: '2024-01-20T13:45:00Z',
    location: { lat: 40.7282, lng: -74.0776 }
  },
  {
    id: 'post_009',
    entityId: 'business_002',
    authorId: 'user_anonymous_009',
    authorName: 'TechUser',
    content: 'They did fix my laptop, but took 2 weeks longer than promised. Communication was poor.',
    tags: ['review', 'slow-service', 'communication-issues'],
    votes: { up: 19, down: 5 },
    images: [],
    verified: false,
    createdAt: '2024-01-17T16:30:00Z',
    location: { lat: 40.7282, lng: -74.0776 }
  },

  // Posts about Washington Square Park (place_001)
  {
    id: 'post_010',
    entityId: 'place_001',
    authorId: 'user_anonymous_010',
    authorName: 'ParkLover',
    content: 'Beautiful day at the park! Street performers were amazing and the atmosphere was great.',
    tags: ['review', 'street-performers', 'atmosphere'],
    votes: { up: 89, down: 3 },
    images: ['/images/posts/park_performers.jpg'],
    verified: false,
    createdAt: '2024-01-21T15:30:00Z',
    location: { lat: 40.7308, lng: -73.9973 }
  },
  {
    id: 'post_011',
    entityId: 'place_001',
    authorId: 'user_anonymous_011',
    authorName: 'SafetyFirst',
    content: 'Be careful of pickpockets near the fountain area, especially during busy hours.',
    tags: ['warning', 'safety', 'pickpockets'],
    votes: { up: 156, down: 12 },
    images: [],
    verified: false,
    createdAt: '2024-01-19T19:45:00Z',
    location: { lat: 40.7308, lng: -73.9973 }
  },

  // Posts about Blue Honda Civic (vehicle_001)
  {
    id: 'post_012',
    entityId: 'vehicle_001',
    authorId: 'user_anonymous_012',
    authorName: 'ParkingEnforcer',
    content: 'This car has been parked in a handicap spot without a permit for 3 days straight.',
    tags: ['bad-parking', 'handicap-violation'],
    votes: { up: 67, down: 8 },
    images: ['/images/posts/illegal_parking.jpg'],
    verified: false,
    createdAt: '2024-01-21T12:20:00Z',
    location: { lat: 40.7580, lng: -73.9855 }
  },

  // Posts about Lost iPhone (item_001)
  {
    id: 'post_013',
    entityId: 'item_001',
    authorId: 'user_anonymous_013',
    authorName: 'PhoneOwner',
    content: 'LOST: iPhone 15 Pro in Space Black. Last seen near Joe\'s Coffee Shop. $100 reward!',
    tags: ['lost', 'reward-offered', 'electronics'],
    votes: { up: 23, down: 0 },
    images: ['/images/posts/lost_iphone.jpg'],
    verified: false,
    createdAt: '2024-01-20T16:30:00Z',
    location: { lat: 40.7614, lng: -73.9776 }
  },

  // Posts about Found Wallet (item_002)
  {
    id: 'post_014',
    entityId: 'item_002',
    authorId: 'user_anonymous_014',
    authorName: 'GoodSamaritan',
    content: 'FOUND: Brown leather wallet in Washington Square Park. Turned in to park security.',
    tags: ['found', 'good_deed', 'wallet'],
    votes: { up: 45, down: 1 },
    images: [],
    verified: false,
    createdAt: '2024-01-21T10:15:00Z',
    location: { lat: 40.7308, lng: -73.9973 }
  },

  // Posts about Street Art Festival (event_001)
  {
    id: 'post_015',
    entityId: 'event_001',
    authorId: 'user_anonymous_015',
    authorName: 'ArtEnthusiast',
    content: 'Can\'t wait for the Street Art Festival! The lineup looks incredible this year.',
    tags: ['event', 'art', 'excited'],
    votes: { up: 78, down: 2 },
    images: ['/images/posts/festival_lineup.jpg'],
    verified: false,
    createdAt: '2024-01-21T18:45:00Z',
    location: { lat: 40.7282, lng: -74.0776 }
  }
];

// Helper functions for posts data
export const getPostsByEntityId = (entityId) => {
  return samplePosts.filter(post => post.entityId === entityId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const getPostById = (id) => {
  return samplePosts.find(post => post.id === id);
};

export const getRecentPosts = (limit = 10) => {
  return [...samplePosts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
};

export const getTopVotedPosts = (limit = 10) => {
  return [...samplePosts]
    .sort((a, b) => (b.votes.up - b.votes.down) - (a.votes.up - a.votes.down))
    .slice(0, limit);
};

export const getPostsByTag = (tag) => {
  return samplePosts.filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const searchPosts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return samplePosts.filter(post => 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.authorName.toLowerCase().includes(lowercaseQuery)
  );
};

export const getPostStats = () => {
  const totalPosts = samplePosts.length;
  const totalVotes = samplePosts.reduce((sum, post) => sum + post.votes.up + post.votes.down, 0);
  const averageScore = samplePosts.reduce((sum, post) => sum + (post.votes.up - post.votes.down), 0) / totalPosts;
  
  const tagCounts = {};
  samplePosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return {
    totalPosts,
    totalVotes,
    averageScore: Math.round(averageScore * 10) / 10,
    topTags: Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([tag, count]) => ({ tag, count }))
  };
};
