// Sample entity data for demo purposes
export const sampleEntities = [
  // People
  {
    id: 'person_001',
    type: 'person',
    name: 'John Smith',
    image: '/images/entities/person_001.jpg',
    location: { lat: 40.7128, lng: -74.0060, address: 'Manhattan, NY' },
    reputation: { score: 4.2, totalVotes: 156, upVotes: 131, downVotes: 25 },
    verified: false,
    tags: ['helpful', 'reliable'],
    postCount: 23,
    createdAt: '2024-01-15T10:30:00Z',
    lastSeen: '2024-01-20T14:22:00Z'
  },
  {
    id: 'person_002',
    type: 'person',
    name: 'Sarah Johnson',
    image: '/images/entities/person_002.jpg',
    location: { lat: 40.7589, lng: -73.9851, address: 'Central Park, NY' },
    reputation: { score: 4.8, totalVotes: 89, upVotes: 85, downVotes: 4 },
    verified: true,
    tags: ['community-leader', 'trustworthy'],
    postCount: 45,
    createdAt: '2024-01-10T09:15:00Z',
    lastSeen: '2024-01-21T11:30:00Z'
  },
  {
    id: 'person_003',
    type: 'person',
    name: 'Mike Rodriguez',
    image: '/images/entities/person_003.jpg',
    location: { lat: 40.7505, lng: -73.9934, address: 'Times Square, NY' },
    reputation: { score: 2.1, totalVotes: 67, upVotes: 23, downVotes: 44 },
    verified: false,
    tags: ['suspicious', 'scammer'],
    postCount: 12,
    createdAt: '2024-01-18T16:45:00Z',
    lastSeen: '2024-01-19T20:15:00Z'
  },

  // Businesses
  {
    id: 'business_001',
    type: 'business',
    name: 'Joe\'s Coffee Shop',
    image: '/images/entities/business_001.jpg',
    location: { lat: 40.7614, lng: -73.9776, address: '123 Main St, NY' },
    reputation: { score: 4.5, totalVotes: 234, upVotes: 210, downVotes: 24 },
    verified: true,
    tags: ['coffee', 'local-business', 'friendly-staff'],
    postCount: 67,
    createdAt: '2024-01-05T08:00:00Z',
    lastSeen: '2024-01-21T18:30:00Z',
    businessInfo: {
      hours: 'Mon-Fri 6AM-8PM, Sat-Sun 7AM-9PM',
      phone: '(555) 123-4567',
      website: 'www.joescoffee.com'
    }
  },
  {
    id: 'business_002',
    type: 'business',
    name: 'TechFix Repair',
    image: '/images/entities/business_002.jpg',
    location: { lat: 40.7282, lng: -74.0776, address: '456 Tech Ave, NY' },
    reputation: { score: 3.2, totalVotes: 98, upVotes: 62, downVotes: 36 },
    verified: false,
    tags: ['electronics', 'repair', 'overpriced'],
    postCount: 34,
    createdAt: '2024-01-12T12:00:00Z',
    lastSeen: '2024-01-20T15:45:00Z',
    businessInfo: {
      hours: 'Mon-Sat 9AM-6PM',
      phone: '(555) 987-6543',
      website: 'www.techfixrepair.com'
    }
  },

  // Places
  {
    id: 'place_001',
    type: 'place',
    name: 'Washington Square Park',
    image: '/images/entities/place_001.jpg',
    location: { lat: 40.7308, lng: -73.9973, address: 'Washington Square Park, NY' },
    reputation: { score: 4.3, totalVotes: 445, upVotes: 382, downVotes: 63 },
    verified: true,
    tags: ['park', 'public-space', 'events'],
    postCount: 156,
    createdAt: '2024-01-01T00:00:00Z',
    lastSeen: '2024-01-21T19:20:00Z'
  },
  {
    id: 'place_002',
    type: 'place',
    name: 'Brooklyn Bridge',
    image: '/images/entities/place_002.jpg',
    location: { lat: 40.7061, lng: -73.9969, address: 'Brooklyn Bridge, NY' },
    reputation: { score: 4.7, totalVotes: 892, upVotes: 839, downVotes: 53 },
    verified: true,
    tags: ['landmark', 'tourist-attraction', 'scenic'],
    postCount: 278,
    createdAt: '2024-01-01T00:00:00Z',
    lastSeen: '2024-01-21T17:10:00Z'
  },

  // Vehicles
  {
    id: 'vehicle_001',
    type: 'vehicle',
    name: 'Blue Honda Civic - ABC123',
    image: '/images/entities/vehicle_001.jpg',
    location: { lat: 40.7580, lng: -73.9855, address: 'Upper East Side, NY' },
    reputation: { score: 2.8, totalVotes: 45, upVotes: 28, downVotes: 17 },
    verified: false,
    tags: ['bad-parking', 'reckless-driving'],
    postCount: 8,
    createdAt: '2024-01-16T14:30:00Z',
    lastSeen: '2024-01-21T08:45:00Z',
    vehicleInfo: {
      licensePlate: 'ABC123',
      make: 'Honda',
      model: 'Civic',
      color: 'Blue',
      year: '2019'
    }
  },
  {
    id: 'vehicle_002',
    type: 'vehicle',
    name: 'Red Tesla Model 3 - XYZ789',
    image: '/images/entities/vehicle_002.jpg',
    location: { lat: 40.7505, lng: -73.9934, address: 'Midtown, NY' },
    reputation: { score: 4.1, totalVotes: 23, upVotes: 19, downVotes: 4 },
    verified: false,
    tags: ['courteous-driver', 'electric-vehicle'],
    postCount: 5,
    createdAt: '2024-01-19T11:20:00Z',
    lastSeen: '2024-01-21T13:15:00Z',
    vehicleInfo: {
      licensePlate: 'XYZ789',
      make: 'Tesla',
      model: 'Model 3',
      color: 'Red',
      year: '2023'
    }
  },

  // Items
  {
    id: 'item_001',
    type: 'item',
    name: 'Lost iPhone 15 Pro',
    image: '/images/entities/item_001.jpg',
    location: { lat: 40.7614, lng: -73.9776, address: 'Near Joe\'s Coffee Shop' },
    reputation: { score: 3.0, totalVotes: 12, upVotes: 6, downVotes: 6 },
    verified: false,
    tags: ['lost-item', 'electronics', 'reward-offered'],
    postCount: 3,
    createdAt: '2024-01-20T16:30:00Z',
    lastSeen: '2024-01-20T16:30:00Z',
    itemInfo: {
      category: 'Electronics',
      brand: 'Apple',
      model: 'iPhone 15 Pro',
      color: 'Space Black',
      condition: 'Good',
      reward: '$100'
    }
  },
  {
    id: 'item_002',
    type: 'item',
    name: 'Found Wallet - Brown Leather',
    image: '/images/entities/item_002.jpg',
    location: { lat: 40.7308, lng: -73.9973, address: 'Washington Square Park' },
    reputation: { score: 4.5, totalVotes: 8, upVotes: 7, downVotes: 1 },
    verified: false,
    tags: ['found-item', 'wallet', 'good-samaritan'],
    postCount: 2,
    createdAt: '2024-01-21T10:15:00Z',
    lastSeen: '2024-01-21T10:15:00Z',
    itemInfo: {
      category: 'Personal Items',
      brand: 'Unknown',
      color: 'Brown',
      condition: 'Good',
      foundBy: 'Anonymous Good Samaritan'
    }
  },

  // Events
  {
    id: 'event_001',
    type: 'event',
    name: 'Street Art Festival 2024',
    image: '/images/entities/event_001.jpg',
    location: { lat: 40.7282, lng: -74.0776, address: 'SoHo District, NY' },
    reputation: { score: 4.6, totalVotes: 167, upVotes: 153, downVotes: 14 },
    verified: true,
    tags: ['art', 'festival', 'community-event'],
    postCount: 89,
    createdAt: '2024-01-08T09:00:00Z',
    lastSeen: '2024-01-21T20:30:00Z',
    eventInfo: {
      startDate: '2024-02-15T10:00:00Z',
      endDate: '2024-02-17T22:00:00Z',
      organizer: 'NYC Arts Council',
      website: 'www.streetartfest2024.com',
      ticketPrice: 'Free'
    }
  }
];

// Helper functions for entity data
export const getEntityById = (id) => {
  return sampleEntities.find(entity => entity.id === id);
};

export const getEntitiesByType = (type) => {
  return sampleEntities.filter(entity => entity.type === type);
};

export const searchEntities = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return sampleEntities.filter(entity => 
    entity.name.toLowerCase().includes(lowercaseQuery) ||
    entity.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    entity.location.address.toLowerCase().includes(lowercaseQuery)
  );
};

export const getTopRatedEntities = (limit = 10) => {
  return [...sampleEntities]
    .sort((a, b) => b.reputation.score - a.reputation.score)
    .slice(0, limit);
};

export const getRecentEntities = (limit = 10) => {
  return [...sampleEntities]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
};

export const getEntitiesByLocation = (lat, lng, radiusKm = 5) => {
  return sampleEntities.filter(entity => {
    const distance = calculateDistance(
      lat, lng,
      entity.location.lat, entity.location.lng
    );
    return distance <= radiusKm;
  });
};

// Helper function to calculate distance between two coordinates
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}
