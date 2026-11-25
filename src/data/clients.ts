// Client logo wall. Files live in /public/images/logos.
// `alt` falls back to "Client logo" where the logo has not been named yet.

type Logo = { src: string; alt: string; w: number; h: number };
const L = (src: string, alt: string, w: number, h: number): Logo => ({ src: `/images/logos/${src}.webp`, alt, w, h });

export const clientGroups: { id: string; label: string; logos: Logo[] }[] = [
  {
    id: 'finance',
    label: 'Finance & Banking',
    logos: [
      L('finance-01', 'BOC Life', 189, 65),
      L('finance-02', 'Generali', 169, 140),
      L('finance-03', 'Bank of China', 188, 56),
      L('finance-04', 'Qupital', 186, 44),
      L('finance-05', 'BDO', 160, 65),
      L('finance-06', 'Prudential', 192, 84),
      L('finance-07', 'AXA', 140, 140),
      L('finance-08', 'OKX', 174, 52),
      L('finance-09', 'AIA', 131, 140),
      L('finance-10', 'Manulife', 190, 38),
      L('finance-11', 'KPMG', 176, 73),
      L('finance-12', 'American Express', 140, 140),
      L('finance-13', 'J.P. Morgan', 191, 42),
      L('finance-14', 'HSBC', 182, 52),
      L('finance-15', 'Client logo', 181, 48),
      L('finance-16', 'Deloitte', 190, 39),
      L('finance-17', 'CTF Life', 190, 90),
      L('finance-18', 'Client logo', 192, 40),
      L('finance-19', 'Cigna', 192, 72),
    ],
  },
  {
    id: 'government',
    label: 'Government',
    logos: [
      L('government-01', 'Client logo', 192, 48),
      L('government-02', 'Judiciary', 166, 136),
      L('government-03', 'Client logo', 113, 140),
      L('government-04', 'ICAC', 116, 140),
      L('government-05', 'Client logo', 136, 135),
      L('government-06', 'Client logo', 192, 45),
      L('government-07', 'Client logo', 189, 69),
    ],
  },
  {
    id: 'universities',
    label: 'Universities',
    logos: [
      L('universities-01', 'Youth College', 129, 99),
      L('universities-02', 'Client logo', 192, 40),
      L('universities-03', 'Hong Kong Metropolitan University', 182, 45),
      L('universities-04', 'HKUST', 178, 58),
      L('universities-05', 'The University of Hong Kong', 179, 82),
      L('universities-06', 'The Chinese University of Hong Kong', 121, 96),
      L('universities-07', 'City University of Hong Kong', 164, 105),
      L('universities-08', 'Client logo', 185, 38),
      L('universities-09', 'IVE', 184, 79),
    ],
  },
];
