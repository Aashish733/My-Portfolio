type Project = {
  title: string;
  slug: string;
  tagline: string;
  overview: string;
  techStack: string[];
  features: string[];
  challenges: string[]; // ✅ required everywhere
  links: {
    github: string;
    live?: string; // ✅ optional
  };
};

export const projects: Project[] = [
  {
    title: 'AI Social Media App (MERN)',
    slug: 'mern-socialmedia',
    tagline:
      'A full-stack AI-powered social media platform built with the MERN stack.',
    overview:
      'A scalable social media application with authentication, post creation, real-time interactions, and AI-powered features.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: [
      'User authentication & authorization',
      'Create, like, and comment on posts',
      'AI-powered content features',
      'Responsive UI',
    ],
    challenges: [
      'Handling real-time updates efficiently',
      'Scaling MongoDB queries',
    ],
    links: {
      github: 'https://github.com/your-username/MERN-socialmedia',
    },
  },

  {
    title: 'NextJob | AI Job Board',
    slug: 'nextjob',
    tagline: 'An AI-powered job board platform built with Next.js.',
    overview: 'A modern job board platform with AI-driven job recommendations.',
    techStack: ['Next.js', 'Node.js', 'MongoDB'],
    features: [
      'AI-powered job recommendations',
      'User authentication',
      'Dynamic job listings',
    ],
    challenges: [
      'Implementing AI recommendations',
      'Optimizing search & filtering',
    ],
    links: {
      github: 'https://github.com/your-username/NextJob',
    },
  },

  {
    title: 'Doctor Appointment Booking App',
    slug: 'doctor-app',
    tagline: 'A MERN stack app for booking and managing doctor appointments.',
    overview:
      'A healthcare booking platform for scheduling and managing appointments.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: [
      'Appointment booking system',
      'User authentication',
      'Admin panel',
    ],
    challenges: [
      'Managing time-slot conflicts',
      'Handling real-time availability',
    ],
    links: {
      github:
        'https://github.com/your-username/Mern-Doctor-Appointment-Booking-App',
    },
  },

  {
    title: 'E-Commerce Platform (MERN/PERN)',
    slug: 'ecommerce',
    tagline: 'A full-stack eCommerce platform with cart and payment features.',
    overview:
      'A scalable eCommerce application with product management and order handling.',
    techStack: ['React', 'Node.js', 'MongoDB/PostgreSQL'],
    features: [
      'Product listing & filtering',
      'Cart & checkout',
      'Order management',
    ],
    challenges: ['Payment gateway integration', 'Handling concurrent orders'],
    links: {
      github: 'https://github.com/your-username/PERN-ecommerce',
      // live optional — add only if you have
    },
  },

  {
    title: 'URL Shortener',
    slug: 'url-shortener',
    tagline: 'A simple and efficient URL shortening service.',
    overview: 'Converts long URLs into short links with fast redirection.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    features: [
      'Generate short URLs',
      'Redirection system',
      'Lightweight and fast',
    ],
    challenges: [
      'Ensuring unique short IDs',
      'Handling high traffic redirects',
    ],
    links: {
      github: 'https://github.com/your-username/url-shortner',
    },
  },

  {
    title: 'DeepSeek Clone (AI Project)',
    slug: 'deepseek-clone',
    tagline: 'An AI-based application inspired by DeepSeek.',
    overview: 'An experimental AI project integrating APIs with modern UI.',
    techStack: ['TypeScript', 'Next.js', 'AI APIs'],
    features: ['AI response generation', 'Modern UI', 'API integration'],
    challenges: ['Managing API latency', 'Handling streaming AI responses'],
    links: {
      github: 'https://github.com/your-username/deepSeek-clone',
    },
  },
];
