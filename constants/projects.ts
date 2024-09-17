export const projects = [
  {
    href: "https://shorkit.com/",
    imageSrc: '/shorkit.png',
    imageAlt: 'Shorkit',
    title: 'Shorkit',
    description: `Shorkit is a project designed to provide a free URL shortening service to the public. Now it has more than 50 WAU and +500 redirections per week.
                  Built with Next.js for full-stack development and Supabase for database management and authentication,
                  Shorkit features OAuth integration for easy sign-in and a user-friendly dashboard for managing links.`,
    badges: ['Next.js Full SSR', 'Supabase', 'Redis Rate Limiting', 'Tailwind CSS']
  },

  {
    href: "https://imaginify.site/",
    imageSrc: '/imaginify.png',
    imageAlt: 'Imaginify',
    title: 'Imaginify',
    description: `Imaginify is an AI-powered image modifier built with Next.js 14, MongoDB, Clerk auth, and Stripe for payments. 
                  The project employs Cloudinary's AI for various image transformations, including Image Restore, Generative Fill, Object Remove, Object Recolor, and Background Remove.
                  Additionally, it features smart search by content using Google Autotag.`,
    badges: ['Next.js 14', 'MongoDB', 'Clerk', 'Stripe', 'Cloudinary AI']
  },
  {
    href: "https://npmchecker.com/",
    imageSrc: '/npm-checker.png',
    imageAlt: 'npm checker',
    title: 'npm checker',
    description: `A simple web tool that helps you check for outdated dependencies in your package.json.
                It works by using npm-check-updates in a server action. 
                The project is open-source and available for community contributions.`,
    badges: ['Next.js', 'npm-check-updates', 'Open Source']
  },
]; 