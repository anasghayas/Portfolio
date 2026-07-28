// ===== PORTFOLIO DATA =====
// Single source of truth for all portfolio content.
// Edit this file to update any section — no JSX changes needed.

export const personalInfo = {
  name: "Anas Ghayas",
  title: "Mathematics & Computing | BIT Mesra",
  email: "anasghayas2004@gmail.com",
  phone: "+91-9341443062",
  location: "Ranchi, Jharkhand",
  status: "Open to Work",
  about:
    "Hey, I'm Anas — a Math & Computing student at BIT Mesra who genuinely enjoys building things for the web and breaking problems down on competitive programming platforms. I'm a curious builder at heart — if something can be automated, tracked, or turned into a dashboard, I'm probably already halfway through building it. When I'm not writing code, you'll find me competing in hackathons, teaching C++ to a room full of 300 students, or volunteering with NSS. I'm currently open to internships and always up for building something cool together.",
  socials: {
    github: "https://github.com/anasghayas",
    linkedin: "https://www.linkedin.com/in/anas-ghayas-5ab294294/",
    codeforces: "https://codeforces.com/profile/anasghayas_",
    leetcode: "https://leetcode.com/u/anasghayas_/",
  },
};

export const skills = {
  Languages: ["C++", "Java", "JavaScript", "Python", "C", "SQL"],
  Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS", "Shadcn UI", "Material UI", "Recharts"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Prisma"],
  Databases: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Supabase"],
  "Developer Tools": ["Git", "GitHub", "Vercel", "Render", "Netlify"],
  "Libraries & Technologies": ["Puppeteer", "Zustand", "Redux Toolkit", "Firebase Auth", "Supabase Auth"],
};

export const projects = [
  {
    id: 1,
    name: "DropNest",
    subtitle: "E-Commerce Price Tracker",
    date: "2025",
    status: "Live",
    category: "Full-Stack Application",
    tech: ["PostgreSQL", "React.js", "Express.js", "Puppeteer", "Prisma", "Supabase"],
    description:
      "A full-stack price tracking platform for Amazon and Flipkart with automated price monitoring, historical price visualization, and target price alerts. Built with a Puppeteer-based scraping engine running automated CRON jobs every 6 hours and a normalized PostgreSQL database with Supabase Auth.",
    github: "https://github.com/anasghayas/DropNest",
    live: "https://drop-nest-three.vercel.app/",
    image: null, // User will provide later
  },
  {
    id: 2,
    name: "CoinPulse",
    subtitle: "Crypto Dashboard",
    date: "2025",
    status: "Live",
    category: "Full-Stack Application",
    tech: ["React.js", "Firebase", "Recharts", "CoinGecko API"],
    description:
      "A real-time cryptocurrency dashboard tracking the top 100 coins with historical price charts, watchlist management, and multi-currency support. Integrated Firebase Auth with Cloud Firestore for real-time wishlist sync and CoinGecko API with centralized caching.",
    github: "https://github.com/anasghayas/CoinPulse",
    live: "https://coinpulsecrypto.netlify.app",
    image: null,
  },
  {
    id: 3,
    name: "ParkEase",
    subtitle: "Smart Parking Slot Booking",
    date: "2025",
    status: "Live",
    category: "Full-Stack Application",
    tech: ["MongoDB", "React.js", "Express.js", "Cloudinary", "JWT"],
    description:
      "A full-stack parking management platform connecting slot owners with drivers, featuring three distinct user roles, real-time booking with dynamic pricing, and Cloudinary image uploads. Built with the MERN stack, JWT authentication, and role-based access control.",
    github: "https://github.com/anasghayas/ParkEase",
    live: "https://parkease-ecru.vercel.app/",
    image: null,
  },
  {
    id: 4,
    name: "GoVroom",
    subtitle: "Premium Vehicle Rental",
    date: "2025",
    status: "Live",
    category: "Full-Stack Application",
    tech: ["MongoDB", "React.js", "Express.js", "Cloudinary", "JWT"],
    description:
      "A comprehensive vehicle rental platform connecting customers with verified rental agencies, featuring multi-duration pricing, real-time booking management, and admin-controlled agency verification. Built on the MERN stack with Cloudinary integration and a premium dark-mode UI.",
    github: "https://github.com/anasghayas/VehicleRental",
    live: "https://go-vroom-umber.vercel.app/",
    image: null,
  },
];

export const achievements = [
  {
    title: "2nd Position — IEEE Megaproject 2026",
    date: "January, 2026",
    link: "https://drive.google.com/drive/folders/1cdBI8E4US7Xn8xg7hiZazR5veFpsRrmW",
  },
  {
    title: "Rank 1228 — ICPC Kanpur Region",
    detail: "Team: BIT TEAM 8",
    date: "November, 2025",
    link: "https://drive.google.com/drive/folders/15jt0oYgH62xRca-LvzCoiZeztDE8_78Z?usp=drive_link",
  },
  {
    title: "Rank 2981 — IICPC CodeFest 2026",
    detail: "Among 13,000+ participants",
    date: "February, 2026",
    link: "https://drive.google.com/file/d/1PEAej2I9QXbX1KepXW5J2rcshosavObe/view?usp=drive_link",
  },
  {
    title: "Regional Finalist — NXP AIM",
    date: "August, 2025",
    link: "https://drive.google.com/drive/folders/1I0TxsQWjtkC0F2CIjsHtVhTYvMj8RiJz?usp=drive_link",
  },
  {
    title: "Qualified — Smart India Hackathon (SIH)",
    detail: "Internal College Round",
    date: "September, 2024",
    link: "https://drive.google.com/drive/folders/1ckh6SeXRyZ7VBjIFgasHsU2dOB-mbgJ6?usp=drive_link",
  },
  {
    title: "1st Place — CTF CICADA Pantheon",
    detail: "BIT, Mesra",
    date: "September, 2025",
    link: "https://drive.google.com/drive/folders/1YfRW9Lq8_xTxW8uKA1YOHuE_eqGbzSyc?usp=drive_link",
  },
];

export const education = {
  university: "Birla Institute of Technology, Mesra",
  degree: "Integrated Master of Science",
  field: "Mathematics and Computing",
  cgpa: "9.05",
  duration: "2024 – 2029",
  location: "Ranchi, Jharkhand",
};

export const competitiveProgramming = {
  codeforces: { rating: 1398, title: "Pupil", color: "#00a550" },
  leetcode: { rating: 1615, title: "", color: "#ffa116" },
  codechef: { rating: 1603, title: "3-Star", color: "#5b4638" },
};

export const leadership = [
  "Conducted a C++ programming workshop for 300+ students, teaching programming fundamentals and problem-solving techniques.",
  "Organized the club recruitment process, including question preparation, logistics, and candidate evaluation.",
  "Volunteered with the National Service Scheme (NSS), conducting village education drives and organizing blood donation camps.",
];
