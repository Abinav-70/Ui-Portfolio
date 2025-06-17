# 🎨 ABINAV - UI Designer Portfolio

A modern, professional portfolio website for a UI designer specializing in Roblox games. Built with HTML, CSS, and JavaScript with a dark theme and vibrant neon accents.

## ✨ Features

### 🎯 Design & Aesthetics
- **Dark Theme**: Professional dark background (#181A20) with neon accent colors
- **Modern Typography**: Inter font family for clean, readable text
- **Vibrant Accents**: Neon green (#39FF14), blue (#00E0FF), and purple (#A259FF)
- **Smooth Animations**: Fade-ins, hover effects, and micro-interactions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile

### 🚀 Interactive Features
- **Portfolio Carousel**: Auto-advancing slides with manual navigation
- **Smooth Scrolling**: Seamless navigation between sections
- **Parallax Effects**: Subtle depth in the hero section
- **Touch Support**: Swipe gestures for mobile portfolio navigation
- **Keyboard Navigation**: Arrow keys for portfolio browsing
- **Loading Animation**: Professional loading screen
- **Particle Effects**: Floating particles in the hero section

### 📱 Sections Included
1. **Hero Section**: Eye-catching introduction with navigation
2. **Portfolio**: Showcase of UI designs with carousel
3. **Benefits**: Three-column grid highlighting services
4. **Tools**: Software and platforms used
5. **Pricing**: Two-tier pricing structure
6. **Contact**: Call-to-action with Discord integration
7. **Footer**: Links and copyright information

## 🛠️ Setup Instructions

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. **Download the files**:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Open in browser**:
   - Double-click `index.html` or open it in your preferred browser
   - Or use a local server for better performance

### Using a Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Colors
The color scheme is defined in `styles.css`. Main colors:
```css
--background: #181A20;     /* Dark background */
--surface: #23262F;        /* Card backgrounds */
--accent: #39FF14;         /* Neon green */
--accent-blue: #00E0FF;    /* Neon blue */
--accent-purple: #A259FF;  /* Neon purple */
```

### Content Updates

#### Personal Information
1. **Name/Logo**: Update the logo text in `index.html` line 15
2. **Discord Link**: Replace all instances of `https://discord.gg/yourprofile`
3. **Portfolio Images**: Replace placeholder URLs in `script.js` lines 2-26

#### Portfolio Images
Update the `portfolioImages` array in `script.js`:
```javascript
const portfolioImages = [
    {
        src: "path/to/your/image1.png",
        caption: "Your UI Design Description"
    },
    // Add more images...
];
```

#### Pricing
Modify pricing in `index.html` lines 95-115:
- Update prices
- Change descriptions
- Modify included features

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add animations in `script.js` if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Performance Features

- **Optimized Images**: Use WebP format when possible
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Minimal JavaScript**: Efficient code with no external dependencies

## 🔧 Advanced Customization

### Adding More Portfolio Images
1. Add images to your project folder
2. Update the `portfolioImages` array in `script.js`
3. Ensure images are optimized (recommended: 400x250px)

### Changing Animations
Modify animation durations in `styles.css`:
```css
transition: all 0.3s ease; /* Change 0.3s to desired duration */
```

### Adding Contact Forms
Replace Discord links with actual contact forms:
```html
<form class="contact-form">
    <input type="email" placeholder="Your Email">
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Send Message</button>
</form>
```

## 📄 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Design Inspiration

This portfolio is inspired by modern design trends:
- Clean, minimal layouts
- Dark themes with neon accents
- Smooth micro-interactions
- Professional typography
- Gaming aesthetic elements

## 🤝 Contributing

Feel free to customize this portfolio for your own use. If you make improvements, consider sharing them!

## 📞 Support

For questions or customization help:
- Check the code comments for guidance
- Review the CSS variables for easy color changes
- Test responsiveness on different devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the Roblox UI design community**

*Replace placeholder content with your actual information and start showcasing your amazing UI designs!* 