import { PortfolioConfig } from './types';

/**
 * 🌟 SINGLE CENTRAL PORTFOLIO CONFIGURATION FILE
 * 
 * Edit this file to easily customize all text, projects, skills, education,
 * certificates, internships, and social links across the entire website!
 */
export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "R Aaron Reilly",
    title: "Aspiring Data Scientist & Software Engineer | Python, SQL, ML & Web Developer",
    taglines: [
      "Data Analytics & Machine Learning",
      "Python AI & Predictive Analytics",
      "Full-Stack Web (HTML5, CSS3, JavaScript, React)",
      "Relational Database Systems & SQL"
    ],
    bio: "Pre-final year Computer Science Engineering student with a 7.44 CGPA at Karunya Institute of Technology and Sciences, aspiring to become a Data Scientist, Data Analyst, and Software Engineer. Passionate about data analytics, machine learning, statistical modeling, visualization, and transforming complex data into actionable insights.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    resumeUrl: "#resume-preview",
    atsScore: 96,
    atsBreakdown: {
      keywordMatch: 98,
      formattingScore: 94,
      relevanceIndex: 96,
      actionVerbsCount: 95
    },
    socials: {
      github: "https://github.com/Aaronreilly",
      linkedin: "https://www.linkedin.com/in/aaron-reilly-0b3a0b323",
      leetcode: "https://leetcode.com/u/Aaron_Reilly09/",
      email: "raaron@karunya.edu.in",
      phone: "+91 8056774121",
      location: "Coimbatore, Tamil Nadu, India",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62660.03841103632!2d76.920585!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000"
    },
    careerObjective: "Seeking a Data Analyst, Data Scientist, or Software Engineering internship / full-time opportunity where I can leverage Python, SQL, Machine Learning, Data Visualization, and web development to solve real-world business problems.",
    technicalInterests: [
      "Data Science & Predictive Modeling (Python, Pandas, NumPy, Scikit-Learn)",
      "Database Systems & Query Optimization (SQL, Relational DBMS)",
      "Machine Learning & Artificial Intelligence",
      "Full-Stack Web Development (HTML5, CSS3, JavaScript, React)",
      "Data Visualization & Dashboards (Power BI, Matplotlib, Seaborn)"
    ]
  },

  skills: [
    {
      category: "Data Science & Machine Learning",
      skills: [
        { name: "Python", level: 90, description: "Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, FastAPI" },
        { name: "Data Analytics & Visualization", level: 85, description: "Exploratory Data Analysis (EDA), Power BI, Dashboards" },
        { name: "Machine Learning", level: 82, description: "Supervised Learning, Regression, Classification, Model Evaluation" },
        { name: "Statistical Modeling", level: 80, description: "Hypothesis Testing, Probability Distributions, Feature Selection" }
      ]
    },
    {
      category: "Programming & Databases",
      skills: [
        { name: "SQL & Relational Databases", level: 85, description: "Complex Queries, Joins, Aggregation, Schema Design, MySQL" },
        { name: "Java", level: 82, description: "Core Java, Object-Oriented Programming, Data Structures" },
        { name: "JavaScript / TypeScript", level: 80, description: "ES6+, DOM Manipulation, Async/Await, Web APIs" }
      ]
    },
    {
      category: "Full-Stack Web Development",
      skills: [
        { name: "HTML5 & CSS3", level: 90, description: "Semantic Markup, Responsive Layouts, Flexbox, CSS Grid" },
        { name: "React.js & Modern UI", level: 85, description: "Hooks, State Management, Modern Component Architecture" },
        { name: "Tailwind CSS & Styling", level: 88, description: "Glassmorphism, Dark/Light Themes, Utility-first Design" }
      ]
    },
    {
      category: "Tools & Ecosystem",
      skills: [
        { name: "Git & GitHub", level: 88, description: "Version Control, Repository Management, Collaboration" },
        { name: "VS Code & Jupyter Notebooks", level: 90, description: "Interactive Data Science, Debugging, Code Refactoring" },
        { name: "Excel & Tableau", level: 82, description: "Data Wrangling, Pivot Tables, Interactive Dashboards" }
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Karunya Institute of Technology and Sciences",
      location: "Coimbatore, Tamil Nadu, India",
      duration: "2024 – 2028 (Expected)",
      gpa: "CGPA: 7.44 / 10.0",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (SQL)",
        "Data Science & Ecosystem",
        "Artificial Intelligence & Machine Learning",
        "Operating Systems",
        "Computer Networks"
      ],
      description: "Pre-final year undergraduate specialization focusing on Data Science, Machine Learning pipelines, relational database architecture, and full-stack software development.",
      highlights: [
        "Active contributor to Department AI & Data Science Projects",
        "Completed Software Engineering Internship at Cognifyz Technologies",
        "Completed Industrial Training at Root Industries Private Limited",
        "Solved 100+ LeetCode Problem Challenges"
      ]
    }
  ],

  projects: [
    {
      id: "vernacheck-fake-news",
      title: "VernaCheck – AI Misinformation Detector",
      subtitle: "Transformer NLP & Fact Credibility Analyzer",
      category: "AI & Python",
      featured: true,
      description: "A transformer-based NLP detection system analyzing text news claims for misinformation risk using DeBERTa embeddings and an interactive React interface.",
      fullDescription: "VernaCheck detects online misinformation using Python PyTorch, fine-tuned transformer models, and FastAPI. Features headline scanning, text credibility scoring, and highlighted suspicious phrasing.",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
      technologies: ["Python", "FastAPI", "PyTorch", "DeBERTa", "React", "JavaScript", "Tailwind CSS"],
      liveDemoUrl: "#vernacheck-demo",
      githubUrl: "https://github.com/Aaronreilly/VernaCheck",
      caseStudy: {
        problemStatement: "The rapid spread of online fake news and manipulative headlines erodes public trust.",
        targetAudience: "Journalists, Fact Checkers, News Readers, Social Media Analysts.",
        solutionArchitecture: [
          "React web frontend submits news text or article URL to Python FastAPI backend.",
          "NLP pipeline tokenizes text and evaluates confidence using fine-tuned transformer models.",
          "Generates instantaneous credibility score and highlights emotionally loaded phrases."
        ],
        keyFeatures: [
          "Real-Time Fact Credibility Score (0 - 100%)",
          "Highlighted Suspicious & Sensational Phrases",
          "Batch Processing for Long-Form Articles",
          "Exportable PDF Verification Summary"
        ],
        technicalChallenges: [
          {
            challenge: "Processing long articles beyond token limits.",
            solution: "Implemented overlapping sliding window tokenization in Python PyTorch."
          }
        ],
        learnings: [
          "NLP Transformer fine-tuning techniques.",
          "Building production REST API microservices with Python FastAPI."
        ],
        futureScope: [
          "Browser Extension for automated web page scanning."
        ],
        metrics: [
          { label: "Accuracy", value: "94.2%" },
          { label: "Inference Speed", value: "320ms" }
        ],
        demoType: "fake_news"
      }
    },
    {
      id: "health-sync-ai",
      title: "Health Sync AI",
      subtitle: "AI Vital Signs Metrics & Risk Predictor",
      category: "AI & Data Science",
      featured: true,
      description: "An intelligent healthcare metrics dashboard evaluating user vital signs and predicting health anomaly risk scores using Python machine learning models.",
      fullDescription: "Health Sync AI is a predictive healthcare portal tracking heart rate, blood pressure, oxygen saturation (SpO2), and patient symptoms in real-time.",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "React", "SQL"],
      liveDemoUrl: "#health-demo",
      githubUrl: "https://github.com/Aaronreilly/health-sync-ai",
      caseStudy: {
        problemStatement: "Patients lack instant analytics into fluctuating vital signs before visiting a medical clinic.",
        targetAudience: "Patients, Health Enthusiasts, Remote Clinics.",
        solutionArchitecture: [
          "React interface collects vital telemetry (SpO2, Heart Rate, Temperature).",
          "Python machine learning model predicts risk category.",
          "Relational SQL database stores historical vital logs."
        ],
        keyFeatures: [
          "Real-Time Vital Signs Telemetry Monitor",
          "AI Anomaly Detection Engine",
          "SQL Historical Records Logger"
        ],
        technicalChallenges: [
          {
            challenge: "Ensuring low-latency prediction output.",
            solution: "Optimized model execution pipeline in Python NumPy."
          }
        ],
        learnings: [
          "Machine learning model deployment in web applications.",
          "Relational database schema design in SQL."
        ],
        futureScope: [
          "Integration with smart wearable devices."
        ],
        metrics: [
          { label: "Model Precision", value: "95.4%" },
          { label: "Response Time", value: "< 150ms" }
        ],
        demoType: "health_sync"
      }
    },
    {
      id: "blood-bank-system",
      title: "Blood Bank Donor Management System",
      subtitle: "Emergency Blood Donor Matcher & SQL System",
      category: "SQL & Web",
      featured: true,
      description: "Relational database web application connecting emergency blood requests with matching donors using normalized 3NF SQL queries.",
      fullDescription: "Blood Bank Donor Management System eliminates delays during emergency medical procedures. Uses normalized SQL database architecture to match compatible donors instantly.",
      thumbnail: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop",
      technologies: ["SQL", "MySQL", "JavaScript", "HTML5", "CSS3", "React"],
      liveDemoUrl: "#blood-demo",
      githubUrl: "https://github.com/Aaronreilly/blood-bank-system",
      caseStudy: {
        problemStatement: "Critical delays in locating compatible blood donors during hospital emergencies.",
        targetAudience: "Hospitals, Donors, Emergency Response Coordinators.",
        solutionArchitecture: [
          "3NF normalized SQL relational database architecture.",
          "SQL spatial query matches compatible blood groups in proximity.",
          "Web portal displays real-time inventory levels."
        ],
        keyFeatures: [
          "Instant Emergency Donor Matcher by Blood Group",
          "Real-Time Stock Inventory Monitor",
          "SQL Transaction Safety Locks"
        ],
        technicalChallenges: [
          {
            challenge: "Preventing double-claiming during simultaneous emergency requests.",
            solution: "Implemented SQL ACID transaction row-level locking."
          }
        ],
        learnings: [
          "Relational database normalization (3NF) and SQL indexes."
        ],
        futureScope: [
          "Predictive AI forecasting for blood supply demand."
        ],
        metrics: [
          { label: "Donor Match Latency", value: "< 30s" },
          { label: "Database Query Speed", value: "4ms" }
        ],
        demoType: "blood_bank"
      }
    },
    {
      id: "tremor-detection",
      title: "Tremor Hand Detection",
      subtitle: "Parkinson's Micro-Vibration & Frequency Analyzer",
      category: "Computer Vision",
      featured: false,
      description: "Computer vision tool detecting hand tremors and calculating vibration frequency (Hz) using Python OpenCV and JS canvas.",
      fullDescription: "Tremor Hand Detection uses video stream analytics to measure micro-vibrations and tremors, generating tremor severity index scores.",
      thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      technologies: ["Python", "OpenCV", "JavaScript", "HTML5 Canvas", "CSS3"],
      liveDemoUrl: "#tremor-demo",
      githubUrl: "https://github.com/Aaronreilly/tremor-hand-detection",
      caseStudy: {
        problemStatement: "Clinical tremor evaluation requires expensive specialized sensors.",
        targetAudience: "Neurologists, Movement Disorder Clinics.",
        solutionArchitecture: [
          "Webcam stream processed via Python OpenCV hand landmark pipeline.",
          "Fourier Transform algorithm extracts frequency spectrum (4-12 Hz)."
        ],
        keyFeatures: [
          "Hand Landmark Tracking (21 Keypoints)",
          "Tremor Frequency (Hz) Analyzer"
        ],
        technicalChallenges: [
          {
            challenge: "Filter ambient camera jitter from true movement tremors.",
            solution: "Applied Butterworth low-pass digital filtering in Python NumPy."
          }
        ],
        learnings: [
          "Computer Vision keypoint extraction with Python OpenCV."
        ],
        futureScope: [
          "Mobile app release utilizing device gyroscope sensors."
        ],
        metrics: [
          { label: "Detection Accuracy", value: "96.8%" }
        ],
        demoType: "tremor_detection"
      }
    },
    {
      id: "weather-dashboard",
      title: "Weather & Microclimate Dashboard",
      subtitle: "Real-Time Weather & Multi-City Forecast Tool",
      category: "Web Dev",
      featured: false,
      description: "Interactive weather forecast dashboard rendering temperatures, humidity, UV index, and AQI using JavaScript, HTML5, and CSS3.",
      fullDescription: "Weather Dashboard fetches live meteorological data from REST APIs and renders dynamic glassmorphic UI themes.",
      thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Tailwind CSS"],
      liveDemoUrl: "#weather-demo",
      githubUrl: "https://github.com/Aaronreilly/weather-dashboard",
      caseStudy: {
        problemStatement: "Cluttered weather interfaces with intrusive ads.",
        targetAudience: "Commuters, Outdoor Enthusiasts.",
        solutionArchitecture: [
          "Fetches OpenWeather REST API data using JavaScript Async/Await.",
          "Dynamic background themes based on ambient weather."
        ],
        keyFeatures: [
          "Automatic Geolocation Search",
          "Hourly Temperature & AQI Forecast"
        ],
        technicalChallenges: [
          {
            challenge: "API rate limit management.",
            solution: "Implemented local storage caching with expiration timers."
          }
        ],
        learnings: [
          "Asynchronous JavaScript and REST API integration."
        ],
        futureScope: [
          "Interactive weather radar maps."
        ],
        metrics: [
          { label: "Refresh Latency", value: "5 min" }
        ],
        demoType: "weather"
      }
    }
  ],

  certificates: [
    {
      id: "cert-oracle-ai",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      organization: "Oracle",
      issueDate: "August 2025",
      credentialId: "1928057F95AF5E82687605E752D8FE318D9D365D1C56F06A7CA745336CFA91ED",
      verificationLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1928057F95AF5E82687605E752D8FE318D9D365D1C56F06A7CA745336CFA91ED",
      group: "AI",
      skillsLearned: ["Oracle Cloud AI", "Machine Learning Concepts", "Generative AI", "AI Services Architecture"],
      detailedReview: "Verified professional credential demonstrating foundational knowledge of AI concepts, Machine Learning algorithms, Generative AI models, and Oracle Cloud AI infrastructure.",
      certificateImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
    }
  ],

  internships: [
    {
      id: "intern-cognifyz",
      company: "Cognifyz Technologies",
      role: "Software Engineering Intern (Python)",
      duration: "May 2025 – June 2025",
      location: "Remote",
      responsibilities: [
        "Built modular Python applications and data manipulation scripts using Pandas and NumPy.",
        "Strengthened object-oriented programming principles, debugging routines, and algorithmic logic.",
        "Collaborated on code reviews and project documentation standards."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Git", "Data Analysis"],
      achievements: [
        "Received 'Outstanding Contribution' performance recognition.",
        "Built robust mini projects enhancing Python core development skills."
      ],
      learningOutcomes: [
        "Deepened mastery of Python syntax, data structures, and algorithmic logic.",
        "Production-level software design and clean code standards."
      ],
      certificateUrl: "https://media.licdn.com/dms/image/v2/D562DAQGRsH3HEgsllg/profile-treasury-document-images_1920/B56Z6Ii.P2JsAk-/1/1780407331689?e=1786579200&v=beta&t=B-jLvMZK7Zb9AvWbMW83VHTLR68wmfH8bseOM3mRjCM"
    },
    {
      id: "intern-root-ind",
      company: "Root Industries Private Limited",
      role: "Industrial Automation & Quality Assurance Trainee",
      duration: "2026",
      location: "Coimbatore, Tamil Nadu, India",
      responsibilities: [
        "Gained practical exposure to manufacturing workflows, industrial automation systems, and quality control routines.",
        "Analyzed operational data to assist in identifying process optimization bottlenecks."
      ],
      technologies: ["Python", "Data Analytics", "Quality Assurance", "Industrial Automation"],
      achievements: [
        "Successfully completed industrial training program with distinction."
      ],
      learningOutcomes: [
        "Understanding real-world industrial operations, automated testing, and statistical quality control."
      ]
    }
  ],

  academicHighlights: [
    {
      id: "sem-cur",
      semester: "Pre-Final Year (2024–2028)",
      gpa: "7.44 / 10.0 CGPA",
      subjects: [
        "Data Science & Ecosystem",
        "Database Management Systems (SQL)",
        "Artificial Intelligence & Machine Learning",
        "Data Structures & Algorithms"
      ],
      labWork: [
        "Developed VernaCheck AI fake news detector in Python",
        "Designed 3NF SQL database for Blood Bank donor system"
      ],
      researchInterest: "Applied Data Science, Predictive Machine Learning & SQL Systems",
      achievements: [
        "Maintained 7.44 CGPA while building AI & Data Analytics projects",
        "Oracle OCI AI Foundations Certified"
      ]
    }
  ],

  technicalDomains: [
    {
      domain: "Data Science & Machine Learning",
      icon: "Brain",
      summary: "Leveraging Python, Pandas, NumPy, and Scikit-Learn to build predictive ML models, perform exploratory data analysis, and extract actionable insights.",
      keyProjects: ["VernaCheck", "Health Sync AI"],
      skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Machine Learning", "EDA"]
    },
    {
      domain: "Data Analytics & SQL",
      icon: "BarChart3",
      summary: "Skilled in querying, cleaning, and visualizing datasets using SQL, Power BI, and Python to drive data-informed decision making.",
      keyProjects: ["Blood Bank Donor System", "Health Sync Analytics"],
      skills: ["SQL", "Relational Databases", "Power BI", "Exploratory Analytics", "Excel"]
    },
    {
      domain: "Full-Stack Web Development",
      icon: "Globe",
      summary: "Building responsive, modern web applications with React, JavaScript, HTML5, CSS3, FastAPI, and glassmorphic UI design.",
      keyProjects: ["VernaCheck Frontend", "Weather Dashboard", "Portfolio Website"],
      skills: ["React", "JavaScript", "FastAPI", "HTML5", "CSS3", "Tailwind CSS"]
    }
  ],

  achievements: [
    {
      id: "ach-oracle",
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Certified",
      category: "Certification",
      date: "August 2025",
      issuer: "Oracle",
      description: "Earned official Oracle certification validating core knowledge of AI concepts, Machine Learning, Generative AI models, and OCI AI infrastructure.",
      badge: "🎓 Verified Associate",
      icon: "Award"
    },
    {
      id: "ach-cognifyz",
      title: "Software Engineering Internship – Cognifyz Technologies",
      category: "Internship",
      date: "June 2025",
      issuer: "Cognifyz Technologies",
      description: "Completed software engineering internship building Python applications and data manipulation tools with 'Outstanding Contribution' recognition.",
      badge: "💼 Outstanding Intern",
      icon: "Briefcase"
    },
    {
      id: "ach-root",
      title: "Industrial Training – Root Industries Private Limited",
      category: "Internship",
      date: "2026",
      issuer: "Root Industries",
      description: "Completed hands-on industrial training in manufacturing workflows, automation testing, and quality assurance processes.",
      badge: "⚙️ Industrial Trainee",
      icon: "Factory"
    },
    {
      id: "ach-leetcode",
      title: "Solved 100+ Problem Challenges on LeetCode",
      category: "Competition",
      date: "2026",
      issuer: "LeetCode",
      description: "Strengthened core data structures, algorithms, and analytical problem-solving skills through consistent coding practice.",
      badge: "🧩 100+ Solved",
      icon: "Code2"
    },
    {
      id: "ach-btech",
      title: "B.Tech Computer Science & Engineering",
      category: "Academic",
      date: "2024–Present",
      issuer: "Karunya Institute of Technology and Sciences",
      description: "Maintaining CGPA of 7.44 / 10.0 while actively completing projects in Data Science, ML, SQL, and Web Engineering.",
      badge: "🎓 7.44 CGPA",
      icon: "GraduationCap"
    }
  ],

  codingProfiles: [
    {
      platform: "GitHub",
      username: "Aaronreilly",
      profileUrl: "https://github.com/Aaronreilly",
      rating: "Active Repositories",
      solvedCount: "Python, ML, Web & SQL Repos",
      badge: "GitHub Developer",
      accentColor: "from-blue-700 to-slate-900",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      username: "aaron-reilly-0b3a0b323",
      profileUrl: "https://www.linkedin.com/in/aaron-reilly-0b3a0b323",
      rating: "Tech Network",
      solvedCount: "Student Developer",
      badge: "Open for Opportunities",
      accentColor: "from-blue-600 to-cyan-800",
      icon: "Linkedin"
    },
    {
      platform: "LeetCode",
      username: "Aaron_Reilly09",
      profileUrl: "https://leetcode.com/u/Aaron_Reilly09/",
      rating: "Problem Solver",
      solvedCount: "100+ Solved in Python & Java",
      badge: "LeetCoder",
      accentColor: "from-amber-500 to-orange-700",
      icon: "Code2"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Cognifyz Tech Mentor",
      role: "Engineering Team Lead",
      companyOrCollege: "Cognifyz Technologies",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      content: "Aaron demonstrated great enthusiasm, strong Python problem-solving skills, and code quality during his software engineering internship. Highly recommend him for Data Science and Engineering roles!",
      rating: 5,
      date: "June 2025"
    },
    {
      id: "test-2",
      name: "Root Industries Supervisor",
      role: "Industrial QA Manager",
      companyOrCollege: "Root Industries Private Limited",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      content: "Aaron quickly adapted to our industrial automation workflows and demonstrated analytical focus when reviewing operational data during his training.",
      rating: 5,
      date: "January 2026"
    }
  ]
};
