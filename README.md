# Nishant Kalane - Portfolio Website

A clean and responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark mode support
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Interactive Components**: Animated carousel, timeline, and cards
- **Easy Deployment**: GitHub Pages ready with automated deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

\`\`\`
nishant-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── experience/        # Work experience
│   ├── education/         # Educational background
│   ├── skills/            # Skills and competencies
│   ├── awards/            # Awards and achievements
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout with navigation
│   ├── Hero.tsx           # Hero section
│   ├── FeaturedAwardsCarousel.tsx
│   ├── AwardCard.tsx
│   ├── ProjectCard.tsx
│   ├── Timeline.tsx
│   ├── IconGrid.tsx
│   └── ContactForm.tsx
├── lib/                   # Utilities and data
│   ├── data.ts           # Resume data
│   └── types.ts          # TypeScript types
├── hooks/                 # Custom React hooks
│   └── useTheme.ts       # Theme management
└── .github/workflows/     # GitHub Actions
    └── deploy.yml        # Automated deployment
\`\`\`

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/nishantkalane/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update the repository name** in `next.config.mjs`:
   \`\`\`javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   \`\`\`

2. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

4. **Automatic deployment**: The site will automatically deploy on every push to the main branch.

### Manual Deployment

\`\`\`bash
npm run build
npm run deploy
\`\`\`

## 🎨 Customization

### Personal Information

Update your personal information in `lib/data.ts`:

\`\`\`typescript
export async function getResumeData(): Promise<ResumeData> {
  return {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline",
    
  return {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline",
    contact: {
      email: "your.email@example.com",
      // ... update other fields
    },
    // ... update projects, experience, etc.
  }
}
\`\`\`

### Styling

The website uses Tailwind CSS with custom color schemes. You can modify:

- **Colors**: Update the CSS variables in `app/globals.css`
- **Components**: Modify individual components in the `components/` directory
- **Layout**: Adjust the main layout in `components/Layout.tsx`

### Adding New Sections

1. Create a new page in the `app/` directory
2. Add the route to the navigation in `components/Layout.tsx`
3. Update the data structure in `lib/types.ts` if needed
4. Add the data to `lib/data.ts`

## 🎯 Key Features Explained

### Dark Mode
- Automatic system preference detection
- Manual toggle with persistent storage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes

### Performance Optimizations
- Next.js App Router for optimal loading
- Image optimization with `next/image`
- Static site generation for fast loading

### SEO Features
- Proper meta tags on all pages
- Structured data for better search visibility
- Semantic HTML structure

## 🐛 Common Issues & Solutions

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct

### Deployment Issues
- Update `basePath` in `next.config.mjs` to match your repository name
- Ensure GitHub Pages is enabled in repository settings
- Check GitHub Actions logs for deployment errors

### Styling Issues
- Clear browser cache after style changes
- Ensure Tailwind classes are properly applied
- Check dark mode toggle functionality

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with customization, feel free to:
- Open an issue on GitHub
- Contact me at nishant.kalane@example.com

---

**Built with ❤️ by Nishant Kalane**
