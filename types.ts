export interface PricingOption {
  label: string;
  price: number;
  paypalLink: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  basePrice?: number;
  basePaypalLink?: string;
  options?: PricingOption[];
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
