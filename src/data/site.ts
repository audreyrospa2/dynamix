// Site-wide settings: navigation, contact details, routes.
// Every internal link on the site is defined here so pages can be added
// (or renamed) in one place.

// Everything lives on the homepage for now, so every route is an anchor to a
// section. The "/#" prefix keeps the links working from any future page.
export const routes = {
  home: '/',
  about: '/#develop-people',
  workshops: '/#workshops',
  lastMile: '/#workshops',
  fde: '/#workshops',
  facilitation: '/#workshops',
  wellness: '/#wellness',
  lunchBreak: '/#wellness',
  corporateTraining: '/#team-building',
  facilitationTraining: '/#learning-approach',
  tailored: '/#about-dynamix',
  aboutDynamix: '/#about-dynamix',
  approach: '/#framework',
  learningApproach: '/#learning-approach',
  framework: '/#framework',
  timeLadder: '/#time-ladder',
  contact: '/#contact',
} as const;

export const contact = {
  person: 'Jasmine Yick',
  whatsapp: '+852 9686 8469',
  whatsappUrl: 'https://wa.me/85296868469',
  phone: '+852 3105 1920',
  phoneUrl: 'tel:+85231051920',
  email: 'info@dynamix.com.hk',
  emailUrl: 'mailto:info@dynamix.com.hk',
  legal: 'Dynamix Coaching and Consulting Limited',
  brand: 'Dynamix Plus',
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Order follows the design: Home, About, Workshops, Workplace Wellness,
// Corporate Training, Facilitation Training, Tailored Programmes,
// Our Approach, Contact. The four programme pages sit under "Workshops".
export const nav: NavItem[] = [
  { label: 'Home', href: routes.home },
  { label: 'About', href: routes.about },
  {
    label: 'Workshops',
    href: routes.workshops,
    children: [
      { label: 'Workplace Wellness', href: routes.wellness },
      { label: 'Corporate Training', href: routes.corporateTraining },
      { label: 'Facilitation Training', href: routes.facilitationTraining },
      { label: 'Tailored Programmes', href: routes.tailored },
    ],
  },
  { label: 'Our Approach', href: routes.approach },
  { label: 'Contact', href: routes.contact },
];

export const footerNav = [
  { label: 'Home', href: routes.home },
  { label: 'About', href: routes.about },
  { label: 'Workshops', href: routes.workshops },
  { label: 'Workplace Wellness', href: routes.wellness },
  { label: 'Our Approach', href: routes.approach },
  { label: 'Contact', href: routes.contact },
];
