// =============================================================
// PORTFOLIO CONFIG — edit this file to update all your info
// =============================================================

export const config = {
  personal: {
    name: "Kanav Sharma",
    initials: "KS",
    titles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
      "Cyber Security Enthusiast",
    ],
    bio: "Final-year B.Tech (CSE) student with strong foundations in data structures, computer networking, and operating systems. Hands-on experience in MERN full-stack development and real-time applications. Expanding into Cyber Security with knowledge of SOC operations, incident response, and SIEM tools.",
    shortBio: "I build high-performance, scalable web applications using the MERN stack, blending clean architecture with intuitive UI. Currently expanding into Cyber Security and real-time systems.",
    email: "sharmakanav53@gmail.com",
    phone: "+91-7814752729",
    location: "Hoshiarpur, Punjab",
    github: "https://github.com/kanav2401",
    linkedin: "https://www.linkedin.com/in/knvshrma",
    instagram: "",
    resumeLink: "/Kanav_Sharma_Resume.pdf",
  },

  stats: [
    { label: "Projects Completed", value: 3, plus: true },
    { label: "Technologies", value: 15, plus: true },
    { label: "Certifications", value: 4, plus: false },
    { label: "Training / Internship", value: 2, plus: false },
  ],

  skills: {
    frontend: [
      { name: "React.js", icon: "SiReact", level: 90 },
      { name: "JavaScript", icon: "SiJavascript", level: 88 },
      { name: "HTML5", icon: "SiHtml5", level: 92 },
      { name: "CSS3", icon: "SiCss3", level: 88 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
    ],
    backend: [
      { name: "Node.js", icon: "SiNodedotjs", level: 85 },
      { name: "Express.js", icon: "SiExpress", level: 82 },
      { name: "MongoDB", icon: "SiMongodb", level: 85 },
      { name: "Firebase", icon: "SiFirebase", level: 78 },
      { name: "MySQL", icon: "SiMysql", level: 72 },
    ],
    tools: [
      { name: "Git", icon: "SiGit", level: 88 },
      { name: "GitHub", icon: "SiGithub", level: 90 },
      { name: "VS Code", icon: "SiVisualstudiocode", level: 95 },
      { name: "Postman", icon: "SiPostman", level: 85 },
      { name: "Vercel", icon: "SiVercel", level: 80 },
    ],
  },

  projects: [
    {
      id: "taskmate",
      title: "TaskMate",
      subtitle: "Task Collaboration Platform",
      description:
        "Full-stack MERN platform for real-time task collaboration with JWT-based authentication, role-based access control, and an admin dashboard for monitoring users and complaints.",
      imageGradient: "from-violet-600 via-purple-500 to-pink-500",
      category: "Full Stack",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Vite"],
      github: "https://github.com/kanav2401/taskmate",
      demo: "https://taskmate-topaz.vercel.app",
    },
    {
      id: "gasify",
      title: "Gasify",
      subtitle: "Gas Booking Platform",
      description:
        "Full-stack gas booking platform with Firebase Auth, online booking, live tracking, AI chatbot integration (Chatbase), and an analytics dashboard for admins to manage bookings and performance.",
      imageGradient: "from-blue-600 via-cyan-500 to-teal-400",
      category: "Full Stack",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "AI Chatbot"],
      github: "https://github.com/kanav2401/gasify",
      demo: "https://gasify-gamma.vercel.app/",
    },
    {
      id: "food-meals",
      title: "Food Meals",
      subtitle: "Meal Discovery App",
      description:
        "A clean and responsive meal discovery and browsing app built with React. Explore recipes, filter by category, and find detailed meal information including ingredients and instructions.",
      imageGradient: "from-orange-500 via-amber-400 to-yellow-400",
      category: "Frontend",
      tech: ["React", "JavaScript", "CSS3", "Meals API"],
      github: "https://github.com/kanav2401/food_meals",
      demo: "",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Punjabi University, Patiala",
      years: "2022 – 2026",
      grade: "CGPA: 7.5 / 10",
      description:
        "Specializing in full-stack development, data structures, computer networking, and operating systems. Active participant in university events and technical fests.",
    },
    {
      degree: "Class 12th — Non-Medical (PSEB)",
      institution: "S.T College of Nursing and Medical Science",
      years: "2021 – 2022",
      grade: "95%",
      description: "Secured 95% in Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Class 10th (ICSE)",
      institution: "Mount Carmel School",
      years: "2020",
      grade: "89%",
      description: "Completed secondary education with 89% under the ICSE board.",
    },
  ],

  experience: [
    {
      role: "Full Stack Web Development Trainee",
      company: "Ziion Technology, Mohali",
      years: "Jan 2026 – June 2026",
      description:
        "Developed REST APIs and backend logic with Node.js, Express.js, and MongoDB. Led development of a full-stack project using React.js, Tailwind CSS, and Firebase. Worked in an Agile environment using GitHub for version control and Postman for API testing.",
    },
    {
      role: "MERN Stack Developer Trainee",
      company: "GTB Computer Education, Jalandhar",
      years: "Jun 2024 – Jul 2024",
      description:
        "Built a full-stack web application using MongoDB, Express.js, React.js, and Node.js. Secured outstanding performance feedback and certification for technical proficiency.",
    },
  ],

  certifications: [
    {
      name: "JavaScript — Complete Course",
      issuer: "Udemy",
      date: "2024",
    },
    {
      name: "Prompt Engineering",
      issuer: "IBM",
      date: "2024",
    },
    {
      name: "Introduction to Cyber Security",
      issuer: "Cisco",
      date: "2024",
    },
    {
      name: "Cyber Security Fundamentals",
      issuer: "Reliance Foundation",
      date: "2024",
    },
  ],

  achievements: [
    "Captain of Zonal Cricket Team — led team in district-level tournaments, demonstrating leadership and teamwork.",
    "University Event Organizer — managed event planning, coordination, and on-ground execution.",
  ],

  testimonials: [
    {
      name: "Ravi Mehta",
      role: "Senior Developer",
      company: "Ziion Technology",
      quote:
        "Kanav delivered strong backend work during his stint at Ziion — clean APIs, good database design, and a solid work ethic. He picks up new tools quickly and takes feedback well.",
      avatar: "RM",
    },
    {
      name: "Priya Sharma",
      role: "Project Lead",
      company: "GTB Computer Education",
      quote:
        "One of the best trainees we've had. Kanav's grasp of MERN fundamentals and his attention to code quality stood out. He consistently delivered above expectations.",
      avatar: "PS",
    },
    {
      name: "Amit Bhatia",
      role: "Peer Developer",
      company: "Punjabi University",
      quote:
        "Collaborating with Kanav on projects is great — he communicates clearly, writes readable code, and always keeps the team moving forward.",
      avatar: "AB",
    },
  ],
};
