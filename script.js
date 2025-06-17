// Portfolio Images Data
const portfolioImages = [
    {
        src: "images.png/Leader board.png",
        caption: "Leader Board UI Design"
    },
    {
        src: "images.png/portfolio1.png",
        caption: "Egg Store Interface"
    },
    {
        src: "images.png/ammunation store.png",
        caption: "Ammunation Store UI"
    },
    {
        src: "images.png/lucky wheel.png",
        caption: "Lucky Wheel Interface"
    },
    {
        src: "images.png/daily rewards sci fi.png",
        caption: "Sci-Fi Daily Rewards"
    },
    {
        src: "images.png/Inventory.png",
        caption: "Inventory System UI"
    },
    {
        src: "images.png/quest board.png",
        caption: "Quest Board Interface"
    },
    {
        src: "images.png/pet theme inventory.png",
        caption: "Pet Theme Inventory"
    },
    {
        src: "images.png/pet theme trade portal.png",
        caption: "Pet Theme Trade Portal"
    },
    {
        src: "images.png/pet theme quest log.png",
        caption: "Pet Theme Quest Log"
    },
    {
        src: "images.png/pet theme settings.png",
        caption: "Pet Theme Settings"
    },
    {
        src: "images.png/pet theme lucky wheel.png",
        caption: "Pet Theme Lucky Wheel"
    },
    {
        src: "images.png/pet theme skill tree.png",
        caption: "Pet Theme Skill Tree"
    },
    {
        src: "images.png/pet theme store.png",
        caption: "Pet Theme Store"
    },
    {
        src: "images.png/pet theme daily rewards.png",
        caption: "Pet Theme Daily Rewards"
    },
    {
        src: "images.png/pet theme gamepass.png",
        caption: "Pet Theme Gamepass"
    },
    {
        src: "images.png/pet theme icons in 2d.png",
        caption: "Pet Theme 2D Icons Collection"
    },
    {
        src: "images.png/pet theme icons in 3d.png",
        caption: "Pet Theme 3D Icons Collection"
    }
];

let currentSlideIndex = 0;
let previousSlideIndex = 0;

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Portfolio carousel functions
function changeSlide(direction) {
    previousSlideIndex = currentSlideIndex;
    currentSlideIndex += direction;
    
    // Loop around
    if (currentSlideIndex >= portfolioImages.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = portfolioImages.length - 1;
    }
    
    updatePortfolioSlide();
}

function updatePortfolioSlide() {
    const sliderWrapper = document.querySelector('.portfolio-slider-wrapper');
    const imageContainer = document.querySelector('.portfolio-image');
    const caption = document.querySelector('.portfolio-caption');
    
    if (sliderWrapper && imageContainer && caption) {
        // Determine slide direction based on previous and current index
        let slideDirection = 1; // Default to right slide
        
        if (currentSlideIndex < previousSlideIndex) {
            slideDirection = -1; // Left slide
        }
        
        // Handle wrap-around cases
        if (currentSlideIndex === 0 && previousSlideIndex === portfolioImages.length - 1) {
            slideDirection = 1; // Going from last to first
        } else if (currentSlideIndex === portfolioImages.length - 1 && previousSlideIndex === 0) {
            slideDirection = -1; // Going from first to last
        }
        
        // Dramatic 3D-style animation with longer duration
        sliderWrapper.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        sliderWrapper.style.transform = `translateX(${-slideDirection * 120}%) rotateY(${slideDirection * 15}deg) scale(0.8)`;
        sliderWrapper.style.opacity = '0.5';
        sliderWrapper.style.filter = 'blur(2px)';
        
        setTimeout(() => {
            // Update content
            imageContainer.src = portfolioImages[currentSlideIndex].src;
            imageContainer.alt = portfolioImages[currentSlideIndex].caption;
            caption.textContent = portfolioImages[currentSlideIndex].caption;
            
            // Reset position with enhanced 3D animation
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(${slideDirection * 120}%) rotateY(${slideDirection * 15}deg) scale(0.8)`;
            sliderWrapper.style.opacity = '0.5';
            sliderWrapper.style.filter = 'blur(2px)';
            
            // Force a reflow
            sliderWrapper.offsetHeight;
            
            setTimeout(() => {
                sliderWrapper.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                sliderWrapper.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
                sliderWrapper.style.opacity = '1';
                sliderWrapper.style.filter = 'blur(0px)';
            }, 10);
        }, 600);
    }
}

// Auto-advance portfolio slides
// function autoAdvanceSlides() {
//     setInterval(() => {
//         changeSlide(1);
//     }, 5000); // Change slide every 5 seconds
// }

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Parallax effect for hero section
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Mobile menu toggle (if needed)
function setupMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Add mobile menu button for smaller screens
    if (window.innerWidth <= 768) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: #39FF14;
            font-size: 1.5rem;
            cursor: pointer;
            position: absolute;
            top: 1rem;
            right: 1rem;
        `;
        
        navbar.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Show mobile menu button on small screens
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navLinks.style.display = 'none';
        }
    }
}

// Add hover effects to cards
function setupHoverEffects() {
    const cards = document.querySelectorAll('.benefit-card, .pricing-card, .tool-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Typing effect for hero title
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Add loading animation
function setupLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #181A20;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid #23262F;
        border-top: 3px solid #39FF14;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    loader.appendChild(spinner);
    document.body.appendChild(loader);
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Add particle effect to hero section
function setupParticleEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        `;
        
        hero.appendChild(particlesContainer);
        
        // Create particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #39FF14;
                border-radius: 50%;
                animation: float ${3 + Math.random() * 4}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${0.3 + Math.random() * 0.7};
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Setup all functionality
    setupScrollAnimations();
    setupParallax();
    setupMobileMenu();
    setupHoverEffects();
    setupTypingEffect();
    setupLoadingAnimation();
    setupParticleEffect();
    
    // Add keyboard navigation for portfolio
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
    
    // Add touch/swipe support for mobile portfolio
    let touchStartX = 0;
    let touchEndX = 0;
    
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
        portfolioContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        portfolioContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                changeSlide(1);
            } else {
                // Swipe right - previous slide
                changeSlide(-1);
            }
        }
    }
    
    // Add smooth reveal animation for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check
    
    // Add CSS for revealed sections
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        section.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero {
            opacity: 1 !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(revealStyle);
});

// Add console welcome message
console.log(`
🎨 Welcome to ABINAV's Portfolio!
🎮 UI Designer for Roblox Games
💚 Built with HTML, CSS & JavaScript
📱 Fully responsive design
✨ Smooth animations & interactions
`); 