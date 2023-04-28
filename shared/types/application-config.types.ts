export interface ApplicationConfig {
  ad?: {
    id: string;
    text: string;
    cta?: string;
    ctaLink?: string;
  },
  navItems: {
    _id: string;
    text: string;
    href: string;
    highlighted?: boolean;
  }[],
}
