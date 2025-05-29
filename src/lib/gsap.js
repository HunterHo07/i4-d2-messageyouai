import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  // Note: MorphSVGPlugin requires GSAP membership
  // gsap.registerPlugin(MorphSVGPlugin);
}

// GSAP Configuration
export const gsapConfig = {
  // Default animation settings
  defaults: {
    duration: 0.6,
    ease: 'power2.out'
  },
  
  // ScrollTrigger defaults
  scrollTrigger: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  }
};

// Animation Utilities
export class AnimationUtils {
  
  /**
   * Fade in animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static fadeIn(target, options = {}) {
    return gsap.fromTo(target, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: options.duration || 0.6,
        ease: options.ease || 'power2.out',
        delay: options.delay || 0,
        ...options
      }
    );
  }

  /**
   * Slide up animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static slideUp(target, options = {}) {
    return gsap.fromTo(target,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8,
        ease: options.ease || 'power2.out',
        delay: options.delay || 0,
        ...options
      }
    );
  }

  /**
   * Scale in animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static scaleIn(target, options = {}) {
    return gsap.fromTo(target,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: options.duration || 0.6,
        ease: options.ease || 'back.out(1.7)',
        delay: options.delay || 0,
        ...options
      }
    );
  }

  /**
   * Stagger animation for multiple elements
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static staggerIn(target, options = {}) {
    return gsap.fromTo(target,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.6,
        ease: options.ease || 'power2.out',
        stagger: options.stagger || 0.1,
        delay: options.delay || 0,
        ...options
      }
    );
  }

  /**
   * Typing text animation
   * @param {string|Element} target - Target element
   * @param {string} text - Text to type
   * @param {Object} options - Animation options
   */
  static typeText(target, text, options = {}) {
    return gsap.to(target, {
      text: text,
      duration: options.duration || text.length * 0.05,
      ease: 'none',
      delay: options.delay || 0,
      ...options
    });
  }

  /**
   * Parallax scroll animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static parallax(target, options = {}) {
    return gsap.to(target, {
      yPercent: options.yPercent || -50,
      ease: 'none',
      scrollTrigger: {
        trigger: options.trigger || target,
        start: options.start || 'top bottom',
        end: options.end || 'bottom top',
        scrub: options.scrub !== undefined ? options.scrub : true,
        ...options.scrollTrigger
      }
    });
  }

  /**
   * Rotate animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static rotate(target, options = {}) {
    return gsap.to(target, {
      rotation: options.rotation || 360,
      duration: options.duration || 2,
      ease: options.ease || 'none',
      repeat: options.repeat !== undefined ? options.repeat : -1,
      ...options
    });
  }

  /**
   * Pulse animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static pulse(target, options = {}) {
    return gsap.to(target, {
      scale: options.scale || 1.1,
      duration: options.duration || 0.5,
      ease: options.ease || 'power2.inOut',
      yoyo: true,
      repeat: options.repeat !== undefined ? options.repeat : -1,
      ...options
    });
  }

  /**
   * Matrix rain effect
   * @param {string|Element} target - Target element
   * @param {Object} options - Animation options
   */
  static matrixRain(target, options = {}) {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    
    if (!element) return;

    const columns = Math.floor(element.offsetWidth / 20);
    const drops = Array(columns).fill(0);

    const tl = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < columns; i++) {
      tl.to({}, {
        duration: Math.random() * 2 + 1,
        onUpdate: function() {
          const char = chars[Math.floor(Math.random() * chars.length)];
          // Create falling character effect
          const span = document.createElement('span');
          span.textContent = char;
          span.style.position = 'absolute';
          span.style.left = i * 20 + 'px';
          span.style.top = drops[i] * 20 + 'px';
          span.style.color = '#00ff00';
          span.style.fontSize = '14px';
          span.style.fontFamily = 'monospace';
          element.appendChild(span);

          gsap.to(span, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => span.remove()
          });

          drops[i]++;
          if (drops[i] * 20 > element.offsetHeight && Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
      }, i * 0.1);
    }

    return tl;
  }

  /**
   * Glitch effect
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static glitch(target, options = {}) {
    const tl = gsap.timeline({ repeat: options.repeat || -1, repeatDelay: options.repeatDelay || 2 });
    
    tl.to(target, {
      skewX: 2,
      duration: 0.1,
      ease: 'power2.inOut'
    })
    .to(target, {
      skewX: -2,
      scaleX: 0.98,
      duration: 0.1,
      ease: 'power2.inOut'
    })
    .to(target, {
      skewX: 0,
      scaleX: 1,
      duration: 0.1,
      ease: 'power2.inOut'
    });

    return tl;
  }

  /**
   * Scroll-triggered reveal animation
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static scrollReveal(target, options = {}) {
    return gsap.fromTo(target,
      { 
        opacity: 0, 
        y: options.y || 50,
        scale: options.scale || 1
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration || 0.8,
        ease: options.ease || 'power2.out',
        scrollTrigger: {
          trigger: options.trigger || target,
          start: options.start || 'top 80%',
          end: options.end || 'bottom 20%',
          toggleActions: options.toggleActions || 'play none none reverse',
          ...options.scrollTrigger
        }
      }
    );
  }

  /**
   * Magnetic hover effect
   * @param {string|Element} target - Target element(s)
   * @param {Object} options - Animation options
   */
  static magneticHover(target, options = {}) {
    const elements = gsap.utils.toArray(target);
    
    elements.forEach(element => {
      const strength = options.strength || 0.3;
      
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });

      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
          x: x * strength,
          y: y * strength,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }
}

// Initialize GSAP defaults
if (typeof window !== 'undefined') {
  gsap.defaults(gsapConfig.defaults);
  ScrollTrigger.defaults(gsapConfig.scrollTrigger);
}

export { gsap, ScrollTrigger };
export default AnimationUtils;
