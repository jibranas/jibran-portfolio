# Portfolio Website

A Next.js portfolio website based on the Zoltán Hosszú design template.

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Update the following components with your information:

#### `components/Hero.tsx`
- Replace `[Your Name]` with your actual name
- Replace the placeholder profile image with your photo in `public/images/`
- Update the tagline/description

#### `components/Bio.tsx`
- Replace `[Your Name]` with your name
- Write your biographical narrative
- Update the list of technologies you work with
- Customize your learning philosophy

#### `components/Stats.tsx`
- Update the stats array with your:
  - Age
  - Location
  - Family status
  - Interests or hobbies

### 2. Skills & Value Proposition

#### `components/ValueProposition.tsx`
- Replace the values array with your skills and what you bring to the table
- Keep it to 5-7 bullet points for best impact

### 3. Work Experience

#### `components/Experience.tsx`
- Update the `experiences` array with your actual work history
- Add company logos to `public/images/`
- Include your role, period of employment, and key achievements
- Keep in reverse chronological order (most recent first)

### 4. Projects

#### `components/Projects.tsx`
- Update the `projects` array with your actual projects
- Add project screenshots to `public/images/`
- Include:
  - Short description (for the card)
  - Full description (for the modal)
  - Technologies used
  - Links to live projects or repositories

### 5. Images

Place all images in the `public/images/` directory:
- Profile photo: `profile.jpg` or `profile.png`
- Company logos: `company-name.png`
- Project screenshots: `project-1.png`, `project-2.png`, etc.

Then update the image paths in the respective components.

### 6. Metadata & SEO

Update `app/layout.tsx`:
- Change the title and description
- Add any additional metadata you need

## Features

✓ Responsive design (mobile, tablet, desktop)
✓ Modal system for project details
✓ Keyboard navigation (ESC to close modals)
✓ Smooth animations
✓ Clean, professional styling
✓ TypeScript for type safety
✓ Tailwind CSS for styling

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Hero.tsx            # Hero section with profile
│   ├── Bio.tsx             # Biography section
│   ├── Stats.tsx           # Personal statistics
│   ├── ValueProposition.tsx # Skills/values
│   ├── Experience.tsx      # Work timeline
│   ├── Projects.tsx        # Projects grid
│   └── ProjectModal.tsx    # Modal for project details
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    └── images/             # All images go here
```

## Technologies Used

- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Modern CSS animations

## Deployment

This portfolio can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages (with export)
- Any static hosting service

For Vercel deployment:
```bash
npm run build
# Then push to GitHub and connect to Vercel
```

## License

Free to use and customize for your personal portfolio.
