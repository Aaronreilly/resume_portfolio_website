export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  hackerrank?: string;
  codechef?: string;
  geeksforgeeks?: string;
  codingninjas?: string;
  email: string;
  phone: string;
  location: string;
  mapEmbedUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    iconName?: string;
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  relevantCoursework: string[];
  description: string;
  highlights: string[];
}

export interface CaseStudyData {
  problemStatement: string;
  targetAudience: string;
  solutionArchitecture: string[];
  keyFeatures: string[];
  technicalChallenges: { challenge: string; solution: string }[];
  learnings: string[];
  futureScope: string[];
  metrics: { label: string; value: string }[];
  demoType?: 'health_sync' | 'tremor_detection' | 'fake_news' | 'agri_portal' | 'blood_bank' | 'budget_planner' | 'shopeasy' | 'weather' | 'quantum_sim' | 'java_system' | string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
  featured: boolean;
  caseStudy: CaseStudyData;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  verificationLink: string;
  group: string;
  skillsLearned: string[];
  detailedReview: string;
  certificateImage: string;
}

export interface InternshipItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  learningOutcomes: string[];
  certificateUrl?: string;
}

export interface AcademicHighlight {
  id: string;
  semester: string;
  subjects: string[];
  labWork: string[];
  researchInterest: string;
  gpa: string;
  achievements: string[];
}

export interface TechnicalDomainExp {
  domain: string;
  icon: string;
  summary: string;
  keyProjects: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  issuer: string;
  description: string;
  badge: string;
  icon?: string;
}

export interface CodingProfileItem {
  platform: string;
  username: string;
  profileUrl: string;
  rating?: string;
  solvedCount?: string;
  badge?: string;
  accentColor: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface PortfolioConfig {
  personalInfo: {
    name: string;
    title: string;
    taglines: string[];
    bio: string;
    avatarUrl: string;
    resumeUrl: string;
    atsScore: number;
    atsBreakdown: {
      keywordMatch: number;
      formattingScore: number;
      relevanceIndex: number;
      actionVerbsCount: number;
    };
    socials: SocialLinks;
    careerObjective: string;
    technicalInterests: string[];
  };
  skills: SkillCategory[];
  education: EducationItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  internships: InternshipItem[];
  academicHighlights: AcademicHighlight[];
  technicalDomains: TechnicalDomainExp[];
  achievements: AchievementItem[];
  codingProfiles: CodingProfileItem[];
  testimonials: TestimonialItem[];
}
