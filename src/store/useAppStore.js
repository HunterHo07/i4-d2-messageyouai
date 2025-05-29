import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { sampleEntities, getEntityById, searchEntities } from '@/lib/data/entities';
import { samplePosts, getPostsByEntityId, searchPosts } from '@/lib/data/posts';
import { analyzePhoto, generateId } from '@/lib/utils';

// Main application store
export const useAppStore = create(
  persist(
    (set, get) => ({
      // UI State
      isLoading: false,
      currentPage: 'home',
      sidebarOpen: false,
      searchQuery: '',
      selectedEntity: null,
      
      // Demo State
      demoStep: 0,
      demoProgress: 0,
      isDemoActive: false,
      uploadedPhoto: null,
      analysisResult: null,
      
      // Data State
      entities: sampleEntities,
      posts: samplePosts,
      searchResults: [],
      recentSearches: [],
      
      // User State (simulated)
      user: {
        id: 'user_demo',
        name: 'Demo User',
        isAnonymous: true,
        preferences: {
          darkMode: false,
          notifications: true,
          location: true
        }
      },

      // Actions
      setLoading: (loading) => set({ isLoading: loading }),
      
      setCurrentPage: (page) => set({ currentPage: page }),
      
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      setSearchQuery: (query) => {
        set({ searchQuery: query });
        if (query.trim()) {
          const entityResults = searchEntities(query);
          const postResults = searchPosts(query);
          set({ 
            searchResults: [...entityResults, ...postResults],
            recentSearches: [query, ...get().recentSearches.filter(s => s !== query)].slice(0, 10)
          });
        } else {
          set({ searchResults: [] });
        }
      },
      
      selectEntity: (entityId) => {
        const entity = getEntityById(entityId);
        const entityPosts = getPostsByEntityId(entityId);
        set({ 
          selectedEntity: { ...entity, posts: entityPosts }
        });
      },
      
      clearSelectedEntity: () => set({ selectedEntity: null }),

      // Demo Actions
      startDemo: () => set({ 
        isDemoActive: true, 
        demoStep: 0, 
        demoProgress: 0,
        uploadedPhoto: null,
        analysisResult: null
      }),
      
      nextDemoStep: () => set((state) => ({ 
        demoStep: Math.min(state.demoStep + 1, 7),
        demoProgress: Math.min((state.demoStep + 1) / 7 * 100, 100)
      })),
      
      prevDemoStep: () => set((state) => ({ 
        demoStep: Math.max(state.demoStep - 1, 0),
        demoProgress: Math.max((state.demoStep - 1) / 7 * 100, 0)
      })),
      
      setDemoStep: (step) => set({ 
        demoStep: step,
        demoProgress: step / 7 * 100
      }),
      
      endDemo: () => set({ 
        isDemoActive: false, 
        demoStep: 0, 
        demoProgress: 0,
        uploadedPhoto: null,
        analysisResult: null
      }),

      // Photo Upload & Analysis
      uploadPhoto: async (file) => {
        set({ isLoading: true, uploadedPhoto: file });
        
        try {
          // Simulate photo analysis
          const result = await analyzePhoto(file);
          set({ 
            analysisResult: result,
            isLoading: false
          });
          
          // Auto-select the detected entity if it exists
          if (result.success && result.entity) {
            const existingEntity = get().entities.find(e => 
              e.name.toLowerCase().includes(result.entity.name.toLowerCase()) ||
              e.type === result.entity.type
            );
            
            if (existingEntity) {
              get().selectEntity(existingEntity.id);
            }
          }
          
          return result;
        } catch (error) {
          set({ 
            isLoading: false,
            analysisResult: { success: false, error: error.message }
          });
          return { success: false, error: error.message };
        }
      },
      
      clearPhotoAnalysis: () => set({ 
        uploadedPhoto: null, 
        analysisResult: null 
      }),

      // Entity Management
      createEntity: (entityData) => {
        const newEntity = {
          id: generateId(),
          ...entityData,
          reputation: { score: 3.0, totalVotes: 0, upVotes: 0, downVotes: 0 },
          verified: false,
          postCount: 0,
          createdAt: new Date().toISOString(),
          lastSeen: new Date().toISOString()
        };
        
        set((state) => ({
          entities: [...state.entities, newEntity]
        }));
        
        return newEntity;
      },
      
      updateEntity: (entityId, updates) => {
        set((state) => ({
          entities: state.entities.map(entity =>
            entity.id === entityId ? { ...entity, ...updates } : entity
          )
        }));
      },

      // Post Management
      createPost: (postData) => {
        const newPost = {
          id: generateId(),
          ...postData,
          authorId: get().user.id,
          authorName: get().user.isAnonymous ? 'Anonymous' : get().user.name,
          votes: { up: 0, down: 0 },
          verified: false,
          createdAt: new Date().toISOString()
        };
        
        set((state) => ({
          posts: [newPost, ...state.posts]
        }));
        
        // Update entity post count
        get().updateEntity(postData.entityId, {
          postCount: get().posts.filter(p => p.entityId === postData.entityId).length + 1,
          lastSeen: new Date().toISOString()
        });
        
        return newPost;
      },
      
      voteOnPost: (postId, voteType) => {
        set((state) => ({
          posts: state.posts.map(post => {
            if (post.id === postId) {
              const newVotes = { ...post.votes };
              if (voteType === 'up') {
                newVotes.up += 1;
              } else if (voteType === 'down') {
                newVotes.down += 1;
              }
              return { ...post, votes: newVotes };
            }
            return post;
          })
        }));
        
        // Update entity reputation based on post votes
        const post = get().posts.find(p => p.id === postId);
        if (post) {
          const entityPosts = get().posts.filter(p => p.entityId === post.entityId);
          const totalUpVotes = entityPosts.reduce((sum, p) => sum + p.votes.up, 0);
          const totalDownVotes = entityPosts.reduce((sum, p) => sum + p.votes.down, 0);
          const totalVotes = totalUpVotes + totalDownVotes;
          const newScore = totalVotes > 0 ? (totalUpVotes / totalVotes) * 5 : 3.0;
          
          get().updateEntity(post.entityId, {
            reputation: {
              score: Math.round(newScore * 10) / 10,
              totalVotes,
              upVotes: totalUpVotes,
              downVotes: totalDownVotes
            }
          });
        }
      },

      // User Preferences
      updateUserPreferences: (preferences) => {
        set((state) => ({
          user: {
            ...state.user,
            preferences: { ...state.user.preferences, ...preferences }
          }
        }));
      },
      
      toggleDarkMode: () => {
        set((state) => ({
          user: {
            ...state.user,
            preferences: {
              ...state.user.preferences,
              darkMode: !state.user.preferences.darkMode
            }
          }
        }));
      },

      // Analytics & Stats
      getStats: () => {
        const state = get();
        return {
          totalEntities: state.entities.length,
          totalPosts: state.posts.length,
          totalVotes: state.posts.reduce((sum, post) => sum + post.votes.up + post.votes.down, 0),
          averageReputation: state.entities.reduce((sum, entity) => sum + entity.reputation.score, 0) / state.entities.length,
          entitiesByType: state.entities.reduce((acc, entity) => {
            acc[entity.type] = (acc[entity.type] || 0) + 1;
            return acc;
          }, {}),
          topTags: state.posts.reduce((acc, post) => {
            post.tags.forEach(tag => {
              acc[tag] = (acc[tag] || 0) + 1;
            });
            return acc;
          }, {})
        };
      },

      // Reset Functions
      resetDemo: () => set({
        isDemoActive: false,
        demoStep: 0,
        demoProgress: 0,
        uploadedPhoto: null,
        analysisResult: null,
        selectedEntity: null
      }),
      
      resetSearch: () => set({
        searchQuery: '',
        searchResults: []
      }),
      
      resetAll: () => set({
        isLoading: false,
        currentPage: 'home',
        sidebarOpen: false,
        searchQuery: '',
        selectedEntity: null,
        demoStep: 0,
        demoProgress: 0,
        isDemoActive: false,
        uploadedPhoto: null,
        analysisResult: null,
        searchResults: [],
        recentSearches: []
      })
    }),
    {
      name: 'messageyou-app-store',
      partialize: (state) => ({
        user: state.user,
        recentSearches: state.recentSearches,
        entities: state.entities,
        posts: state.posts
      })
    }
  )
);

export default useAppStore;
