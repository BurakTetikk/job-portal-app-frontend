import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekerFeature = [
  {
    icon: Search,
    title: "Find Jobs",
    description:
      "Search and apply for jobs that match your skills and interests.",
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description:
      "Showcase your abilities with skill assessments to attract employers.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create a professional resume to stand out in the job market.",
  },
  {
    icon: MessageSquare,
    title: "Job Alerts",
    description: "Get notified about new job postings that match your profile.",
  },
];

export const employerFeature = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Connect with a diverse pool of job seekers to find the right talent.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track job performance and candidate engagement with our analytics tools.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "Screen candidates with our verification process to ensure quality hires.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description: "Streamline your hiring process with our intuitive platform.",
  },
];

export const NAVIGATION_MENU = [
  {
    id: "employer-dashboard",
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "post-job",
    name: "Post Jobs",
    icon: Plus,
  },
  {
    id: "manage-jobs",
    name: "Manage Jobs",
    icon: Briefcase,
  },
  {
    id: "campany-profile",
    name: "Company Profile",
    icon: Building2,
  },
];

export const CATEGORIES = [
    {value: "Engineering", label: "Engineering"},
    {value: "Design", label: "Design"},
    {value: "Marketing", label: "Marketing"},
    {value: "Sales", label: "Sales"},
    {value: "Finance", label: "Finance"},
    {value: "Human Resources", label: "Human Resources"},
    {value: "Customer Support", label: "Customer Support"},
    {value: "Data Science", label: "Data Science"},
    {value: "Product Management", label: "Product Management"},
    {value: "Legal", label: "Legal"},
    {value: "Operations", label: "Operations"},
    {value: "Content Creation", label: "Content Creation"},
];


export const JOB_TYPES = [
    {value: "Full-time", label: "Full-time"},
    {value: "Part-time", label: "Part-time"},
    {value: "Contract", label: "Contract"},
    {value: "Internship", label: "Internship"},
    {value: "Freelance", label: "Freelance"},
    {value: "Temporary", label: "Temporary"},
    {value: "Remote", label: "Remote"},
];

export const SALARY_RANGES = [
"Less than $1,000",
"$1,000 - $15,000",
"More than $15,000"];