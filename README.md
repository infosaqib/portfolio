# Portfolio Website

Modern portfolio website where I share my projects, skills, and experience. Made with Express.js, with smooth animations and interactive elements throughout.

![Portfolio Preview](public/assets/images/portfolio.gif)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Portfolio**: Showcase your projects with detailed descriptions and live links
- **Skills Section**: Display your technical skills with visual representations
- **Testimonials**: Client testimonials with a beautiful carousel slider
- **Contact Form**: Easy-to-use contact section for potential clients
- **Smooth Animations**: Engaging animations and transitions throughout the site
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Styling**: SCSS/CSS
- **JavaScript Libraries**:
  - Swiper.js (for carousels and sliders)
  - jQuery
- **Icons**: RemixIcon
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run build
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio/
├── bin/
│   └── www                 # Server entry point
├── public/
│   ├── assets/
│   │   ├── clients/        # Client testimonials images
│   │   ├── docs/           # Resume and documents
│   │   ├── icons/          # SVG icons
│   │   ├── images/         # Images including portfolio.gif
│   │   └── projects/       # Project showcase images
│   ├── javascripts/
│   │   ├── btn.js          # Button interactions
│   │   ├── data.js         # Portfolio and testimonials data
│   │   └── script.js       # Main JavaScript file
│   ├── sass/               # SCSS source files
│   └── stylesheets/        # Compiled CSS files
├── routes/
│   ├── index.js            # Main routes
│   └── users.js            # User routes
├── views/
│   ├── index.ejs           # Main page template
│   └── error.ejs           # Error page template
├── app.js                  # Express application setup
├── package.json            # Dependencies and scripts
└── vercel.json             # Vercel deployment configuration
```

## 🎨 Customization

### Adding Projects

Edit `public/javascripts/data.js` to add or modify portfolio projects:

```javascript
const portfolioCards = [
    {
        poster: "assets/projects/your-project-small.png",
        image: "assets/projects/your-project.png",
        tech: ["HTML", "CSS", "JavaScript"],
        title: "Your Project Name",
        url: "https://your-project-url.com",
        desc: "Project description here"
    },
    // Add more projects...
]
```

### Adding Testimonials

Update the `testimonials` array in `public/javascripts/data.js`:

```javascript
const testimonials = [
    {
        name: "Client Name",
        role: "Client Role",
        poster: "assets/clients/client-small.png",
        image: "assets/clients/client.jpg",
        desc: "Testimonial text here"
    },
    // Add more testimonials...
]
```

### Styling

- SCSS files are located in `public/sass/`
- Main stylesheet: `public/sass/style.scss`
- Component-specific styles are modularized in separate SCSS files

## 🚀 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

To deploy:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the configuration and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 License

This project is private and personal. All rights reserved.

## 👤 Author

**Hafiz Saqib**

- Website: [hafizsaqib.com](https://hafizsaqib.com)
- GitHub: [@infosaqib](https://github.com/infosaqib)

## 🙏 Acknowledgments

- Icons provided by [RemixIcon](https://remixicon.com/)
- Swiper.js for carousel functionality
- All project images and assets are original or properly licensed

---

⭐ If you like this project, please consider giving it a star!

