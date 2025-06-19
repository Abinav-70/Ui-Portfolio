// Portfolio Images Data
const cartoonyImages = [
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

const scifiImages = [
    {
        src: "images.png/daily rewards sci fi.png",
        caption: "Sci-Fi Daily Rewards"
    },
    {
        src: "images.png/Scifi theme inventory.png",
        caption: "Sci-Fi Inventory"
    },
    {
        src: "images.png/scifi theme items.png",
        caption: "Sci-Fi Items"
    }
];

let currentCategory = 'cartoony';
let portfolioImages = cartoonyImages;
let currentSlideIndex = 0;
let previousSlideIndex = 0;

function switchCategory(category) {
    if (category === currentCategory) return;
    currentCategory = category;
    portfolioImages = (category === 'scifi') ? scifiImages : cartoonyImages;
    currentSlideIndex = 0;
    previousSlideIndex = 0;
    updatePortfolioSlide();
    // Update button active state
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.category-btn.' + category).classList.add('active');
}

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
        
        // Smooth fade out with scale and blur
        sliderWrapper.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        sliderWrapper.style.transform = `translateX(${-slideDirection * 50}px) scale(0.95)`;
        sliderWrapper.style.opacity = '0.7';
        sliderWrapper.style.filter = 'blur(1px)';
        
        setTimeout(() => {
            // Update content smoothly
            imageContainer.style.transition = 'opacity 0.3s ease';
            imageContainer.style.opacity = '0';
            
            setTimeout(() => {
                // Update content
                imageContainer.src = portfolioImages[currentSlideIndex].src;
                imageContainer.alt = portfolioImages[currentSlideIndex].caption;
                caption.textContent = portfolioImages[currentSlideIndex].caption;
                
                // Fade in new content
                imageContainer.style.opacity = '1';
                
                // Reset position and animate back in
                sliderWrapper.style.transition = 'none';
                sliderWrapper.style.transform = `translateX(${slideDirection * 50}px) scale(0.95)`;
                sliderWrapper.style.opacity = '0.7';
                sliderWrapper.style.filter = 'blur(1px)';
                
                // Force a reflow
                sliderWrapper.offsetHeight;
                
                setTimeout(() => {
                    sliderWrapper.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    sliderWrapper.style.transform = 'translateX(0) scale(1)';
                    sliderWrapper.style.opacity = '1';
                    sliderWrapper.style.filter = 'blur(0px)';
                }, 10);
            }, 150);
        }, 300);
    }
}

// Auto-advance portfolio slides
// function autoAdvanceSlides() {
//     setInterval(() => {
//         changeSlide(1);
//     }, 5000); // Change slide every 5 seconds
// }

// Enhanced scroll animations with intersection observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(section);
    });

    // Observe individual elements for staggered animations
    const animatedElements = document.querySelectorAll('.benefit-card, .tool-item, .portfolio-container');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Enhanced parallax effect for hero section
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const navbar = document.querySelector('.navbar');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
        
        // Navbar background effect
        if (navbar) {
            if (scrolled > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        }
    });
}

// Enhanced mobile menu with smooth animations
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
            color: #FFFFFF;
            font-size: 1.5rem;
            cursor: pointer;
            position: absolute;
            top: 1rem;
            right: 1rem;
            transition: all 0.3s ease;
        `;
        
        navbar.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            if (isOpen) {
                navLinks.style.transform = 'translateY(-20px)';
                navLinks.style.opacity = '0';
                setTimeout(() => {
                    navLinks.style.display = 'none';
                }, 300);
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.transform = 'translateY(0)';
                navLinks.style.opacity = '1';
            }
        });
        
        // Show mobile menu button on small screens
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navLinks.style.display = 'none';
            navLinks.style.transition = 'all 0.3s ease';
        }
    }
}

// Enhanced hover effects with 3D transforms
function setupHoverEffects() {
    const cards = document.querySelectorAll('.benefit-card, .tool-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03) rotateX(5deg)';
            card.style.boxShadow = '0 25px 50px rgba(255, 255, 255, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        });
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.cta-button, .contact-btn, .arrow-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px) scale(1.05)';
            button.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
        });
    });
}

// Enhanced typing effect with cursor animation
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.position = 'relative';
        
        // Add cursor element
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.cssText = `
            color: #FFFFFF;
            animation: blink 1s infinite;
            margin-left: 2px;
        `;
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    cursor.remove();
                }, 1000);
            }
        };
        
        heroTitle.appendChild(cursor);
        
        // Add blink animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Enhanced loading animation with progress bar
function setupLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.8s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 60px;
        height: 60px;
        border: 3px solid #333333;
        border-top: 3px solid #FFFFFF;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 200px;
        height: 4px;
        background: #333333;
        border-radius: 2px;
        overflow: hidden;
        position: relative;
    `;
    
    const progressFill = document.createElement('div');
    progressFill.style.cssText = `
        width: 0%;
        height: 100%;
        background: linear-gradient(45deg, #FFFFFF, #CCCCCC);
        border-radius: 2px;
        transition: width 0.3s ease;
    `;
    
    progressBar.appendChild(progressFill);
    loader.appendChild(spinner);
    loader.appendChild(progressBar);
    document.body.appendChild(loader);
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressFill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 100);
    
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
            }, 800);
        }, 1500);
    });
}

// Enhanced particle effect with more variety
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
        
        // Create particles with different sizes and speeds
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 6 + 4;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${Math.random() > 0.5 ? '#FFFFFF' : '#CCCCCC'};
                border-radius: 50%;
                animation: float ${duration}s linear infinite;
                animation-delay: ${delay}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${0.2 + Math.random() * 0.8};
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Add float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { 
                    transform: translateY(100vh) rotate(0deg); 
                    opacity: 0; 
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { 
                    transform: translateY(-100px) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add smooth scroll reveal animations
function setupRevealAnimations() {
    const revealElements = document.querySelectorAll('.benefit-card, .tool-item, .portfolio-container');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(element);
    });
}

// Add text reveal animations
function setupTextAnimations() {
    const textElements = document.querySelectorAll('h2, h3, p');
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.5
    });
    
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        textObserver.observe(element);
    });
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
    setupRevealAnimations();
    setupTextAnimations();
    
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
        
        .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
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
