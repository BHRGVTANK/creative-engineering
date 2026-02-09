import { FiCode, FiPenTool, FiTrendingUp, FiLayout } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const siteConfig = {
    name: "Alex Walker",
    title: "Digital Designer & Frontend Developer",
    email: "hello@alexwalker.com",
    location: "Odesa, Ukraine",
    phone: "+1 234 567 890",
    socials: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#"
    }
};

export const heroData = {
    greeting: "Hello there!",
    heading: "I'm",
    name: "Alex Walker",
    typingItems: [
        'Developer.',
        2000,
        'Designer.',
        2000,
        'Freelancer.',
        2000,
    ],
    description: "Digital designer and illustrator. Turning complex problems into simple design.",
    primaryAction: "Hire Me",
    secondaryAction: "My Works"
};

export const aboutData = {
    title: "Biography",
    heading: "Turning complex problems into simple design",
    descriptionP1: "I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same...",
    descriptionP2: "Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others.",
    stats: [
        { num: "40+", label: "Happy Clients" },
        { num: "2+", label: "Years Experience" },
        { num: "50+", label: "Projects Done" },
        { num: "10+", label: "Awards Won" }
    ]
};

export const servicesData = [
    {
        icon: FiCode,
        title: "Frontend development",
        description: "I work with HTML/CSS, Framer and WordPress. Building responsive and interactive sites.",
    },
    {
        icon: FiPenTool,
        title: "Digital art and graphic design",
        description: "I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders.",
    },
    {
        icon: FiTrendingUp,
        title: "SEO/Digital marketing",
        description: "Social media content plans, media monitoring, email and text messaging and SEO solutions.",
    },
    {
        icon: FiLayout,
        title: "Brand identity",
        description: "I help my clients to develop a personality and brand voice, design the brand look and logo.",
    },
];

export const educationData = [
    {
        title: "Drawing Concentration",
        place: "New York Academy of Art",
        desc: "Intensive drawing courses that present the fundamental principles of drawing.",
    },
    {
        title: "UI/UX Design Specialization",
        place: "California Institute of Arts",
        desc: "Research, design, and prototype effective, visually-driven websites and apps.",
    },
    {
        title: "UI/UX Designer",
        place: "Coursera",
        desc: "This course is about how to complete the design process from beginning to end.",
    },
];

export const experienceData = [
    {
        title: "Illustrator",
        place: "Creative Mind Agency",
        desc: "I created original images for a range of digital and printed products.",
    },
    {
        title: "Graphic Designer",
        place: "Moon Light Agency",
        desc: "My job was to create adverts, branding, signage and other media products.",
    },
    {
        title: "UI/UX Designer",
        place: "Moon Light Agency",
        desc: "I am actively involved in creating user interfaces for mobile apps and websites.",
    },
];

export const skillsData = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

export const projectsData = [
    {
        id: "e-commerce-dashboard",
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "/images/E-Commerce Dashboard.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["Next.js", "Tailwind CSS", "Recharts", "Node.js"],
        description: "A comprehensive analytics dashboard for online retailers. This application allows business owners to track sales in real-time, manage inventory, and analyze customer behavior through interactive charts.",
        features: [
            "Real-time sales tracking with dynamic graphs",
            "Inventory management system with low-stock alerts",
            "Customer behavior analysis tools",
            "Dark/Light mode toggle"
        ]
    },
    {
        id: "portfolio-template",
        title: "Portfolio Template",
        category: "Design & Dev",
        image: "/images/Portfolio Website.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["React", "Framer Motion", "Styled Components"],
        description: "A high-performance, visually stunning portfolio template designed for creative professionals. It features smooth page transitions, custom cursors, and a fully responsive layout.",
        features: [
            "Smooth page transitions using Framer Motion",
            "Custom cursor and interactive elements",
            "Fully responsive and mobile-optimized",
            "SEO friendly structure"
        ]
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        category: "Mobile App",
        image: "/images/Task Management App.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["React Native", "Firebase", "Redux"],
        description: "A productivity-focused mobile application that helps teams organize tasks, set deadlines, and collaborate efficiently. Includes push notifications and offline support.",
        features: [
            "Kanban-style task boards",
            "Real-time collaboration and updates",
            "Offline mode support",
            "Push notifications for deadlines"
        ]
    },
    {
        id: "social-media-api",
        title: "Social Media API",
        category: "Backend",
        image: "/images/Social Media API.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
        description: "A robust RESTful API for a social networking platform. Handles user authentication, post creation, comments, and real-time messaging capabilities.",
        features: [
            "JWT Authentication and authorization",
            "Real-time messaging via Socket.io",
            "Media upload and optimization",
            "Scalable database architecture"
        ]
    },
    {
        id: "fitness-tracker",
        title: "Fitness Tracker",
        category: "Web Design",
        image: "/images/Fitness Tracker.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["Vue.js", "D3.js", "Firebase"],
        description: "An interactive fitness tracking application that visualizes workout data. Users can log exercises, track progress over time, and set personal fitness goals.",
        features: [
            "Interactive data visualization with D3.js",
            "Goal setting and progress tracking",
            "Social sharing features",
            "Workout history log"
        ]
    },
    {
        id: "real-estate-platform",
        title: "Real Estate Platform",
        category: "Web Application",
        image: "/images/Real Estate Platform.png",
        repo: "#",
        liveUrl: "#",
        technologies: ["Django", "PostgreSQL", "React", "AWS"],
        description: "A full-featured real estate marketplace connecting buyers and sellers. Includes advanced property filtering, map integration, and virtual tour capabilities.",
        features: [
            "Advanced property search and filtering",
            "Interactive map integration",
            "Virtual tour support",
            "Secure messaging between agents and buyers"
        ]
    },
];

export const testimonialsData = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        text: "Alex delivered exactly what we needed. The design was clean, modern, and the performance is outstanding.",
    },
    {
        name: "Jane Smith",
        role: "Marketing Director",
        text: "Working with Alex was a pleasure. He understood our brand voice perfectly and translated it into a beautiful website.",
    },
    {
        name: "Mike Johnson",
        role: "Founder, StartupX",
        text: "Highly recommended! The attention to detail and animations are top-notch.",
    }
];

export const processData = [
    {
        step: "01",
        title: "Discovery & Strategy",
        description: "We start by analyzing your requirements, understanding your brand, and defining the strategic roadmap for the project."
    },
    {
        step: "02",
        title: "Wireframing & Design",
        description: "I render visual interfaces, creating interactive prototypes to visualize the user experience before development begins."
    },
    {
        step: "03",
        title: "Development",
        description: "Using modern frameworks like Next.js, I build pixel-perfect, accessible, and high-performance web applications."
    },
    {
        step: "04",
        title: "Testing & Launch",
        description: "Rigorous testing across devices ensures a bug-free experience. Once optimized, we deploy your project to the world."
    }
];

export const faqData = [
    {
        question: "Do you offer flexible pricing options?",
        answer: "Yes, I offer both hourly rates for maintenance work and fixed-price packages for complete projects. We can discuss what works best for your budget."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "A standard 5-page portfolio website typically takes 1-2 weeks. Larger e-commerce or web app projects can take 4-8 weeks depending on complexity."
    },
    {
        question: "Do you provide support after launch?",
        answer: "Absolutely. I offer a complimentary 2 week support period after launch to fix any bugs. Retainer packages are available for ongoing maintenance."
    },
    {
        question: "Can you help with SEO?",
        answer: "Yes, all my websites are built with SEO best practices (semantic HTML, fast loading, meta tags). For advanced SEO strategy, I can recommend partners."
    }
];
