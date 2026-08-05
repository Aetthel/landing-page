export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mainNavItems: NavItem[];
  secondaryNavItems: NavItem[];
  socials: SocialLink[];
}