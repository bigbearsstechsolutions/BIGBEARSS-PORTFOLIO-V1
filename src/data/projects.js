const img1 = 'public/projects/img1.png'
const img3 = 'public/projects/img3.png'
const img2 = 'public/projects/img2.jpeg'
const img4 = 'public/projects/img4.jpg'
const img5 = 'public/projects/img5.png'
const img6 = 'public/projects/img6.png'

export const projects = [
    {
        id: 1,
        title: 'Warsi Food Machinery',
        description: 'Complete website redesign and React conversion for Warsi Food Machinery, a food processing equipment business based in Aligarh. Built with full mobile responsiveness, an integrated contact form, and deployed to production with on-page SEO optimization.',
        image: img1,
        category: 'Business Website',
        technologies: ['React', 'Node.js', 'Nodemailer', 'Tailwind CSS'],
        metrics: 'Fully Responsive & SEO Optimized',
        demoUrl: '', // TODO: apni live deployed URL daal do yahan
        gitUrl: '',  // TODO: agar public repo hai to link daal do
        comingSoon: false
    },
    {
        id: 2,
        title: 'BigBearss Fashion E-Commerce',
        description: 'Full-stack e-commerce platform built from the ground up with secure user authentication, product catalog management, and cloud-based image hosting. Powered by a scalable Node.js and Express backend with MongoDB Atlas.',
        image: img2,
        category: 'E-Commerce',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Cloudinary', 'JWT'],
        metrics: 'Secure Auth & Cloud Image Hosting',
        demoUrl: '', // TODO
        gitUrl: '',  // TODO
        comingSoon: false
    },
    {
        id: 3,
        title: 'SaaS Platform',
        description: 'A subscription-based SaaS product currently in development, designed to help small businesses automate their daily operations.',
        image: img3,
        category: 'SaaS',
        technologies: ['React', 'Node.js', 'MongoDB'],
        metrics: 'Coming Soon',
        demoUrl: '',
        gitUrl: '',
        comingSoon: true
    },
    {
        id: 4,
        title: 'Mobile Application',
        description: 'A cross-platform mobile app project in the pipeline, built for on-the-go business management.',
        image: img4,
        category: 'Application',
        technologies: ['React Native', 'Node.js'],
        metrics: 'Coming Soon',
        demoUrl: '',
        gitUrl: '',
        comingSoon: true
    },
    {
        id: 5,
        title: 'Workflow Automation Tool',
        description: 'An internal automation tool concept to streamline repetitive business tasks for our clients.',
        image: img5,
        category: 'Automation',
        technologies: ['Node.js', 'n8n'],
        metrics: 'Coming Soon',
        demoUrl: '',
        gitUrl: '',
        comingSoon: true
    },
    {
        id: 6,
        title: 'CRM Dashboard',
        description: 'A custom CRM dashboard concept planned to help agencies track leads and client pipelines.',
        image: img6,
        category: 'CRM',
        technologies: ['React', 'Node.js', 'MongoDB'],
        metrics: 'Coming Soon',
        demoUrl: '',
        gitUrl: '',
        comingSoon: true
    },
];

export const categories = ['All', 'Business Website', 'E-Commerce', 'SaaS', 'Application', 'Automation', 'CRM']