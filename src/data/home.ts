// Homepage copy, one export per section. Edit text here, not in the components.
// Source: "Dynamix Plus — Complete Brand-Led Website Copy", section 1 (Home).
import { routes, contact } from './site';

export const seo = {
  title: 'Dynamix Plus | Human Intelligence training in Hong Kong',
  description:
    'Corporate training, experiential team building and workplace wellness workshops in Hong Kong, built around our Human Intelligence Framework™. Develop the judgement, communication and collaboration your people need when work gets complex.',
};

export const hero = {
  title: ['Unlock', 'Human', 'Intelligence™'],
  tagline: 'Smarter tools. Stronger people. More human connection.',
  lead: [
    'The future of work needs more than smarter technology. It needs people who can think clearly, connect meaningfully and act responsibly.',
    'Develop the judgement, communication and collaboration your people need when work gets complex.',
    'Turn purposeful challenges, feedback and reflection into new ways of working—not just a memorable training day.',
  ],
  kicker: 'Corporate training, experiential team building and workplace wellness workshops in Hong Kong, built around our Human Intelligence Framework™.',
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
    'We believe ethical judgement, dignity and care belong at the centre of work—not at the edges of a transformation plan.',
    'People are more than users of technology. They bring hopes, pressures, values and relationships to every decision.',
    'A workplace with heart makes room for kindness, courage and a genuine commitment to one another.',
  ],
  statement: 'Let AI help us work faster. Let human connection help us work better together.',
  image: { src: '/images/photos/ai-people-technology.webp', alt: 'Colourful building blocks and a tablet showing an interactive team activity', w: 1400, h: 1050 },
};

export const audiences = {
  title: '“Soft Skills” Are Not Optional When Work Gets Hard.',
  intro: 'Tools evolve. The need to listen, exercise judgement, navigate disagreement and lead with care remains.',
  items: [
    { who: 'For HR and L&D', text: 'Develop human capabilities that support your people strategy—not just fill the training calendar.' },
    { who: 'For business owners and leaders', text: 'Address the conversations, decisions and handovers that shape how work gets done.' },
    { who: 'For people entering the workplace', text: 'Create opportunities to practise listening, giving feedback and working across differences, beyond screen-based interaction.' },
    { who: 'For established teams', text: 'Revisit habits that once worked and test what the next stage requires.' },
  ],
};

export const connection = {
  title: 'Connected Online. Connected as People?',
  statement: 'More messages do not always mean more understanding.',
  body: [
    'Give colleagues space to listen without rushing to answer, clarify assumptions and see the person behind the role.',
    'Practise speaking up, asking for help and challenging ideas respectfully—behaviours that support psychological safety.',
    'Pair openness with accountability: acknowledge mistakes, name responsibilities and agree the next step.',
    'Use shared challenges, different perspectives and facilitated reflection to practise Communication and Collaboration, drawing on Social Awareness and Self-Management.',
    'Aim to support Engagement and Cross-functional Collaboration—not promise that one workshop can change an entire culture.',
  ],
  image: { src: '/images/photos/team-conversation.webp', alt: 'Colleagues sitting in a circle on the floor, talking together', w: 1200, h: 899 },
};

export const workshops = {
  title: 'Workshops in Focus: The Human Side of AI Transformation',
  intro: 'Invest in the technology. Develop the people who must make it work.',
  items: [
    {
      title: 'The Last Mile',
      subtitle: 'AI × HI Decision Lab',
      tagline: 'AI output is an input to a decision—not the decision itself.',
      bullets: [
        'Build a K’NEX bridge from an AI-provided plan, then test it against limited resources, time and changing conditions.',
        'Practise <strong>Ask → Test → Decide → Review</strong>: clarify the context, check evidence and choose whether to adopt, adapt, reject or escalate.',
        'Develop Situational Awareness, Self-Management and Resilience through challenge, feedback and re-testing; practise Decision-Making and Collaboration to support High Performance and AI-era Execution Speed / Adaptability.',
        'Take away a Decision Card for workplace application.',
      ],
      cta: { label: 'Explore The Last Mile', href: routes.lastMile },
      image: { src: '/images/photos/workshop-last-mile.webp', alt: 'A hand holding a phone', w: 786, h: 1100 },
      tone: 'yellow',
    },
    {
      title: 'FDE Fundamentals for HR',
      subtitle: '',
      tagline: 'Connect the business problem, the people and the technical team.',
      bullets: [
        'Explore the Forward Deployed Engineer (FDE) approach and the business-facing tasks HR can contribute alongside engineers.',
        'Map a workflow, align departmental needs and prepare a manageable AI pilot with clear owners and feedback.',
        'Develop Social Awareness and Situational Awareness through stakeholder practice and workflow mapping; practise Communication, Collaboration and Decision-Making to support Cross-functional Collaboration and AI-era Execution Speed / Adaptability.',
        'Introductory implementation coordination—not an engineering qualification.',
      ],
      cta: { label: 'Equip HR for AI Implementation', href: routes.fde },
      image: { src: '/images/photos/workshop-fde.webp', alt: 'People gathered around a hands-on outdoor activity', w: 1200, h: 900 },
      tone: 'photo',
    },
    {
      title: 'Facilitation for Workplace Learning',
      subtitle: '',
      tagline: 'AI can help prepare content. Your trainers need to help people use it.',
      bullets: [
        'Help HR teams and subject-matter experts turn technical knowledge, policies and new workflows into participative learning.',
        'Design a short training segment, facilitate it, receive feedback and practise again.',
        'Develop Self-Awareness and Social Awareness; practise Communication, Leadership and Learning Agility to support Engagement and High Performance.',
      ],
      cta: { label: 'Develop Your Internal Trainers', href: routes.facilitationTraining },
      image: { src: '/images/photos/workshop-facilitation.webp', alt: 'A facilitator guiding a group through a practical task', w: 1200, h: 675 },
      tone: 'photo',
    },
  ],
};

export const wellness = {
  title: 'Workplace Wellness: Make Room for the People Carrying the Workload.',
  body: [
    'Bring a purposeful pause into the working day with lunch-break yoga, breathing, gong relaxation, sand art or pastel art.',
    'Create space for movement, reflection and expression without pressure to perform or share personal experiences.',
    'Use choice-based practice and reflection to explore Self-Awareness and Self-Management, supporting Adaptability, Creativity or Communication according to the session.',
    'Aim to support Engagement and the conditions for High Performance. These are non-clinical wellbeing experiences, not mental-health treatment.',
  ],
  cta: { label: 'Explore Lunch-Break Wellness', href: routes.wellness },
  image: { src: '/images/photos/wellness-session.webp', alt: 'A team smiling together at a pastel art session', w: 1400, h: 788 },
};

export const teamBuilding = {
  title: 'Team Building That Starts a Different Conversation.',
  statement: 'The activity opens the conversation. The debrief brings it back to work.',
  body: [
    'Explore how your team listens, shares information, makes decisions and responds when the plan changes.',
    'Choose half-day or full-day communication, collaboration or change-management training, with purposeful experiences such as Helicopter Rebuild, 3D Tic Tac Toe and Mission in the Dark.',
    'Practise a different approach through feedback, reflection and another attempt—with a specific behaviour to test at work.',
  ],
  cta: { label: 'Plan Your Team’s Training', href: routes.corporateTraining },
  image: { src: '/images/photos/team-activity.webp', alt: 'A team working together on a building challenge', w: 1200, h: 1800 },
};

export const approach = {
  title: 'People Can Learn New Ways of Working.',
  statement: 'Notice the pattern. Practise a different response. Bring it back to work.',
  // Numbered steps on the homepage carry titles only; the Our Approach page adds text.
  steps: [{ title: 'Notice the pattern' }, { title: 'Practise a different response' }, { title: 'Bring it back to work' }],
  body: [
    'Neuroplasticity describes the brain’s capacity to adapt through experience and learning, including in adulthood.',
    'We create opportunities to notice habitual reactions, focus on a different behaviour and practise it with feedback.',
    'A short workshop can start the process. Repetition, workplace support and opportunities to re-try help carry learning forward.',
    'We support learning and practice—not promises of instant brain rewiring.',
  ],
  cta: { label: 'Discover Our Learning Approach', href: routes.learningApproach },
};

export const framework = {
  title: 'Human Intelligence™: A Clear Route from Experience to Application.',
  intro:
    'Human Intelligence™ is how people notice themselves and others, learn through experience, regulate reactions, make judgements and create value together amid uncertainty, interdependence and competing values.',
  lead: 'Our Human Intelligence Framework™ connects four levels:',
  stages: [
    {
      title: 'Human Foundations',
      note: 'The foundations people draw on when work becomes difficult.',
      items: ['Self-Awareness', 'Self-Management', 'Social Awareness', 'Situational Awareness', 'Resilience', 'Motivation'],
    },
    {
      title: 'Development Experiences',
      note: '',
      items: [
        'Meaningful challenges',
        'Choice',
        'Different roles and perspectives',
        'Specific feedback',
        'Structured reflection',
        'Opportunities to re-try and apply learning',
      ],
    },
    {
      title: 'Applied Capabilities',
      note: 'Capabilities to practise in real work.',
      items: ['Learning Agility', 'Communication', 'Collaboration', 'Leadership', 'Creativity', 'Adaptability', 'Decision-Making'],
    },
    {
      title: 'Business Outcomes',
      note: '',
      items: ['Engagement', 'Cross-functional Collaboration', 'High Performance', 'Leadership Pipeline', 'AI-era Execution Speed / Adaptability'],
    },
  ],
  footnote: 'Programme goals may include these outcomes. We agree the relevant focus and progress indicators with you.',
  cta: { label: 'Explore the Human Intelligence Framework™', href: routes.framework },
};

export const timeLadder = {
  title: 'Start with the Time You Have. Build towards the Change You Need.',
  steps: [
    { title: 'One lunch break', text: 'Workplace wellness and creative reflection.' },
    { title: 'A few focused hours', text: 'A specific workplace challenge and a practical next step.' },
    { title: 'Half a day or a full day', text: 'Deeper practice in team building, communication, change management or facilitation.' },
    { title: 'Three months or more', text: 'Tailored development and coaching for NGO teams and emerging leaders, with workplace practice and progress reviews.' },
  ],
};

// Not in the copy document: taken from the company deck. Remove if not wanted.
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
    'Dynamix has delivered corporate team-building and people-development experiences since 2002.',
    'Its legacy client experience spans business, government, NGOs and universities.',
    'Dynamix Plus builds on that heritage with the Human Intelligence Framework™, facilitation and coaching—connecting the experience to the behaviours and organisational priorities that matter to you.',
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
