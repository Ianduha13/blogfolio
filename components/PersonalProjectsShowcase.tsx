import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the import path

const projects = [
  {
    href: "https://shorkit.com/",
    imageSrc: '/shorkit.png',
    imageAlt: 'Shorkit',
    title: 'Shorkit',
    description: `Shorkit is a newly launched project designed to provide a free URL shortening service to the public.
                  Built with Next.js for full-stack development and Supabase for database management and authentication,
                  Shorkit features OAuth integration for easy sign-in and a user-friendly dashboard for managing links.`,
    badges: ['Next.js Full SSR', 'Supabase', 'Cloudflare', 'Tailwind CSS']
  },
   {
    href: "https://imaginify.site/", 
    imageSrc: '/imaginify.png',
    imageAlt: 'Imaginify',
    title: 'Imaginify',
    description: `Imaginify is an AI-powered image modifier built with Next.js 14, using MongoDB for the database, and Clerk for authentication.
                  Stripe is integrated for payments, currently in test mode as monetization is not planned yet. 
                  The project employs Cloudinary's AI for various image transformations, including Image Restore, Generative Fill, Object Remove, Object Recolor, and Background Remove.
                  Additionally, it features smart search by content using Google Autotag.`,
    badges: ['Next.js 14', 'MongoDB', 'Clerk', 'Stripe', 'Cloudinary AI']
  },
  {
    href: "https://www.pomodoro-timer.site/",
    imageSrc: '/Pomodoro-timer.png',
    imageAlt: 'Pomodoro-Timer App',
    title: 'Pomodoro-Timer App',
    description: `Pomodoro Timer is a productivity app designed to help you focus on tasks by breaking them into intervals.
                  Built with React-Native and Expo-Router for the frontend, and Supabase for the backend.
                  The app is currently in the Alpha stage on the Play Store and is waiting the release being tested by a group of users.`,
    badges: ['React Native', 'Supabase', 'React Query', 'Expo Router', 'EAS']
  }
];

const Projects = () => {
  return (
    <div className="flex max-w-[900px] flex-col gap-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          href={project.href}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          title={project.title}
          description={project.description}
          badges={project.badges}
        />
      ))}
    </div>
  );
};

export default Projects;
