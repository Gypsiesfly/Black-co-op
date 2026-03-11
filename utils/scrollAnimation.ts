interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  translateY?: number;
  opacity?: boolean;
  scale?: boolean;
}

export const setupScrollAnimation = (
  element: HTMLElement,
  options: ScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.2,
    delay = 0,
    duration = 800,
    translateY = 30,
    opacity = true,
    scale = false,
  } = options;

  // Reset any existing styles
  element.style.transform = '';
  element.style.opacity = '';
  element.style.transition = '';

  // Set initial styles with a small delay to ensure they take effect
  requestAnimationFrame(() => {
    element.style.opacity = opacity ? '0' : '1';
    element.style.transform = `${translateY ? `translateY(${translateY}px)` : ''} ${
      scale ? 'scale(0.95)' : ''
    }`.trim();
    element.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;
    element.style.willChange = 'opacity, transform';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
          });
          observer.unobserve(element);

          // Clean up styles after animation
          setTimeout(() => {
            element.style.willChange = 'auto';
          }, duration + delay);
        }
      });
    },
    { 
      threshold,
      rootMargin: '50px' // Start animation slightly before element comes into view
    }
  );

  observer.observe(element);
  return () => observer.unobserve(element);
};

export const setupScrollAnimations = () => {
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    // Helper function to animate multiple elements with stagger
    const animateGroup = (elements: NodeListOf<HTMLElement>, options: ScrollAnimationOptions = {}) => {
      elements.forEach((el, index) => {
        setupScrollAnimation(el, {
          ...options,
          delay: (options.delay || 0) + index * 100, // Reduced stagger time
        });
      });
    };

    // Get all elements that need animation
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    const cards = document.querySelectorAll('.animate-card') as NodeListOf<HTMLElement>;
    const titles = document.querySelectorAll('.animate-title') as NodeListOf<HTMLElement>;
    const texts = document.querySelectorAll('.animate-text') as NodeListOf<HTMLElement>;
    const buttons = document.querySelectorAll('.animate-button') as NodeListOf<HTMLElement>;
    const images = document.querySelectorAll('.animate-image') as NodeListOf<HTMLElement>;

    // Hero section animation
    if (heroSection) {
      setupScrollAnimation(heroSection, { translateY: 0, scale: true, duration: 1200 });
    }

    // Animate elements with different configurations
    animateGroup(cards, { translateY: 40, duration: 1000 });
    animateGroup(titles, { translateY: 30, duration: 800 });
    animateGroup(texts, { translateY: 20, delay: 100, duration: 800 });
    animateGroup(buttons, { translateY: 20, delay: 200, duration: 600 });
    animateGroup(images, { translateY: 30, scale: true, duration: 1000 });
  }, 100);
};
