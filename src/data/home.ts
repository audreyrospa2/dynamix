// Homepage copy, one export per section. Edit text here, not in the components.
import { routes, contact } from './site';

export const seo = {
  title: 'Dynamix Plus | Human Intelligence training in Hong Kong',
  description:
    'Corporate training, experiential team building and workplace wellness workshops in Hong Kong. Develop the judgement, communication and collaboration your people need when work gets complex.',
};

export const hero = {
  title: ['Unlock', 'Human', 'Intelligence™'],
  tagline: 'Smarter tools. Stronger people. More human connection.',
  lead: [
    'Develop the judgement, communication and collaboration your people need when work gets complex.',
    'Turn purposeful challenges, feedback and reflection into new ways of working—not just a memorable training day.',
  ],
  kicker: 'Corporate training, experiential team building and workplace wellness workshops in Hong Kong.',
  primary: { label: 'Discuss Your Team’s Needs', href: routes.contact },
  secondary: { label: 'Explore Our Workshops', href: routes.workshops },
  facts: [
    'Built on Dynamix’s experience since 2002',
    'On-site learning in Hong Kong',
    'Short workshops to tailored development journeys',
  ],
};

export const pillars = {
  title: 'Develop People. Strengthen Teams. Bring Learning to Work.',
  items: [
    {
      title: 'Develop People',
      text: 'Help people notice their patterns, manage reactions and make considered choices.',
      tags: ['Self-awareness', 'Judgement', 'Growth'],
    },
    {
      title: 'Strengthen Teams',
      text: 'Make room for honest conversations, shared understanding and genuine human connection.',
      tags: ['Communication', 'Collaboration', 'Trust'],
    },
    {
      title: 'Bring Learning to Work',
      text: 'Turn insight into behaviours your team can practise, test and improve on the job.',
      tags: ['Practice', 'Feedback', 'Application'],
    },
  ],
};

export const aiHumanity = {
  title: 'More Technology Should Not Mean Less Humanity.',
  body: [
    'AI can help us organise information, generate options and work faster. People remain responsible for how those options affect colleagues, customers and communities.',
    'Ethical judgement, dignity and care belong at the centre of work.',
    'A workplace with heart makes room for kindness, courage and a genuine commitment to one another.',
  ],
  statement: 'Let AI help us work faster. Let human connection help us work better together.',
  image: { src: '/images/photos/ai-people-technology.webp', alt: 'Colourful building blocks and a tablet showing an interactive team activity', w: 1400, h: 1050 },
};

export const audiences = {
  title: 'Soft Skills Are Not Optional When Work Gets Hard.',
  intro: 'Tools evolve. The need to listen, exercise judgement, navigate disagreement and lead with care remains.',
  items: [
    { who: 'For HR and L&D', text: 'Develop human capabilities that support your people strategy.' },
    { who: 'For business owners and leaders', text: 'Address the conversations, decisions and handovers that shape how work gets done.' },
    { who: 'For people entering the workplace', text: 'Practise listening, giving feedback and working across differences.' },
    { who: 'For established teams', text: 'Revisit habits that once worked and test what the next stage requires.' },
  ],
};

export const connection = {
  title: 'Connected Online. Connected as People?',
  body: [
    'More messages do not always mean more understanding. Give colleagues space to listen, clarify assumptions and see the person behind the role.',
    'Practise speaking up, asking for help and challenging ideas respectfully.',
    'Pair openness with accountability: acknowledge mistakes, name responsibilities, agree the next step.',
  ],
  image: { src: '/images/photos/team-conversation.webp', alt: 'Colleagues sitting in a circle on the floor, talking together', w: 1200, h: 899 },
};

export const workshops = {
  title: 'Workshops in Focus: The Human Side of AI Transformation.',
  intro: 'Invest in the technology. Develop the people who must make it work.',
  items: [
    {
      title: 'The Last Mile',
      subtitle: 'AI × HI Decision Lab',
      text: 'AI output is an input to a decision—not the decision itself.',
      cta: { label: 'Explore The Last Mile', href: routes.lastMile },
      image: { src: '/images/photos/workshop-last-mile.webp', alt: 'A hand holding a phone', w: 786, h: 1100 },
      tone: 'yellow',
    },
    {
      title: 'FDE Fundamentals for HR',
      subtitle: '',
      text: 'Connect the business problem, the people and the technical team.',
      cta: { label: 'Equip HR for AI Implementation', href: routes.fde },
      image: { src: '/images/photos/workshop-fde.webp', alt: 'People gathered around a hands-on outdoor activity', w: 1200, h: 900 },
      tone: 'photo',
    },
    {
      title: 'Facilitation for Workplace Learning',
      subtitle: '',
      text: 'AI can help prepare content. Your trainers need to help people use it.',
      cta: { label: 'Develop Your Internal Trainers', href: routes.facilitation },
      image: { src: '/images/photos/workshop-facilitation.webp', alt: 'A facilitator guiding a group through a practical task', w: 1200, h: 675 },
      tone: 'photo',
    },
  ],
};

export const wellness = {
  title: 'Workplace Wellness: Make Room for the People Carrying the Workload.',
  body: [
    'Lunch-break yoga, breathing, gong relaxation, sand art or pastel art.',
    'Space for movement, reflection and expression without pressure to perform or share.',
    'Non-clinical wellbeing experiences, not mental health treatment.',
  ],
  cta: { label: 'Explore Lunch-Break Wellness', href: routes.lunchBreak },
  image: { src: '/images/photos/wellness-session.webp', alt: 'A team smiling together at a pastel art session', w: 1400, h: 788 },
};

export const teamBuilding = {
  title: 'Team Building That Starts a Different Conversation.',
  statement: 'The activity opens the conversation. The debrief brings it back to work.',
  body: [
    'Explore how your team listens, shares information, makes decisions and responds when the plan changes.',
    'Half-day or full-day training with experiences such as Helicopter Rebuild, 3D Tic Tac Toe and Mission in the Dark.',
  ],
  cta: { label: 'Plan Your Team’s Training', href: routes.corporateTraining },
  image: { src: '/images/photos/team-activity.webp', alt: 'A team working together on a building challenge', w: 1200, h: 1800 },
};

export const approach = {
  title: 'People Can Learn New Ways of Working.',
  steps: [
    { title: 'Notice the pattern', text: 'Observe familiar reactions and assumptions.' },
    { title: 'Practise a different response', text: 'Focus on one specific behaviour, with feedback.' },
    { title: 'Bring it back to work', text: 'Repeat, retry and apply with workplace support.' },
  ],
  cta: { label: 'Discover Our Learning Approach', href: routes.approach },
};

export const framework = {
  title: 'Human Intelligence™: A Clear Route from Experience to Application.',
  stages: [
    { title: 'Human Foundations', items: ['Self-awareness', 'Self-management', 'Social awareness', 'Situational awareness', 'Resilience', 'Motivation'] },
    { title: 'Development Experiences', items: ['Challenge', 'Choice', 'Roles', 'Feedback', 'Reflection', 'Retry'] },
    { title: 'Applied Capabilities', items: ['Learning agility', 'Communication', 'Collaboration', 'Leadership', 'Creativity', 'Adaptability', 'Decision-making'] },
    { title: 'Business Outcomes', items: ['Engagement', 'Cross-functional collaboration', 'High performance', 'Leadership pipeline', 'AI-era execution speed'] },
  ],
  cta: { label: 'Explore the Human Intelligence Framework™', href: routes.framework },
};

export const timeLadder = {
  title: 'Start with the Time You Have. Build towards the Change You Need.',
  steps: [
    { title: 'One lunch break', text: 'Workplace wellness and creative reflection' },
    { title: 'A few focused hours', text: 'A specific workplace challenge and a practical next step' },
    { title: 'Half or full day', text: 'Deeper practice: team building, communication, change, facilitation' },
    { title: 'Three months +', text: 'Tailored development and coaching' },
  ],
};

export const stats = [
  { value: '2002', label: 'Years established' },
  { value: '7000+', label: 'Participants (2024)' },
  { value: '250+', label: 'Clients' },
  { value: '90%', label: 'Satisfaction rate (2022–24)' },
];

export const clients = { title: 'Our Clients' };

export const about = {
  title: 'Built on Dynamix’s Experience. Designed for What Comes Next.',
  body: [
    'Corporate team building and people development experiences since 2002.',
    'Legacy client experience spans business, government, NGOs and universities.',
    'Dynamix Plus adds the Human Intelligence Framework™, facilitation and coaching.',
  ],
  cta: { label: 'Meet Dynamix Plus', href: routes.about },
  image: { src: '/images/photos/about-team.webp', alt: 'Three colleagues leaping together above a still lake', w: 1200, h: 1606 },
};

export const finalCta = {
  title: 'What Does Your Team Need to Do Differently?',
  questions: [
    'Make better decisions with AI?',
    'Have more honest, constructive conversations?',
    'Work across departments with clearer responsibilities?',
    'Create space for wellbeing or prepare future managers?',
  ],
  text: 'Tell us what is getting in the way. We will discuss a learning experience around your people, priorities and available time.',
  primary: { label: 'Discuss Your Team’s Needs', href: routes.contact },
  whatsapp: { label: 'WhatsApp Jasmine', href: contact.whatsappUrl },
};
