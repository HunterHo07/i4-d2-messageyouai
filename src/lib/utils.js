import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * @param {...string} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to format numbers with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

/**
 * Utility function to generate random ID
 * @param {number} length - Length of the ID
 * @returns {string} Random ID
 */
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Utility function to simulate API delay
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Utility function to simulate photo analysis
 * @param {File} file - Image file
 * @returns {Promise<Object>} Analysis result
 */
export async function analyzePhoto(file) {
  await delay(2000); // Simulate processing time
  
  // Simulate AI analysis result
  const entities = [
    { type: 'person', confidence: 0.95, name: 'John Doe' },
    { type: 'business', confidence: 0.87, name: 'Coffee Shop Downtown' },
    { type: 'place', confidence: 0.92, name: 'Central Park' },
    { type: 'vehicle', confidence: 0.89, name: 'Blue Honda Civic' },
    { type: 'item', confidence: 0.78, name: 'Lost iPhone' }
  ];
  
  const randomEntity = entities[Math.floor(Math.random() * entities.length)];
  
  return {
    success: true,
    entity: randomEntity,
    processing_time: '2.3s',
    timestamp: new Date().toISOString()
  };
}

/**
 * Utility function to get entity color based on type
 * @param {string} type - Entity type
 * @returns {string} Tailwind color class
 */
export function getEntityColor(type) {
  const colors = {
    person: 'bg-blue-500',
    business: 'bg-green-500',
    place: 'bg-purple-500',
    vehicle: 'bg-orange-500',
    item: 'bg-pink-500'
  };
  return colors[type] || 'bg-gray-500';
}

/**
 * Utility function to format date
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

/**
 * Utility function to calculate reputation score
 * @param {number} upVotes - Number of up votes
 * @param {number} downVotes - Number of down votes
 * @returns {number} Reputation score (0-5)
 */
export function calculateReputation(upVotes, downVotes) {
  const total = upVotes + downVotes;
  if (total === 0) return 3; // Default neutral score
  
  const ratio = upVotes / total;
  return Math.round(ratio * 5 * 10) / 10; // Round to 1 decimal place
}

/**
 * Utility function to get reputation color
 * @param {number} score - Reputation score (0-5)
 * @returns {string} Tailwind color class
 */
export function getReputationColor(score) {
  if (score >= 4) return 'text-green-500';
  if (score >= 3) return 'text-yellow-500';
  if (score >= 2) return 'text-orange-500';
  return 'text-red-500';
}

/**
 * Utility function to simulate localStorage operations
 * @param {string} key - Storage key
 * @param {any} value - Value to store (optional)
 * @returns {any} Stored value or null
 */
export function storage(key, value) {
  if (typeof window === 'undefined') return null;
  
  if (value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error parsing localStorage item:', error);
    return null;
  }
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility function to throttle function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
