# Conference 2025 Website

A modern, responsive conference website built with Next.js 15, TypeScript, and Tailwind CSS. Features a burgundy/maroon and gold color scheme inspired by NIIT University, with the structure of a professional conference website.

## Features

- **Responsive Navigation** - Sticky header with mobile hamburger menu
- **Hero Carousel** - Rotating banner with 3 slides and smooth transitions
- **About/Mission Section** - Statistics, mission statement, and key features
- **Events & Programs** - Grid layout showcasing 6 event types with icons
- **Registration Form** - Contact form with validation and success feedback
- **Footer** - Comprehensive footer with links and contact information
- **Custom Theme** - Burgundy (#831619) and gold (#FFC53A) color palette

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd conference-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
conference-website/
├── app/
│   ├── globals.css          # Global styles with custom theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── HeroCarousel.tsx     # Auto-rotating hero section
│   ├── About.tsx            # Mission and statistics section
│   ├── Events.tsx           # Events grid with cards
│   ├── Contact.tsx          # Registration/contact form
│   └── Footer.tsx           # Footer with links
└── public/                  # Static assets
```

## Color Palette

- **Primary (Burgundy)**: `#831619`
- **Primary Dark**: `#6b1113`
- **Secondary (Gold)**: `#FFC53A`
- **Accent (Light Blue)**: `#B7D8EF`
- **Text Gray**: `#545454`

## Customization

### Updating Content

1. **Event Information**: Edit `components/Events.tsx` to modify event cards
2. **Hero Slides**: Update `components/HeroCarousel.tsx` to change carousel content
3. **About Section**: Modify `components/About.tsx` for mission statement and stats
4. **Contact Info**: Update `components/Contact.tsx` and `components/Footer.tsx`

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #831619;      /* Your burgundy color */
  --secondary: #FFC53A;    /* Your gold color */
  /* ... other colors */
}
```

### Adding Images

Place images in the `public/` folder and reference them like:
```tsx
<img src="/your-image.jpg" alt="Description" />
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any platform supporting Node.js

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React 19** - UI library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
