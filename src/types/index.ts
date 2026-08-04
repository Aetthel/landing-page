export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  navItems: NavItem[];
  features: Feature[];
  steps: HowItWorksStep[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  socials: SocialLink[];
}
