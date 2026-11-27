// Site-wide settings: navigation, contact details, routes.
// Every internal link on the site is defined here so pages can be added
// (or renamed) in one place.

export const routes = {
  home: '/',
  about: '/about',
  workshops: '/workshops',
  lastMile: '/workshops#the-last-mile',
  fde: '/workshops#fde-fundamentals',
  wellness: '/workplace-wellness',
  corporateTraining: '/corporate-training',
  facilitationTraining: '/facilitation-training',
  tailored: '/tailored-programmes',
  approach: '/our-approach',
  framework: '/our-approach#framework',
  learningApproach: '/our-approach#learning-approach',
  timeLadder: '/#time-ladder',
  contact: '/contact',
  enquiryForm: '/contact#enquiry',
} as const;

// The values of the "Programme interest" field on the contact form. Pass one of
// these to contactAbout() to pre-select it.
export const programmes = {
  lastMile: 'The Last Mile — AI × HI Decision Lab',
  fde: 'FDE Fundamentals for HR',
  facilitationWorkshop: 'Facilitation for Workplace Learning',
  wellness: 'Lunch-Break Workplace Wellness',
  corporate: 'Corporate Training & Team Building',
  facilitationTraining: 'Facilitation Training & Train-the-Trainer',
  tailored: 'Tailored Development & Coaching',
} as const;

export const contactAbout = (programme: string) => `${routes.contact}?programme=${encodeURIComponent(programme)}#enquiry`;

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

// Order follows the copy document: Home, About, Workshops, Workplace Wellness,
// Corporate Training, Facilitation Training, Tailored Programmes, Our Approach,
// Contact. The four programme pages sit under "Workshops" in the dropdown.
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
  { label: 'Corporate Training', href: routes.corporateTraining },
  { label: 'Facilitation Training', href: routes.facilitationTraining },
  { label: 'Tailored Programmes', href: routes.tailored },
  { label: 'Our Approach', href: routes.approach },
  { label: 'Contact', href: routes.contact },
];
