// Copy for the inner pages.
// Source: "Dynamix Plus — Complete Brand-Led Website Copy", sections 2 to 9.
// Strings may contain <strong> where the document bolds a term (they are
// rendered with set:html, so only put trusted text here).
import { routes, programmes, contactAbout } from './site';

type Focus = [string, string, string, string];

/* ----------------------------- 2. About ----------------------------- */
export const about = {
  seo: {
    title: 'About Dynamix Plus | Dynamix Plus',
    description:
      'Dynamix Plus develops Human Intelligence™ through focused workshops, purposeful experiences and reflection, building on Dynamix’s corporate team-building and people-development experience since 2002.',
  },
  hero: {
    title: 'Better Work Starts Between People.',
    lead: 'A capable team can still struggle to speak honestly, share responsibility or make difficult decisions together.',
    figure: '/images/hero/figure-d.webp',
  },
  intro: {
    body: [
      'Dynamix Plus develops Human Intelligence™ through focused workshops, purposeful experiences and reflection—helping people understand one another, exercise judgement and turn intentions into behaviour.',
    ],
    statement: 'Care and accountability belong in the same conversation.',
    after:
      'Our approach makes room for different perspectives while asking people to consider their impact, make choices and take responsibility.',
  },
  roots: {
    title: 'Experience with Roots. Development with Purpose.',
    body: [
      'Founded in 2002, Dynamix brings a heritage in corporate team building, coaching and people development. Its legacy client experience includes HSBC, Deloitte, MTR, Microsoft, Citybus and Amway, across a portfolio spanning business, government, NGOs and universities.',
      'Dynamix Plus builds on that heritage. A team experience opens the conversation; reflection reveals familiar habits; practice helps people explore a different response.',
      'Our Human Intelligence Framework™ connects Human Foundations, Development Experiences, Applied Capabilities and intended Business Outcomes—keeping learning focused on workplace application.',
      'For example, role differences, feedback, reflection and re-try help participants develop Self-Awareness, Social Awareness and Self-Management while practising Communication and Collaboration.',
      'We connect that practice to intended Engagement, Cross-functional Collaboration and High Performance, with a relevant workplace action to test.',
    ],
    image: { src: '/images/photos/about-team.webp', alt: 'Three colleagues leaping together above a still lake', w: 1200, h: 1606 },
  },
  start: {
    title: 'Start Small. Keep Learning.',
    text: 'Start with a short workshop. Choose half-day or full-day training for deeper practice, or a tailored journey of three months or more for application and coaching.',
    cta: { label: 'Tell Us What Your Team Is Finding Difficult', href: routes.contact },
  },
};

/* ------------------- 3. Featured Short Workshops ------------------- */
export const workshopsPage = {
  seo: {
    title: 'Featured Short Workshops | Dynamix Plus',
    description:
      'Short corporate workshops in Hong Kong on the human side of AI transformation: The Last Mile — AI × HI Decision Lab, and FDE Fundamentals for HR.',
  },
  hero: {
    title: 'The Human Side of AI Transformation.',
    lead: 'Short corporate workshops in Hong Kong.',
    body: [
      'Another presentation may not be enough. Our short workshops give teams space to test assumptions, hear different perspectives and practise a response to take back to work.',
      'At your office or an agreed venue, sessions combine experience, reflection and action.',
    ],
    figure: '/images/hero/figure-b.webp',
  },
  items: [
    {
      id: 'the-last-mile',
      title: 'The Last Mile',
      subtitle: 'AI × HI Decision Lab',
      tagline: 'An answer is not a decision. People close the last mile.',
      intro: [
        'AI can help generate information and options. People still need to read the context, weigh consequences and decide what fits their responsibilities and values.',
        'Build a K’NEX bridge using an AI-provided plan, with limited time, resources and changing conditions. Practise Context Engineering: making the task, constraints and evidence clear to AI.',
      ],
      listLead: '<strong>Ask → Test → Decide → Review.</strong> Participants practise:',
      list: [
        'Testing the plan against evidence—not accepting it at face value.',
        'Choosing to adopt, adapt, reject or escalate.',
        'Reviewing decisions and owning the next step.',
      ],
      takeaway: 'Take away a <strong>Decision Card</strong> for workplace application.',
      forWho: 'Managers, cross-functional teams and people using AI in everyday work.',
      focus: [
        'Situational Awareness, Self-Management, Resilience',
        'Changing scenarios, different perspectives, feedback and re-testing',
        'Decision-Making, Collaboration, Learning Agility',
        'High Performance; Cross-functional Collaboration; AI-era Execution Speed / Adaptability',
      ] as Focus,
      cta: { label: 'Bring a Decision Challenge to The Last Mile', href: contactAbout(programmes.lastMile) },
      image: { src: '/images/photos/workshop-last-mile.webp', alt: 'A hand holding a phone', w: 786, h: 1100, tone: 'yellow' },
    },
    {
      id: 'fde-fundamentals',
      title: 'FDE Fundamentals for HR',
      subtitle: '',
      tagline: 'AI adoption is a people-and-workflow challenge, too.',
      intro: [
        'A promising tool is not yet a useful workflow. HR can connect the business problem, the people affected and the technical delivery team.',
        'Explore the <strong>Forward Deployed Engineer (FDE)</strong> approach and the discovery, coordination, pilot and adoption tasks HR can undertake alongside engineers.',
      ],
      listLead: 'Participants work through an HR or cross-department use case to:',
      list: [
        'Map the pain point, workflow, responsibilities and stakeholders.',
        'Build a shared brief with scope, owners and success indicators.',
        'Flag employee-data, access and confidentiality concerns for responsible teams.',
        'Plan a manageable pilot, user feedback and adoption support.',
      ],
      takeaway:
        'Leave with a draft use-case brief, stakeholder map and pilot action plan. Where agreed, a supervised low-code or no-code prototype exercise uses approved tools and non-sensitive data.',
      forWho: 'HR practitioners, HR business partners, L&D teams and internal AI coordinators.',
      format: 'A few hours, with deeper practice available through a tailored programme.',
      focus: [
        'Social Awareness, Situational Awareness, Self-Management, Resilience',
        'Stakeholder interviews, workflow mapping and pilot-plan feedback',
        'Communication, Collaboration, Decision-Making, Adaptability',
        'Cross-functional Collaboration; AI-era Execution Speed / Adaptability',
      ] as Focus,
      boundary:
        'This is not an engineering qualification. Coding, integration and production deployment require additional technical competence; a demonstration or prototype is not a production-ready solution.',
      cta: { label: 'Prepare HR to Support AI Implementation', href: contactAbout(programmes.fde) },
      image: { src: '/images/photos/workshop-fde.webp', alt: 'People gathered around a hands-on outdoor activity', w: 1200, h: 900, tone: 'photo' },
    },
  ],
};

/* ---------------- 4. Lunch-Break Workplace Wellness ---------------- */
export const wellnessPage = {
  seo: {
    title: 'Lunch-Break Workplace Wellness | Dynamix Plus',
    description:
      'On-site employee wellness workshops in Hong Kong: yoga, breathing, gong relaxation, sand art and pastel art. Non-clinical lunch-break sessions with optional participation.',
  },
  hero: {
    title: 'Make Room for the People Carrying the Workload.',
    lead: 'On-site employee wellness workshops in Hong Kong.',
    body: [
      'A full calendar leaves little room to notice how we are doing. A lunch-break session offers a pause: to move, breathe, create or listen.',
      'Choose from six on-site experiences. Participation and sharing are optional; no private disclosure is needed.',
      'Learning maps connect <strong>Foundations → Development Experience → Applied Capabilities → intended Business Outcomes</strong>, not clinical promises.',
    ],
    figure: '/images/hero/figure-c.webp',
  },
  outcome: 'Engagement and conditions for High Performance',
  items: [
    {
      title: 'Desk Reset Yoga',
      tagline: 'Step away from the screen. Notice your body.',
      text: 'Explore breathing, posture awareness and gentle stretches, adapted to individual comfort. Take away simple movement reminders for work breaks.',
      focus: ['Self-Awareness, Self-Management', 'choice-based movement and reflection', 'Adaptability'],
    },
    {
      title: 'Recharging Gong Spa',
      tagline: 'Give yourself permission to pause.',
      text: 'A guided sound-based relaxation experience with gong and complementary instruments. Optional rainbow-card prompts invite reflection on feelings and needs; choose one small act of self-care.',
      focus: ['Self-Awareness, Resilience', 'attentive listening, optional reflection and a small habit', 'Adaptability'],
    },
    {
      title: 'Breathe & Reset',
      tagline: 'Create a little space before your next response.',
      text: 'Explore guided breathing, body awareness and quiet reflection. Notice signals of pressure and try a short reset before a meeting or between tasks.',
      focus: ['Self-Awareness, Self-Management', 'guided practice and reflection', 'Adaptability, Communication'],
    },
    {
      title: 'Mindful Energys',
      tagline: 'Notice what you bring into the conversation.',
      text: 'Explore how thoughts, emotions and language shape experience and interaction. Guided activities and an optional Reiki experience support personal reflection and one intentional change to practise.',
      focus: ['Self-Awareness, Self-Management', 'optional activities, reflection and habit practice', 'Communication, Adaptability'],
    },
    {
      title: 'Sand Art Workshop',
      tagline: 'Let the picture change. See what you notice.',
      text: 'Explore patterns and images through guided sand art. Reflect on your response when a creation takes an unexpected direction. No art experience needed.',
      focus: ['Self-Awareness, Situational Awareness', 'creative exploration and reflection', 'Creativity, Adaptability'],
    },
    {
      title: 'Pastel Art Workshop',
      tagline: 'Less perfection. More expression.',
      text: 'Explore colour and imagery, focusing on the process rather than a perfect picture. Share your artwork’s meaning if you choose, and listen to other interpretations. No art experience needed.',
      focus: ['Self-Awareness, Motivation', 'creative choice, optional sharing and reflection', 'Creativity, Communication'],
    },
  ],
  planning: {
    label: 'Planning',
    text: 'Lunch-break sessions typically accommodate around 20 participants; arrangements depend on the workshop. We deliver at your office or an agreed venue. Movement and floor-based sessions need sufficient room and yoga mats. Longer wellbeing formats can be discussed.',
  },
  care: {
    label: 'Participation and care',
    text: 'These are non-clinical experiences, not diagnosis, treatment or a substitute for professional mental-health support. Reiki and reflection cards carry no therapeutic or predictive guarantee. Participants may adapt, pause or opt out. Anyone with pain, injury or particular health needs should seek appropriate professional advice and inform the facilitator beforehand.',
  },
  cta: { label: 'Choose a Pause That Fits Your Team', href: contactAbout(programmes.wellness) },
};

/* ------- 5. Corporate Training & Experiential Team Building ------- */
export const corporatePage = {
  seo: {
    title: 'Corporate Training & Experiential Team Building | Dynamix Plus',
    description:
      'Half-day and full-day corporate training and team building in Hong Kong: collaboration, communication skills and change management, with a debrief that brings learning back to work.',
  },
  hero: {
    title: 'The Work Between People Is Still Work.',
    lead: 'Half-day and full-day corporate training and team building in Hong Kong.',
    body: [
      'Unspoken assumptions. Unclear handovers. Decisions nobody owns. Everyday frictions deserve more than a team photo.',
      'Half-day and full-day programmes make working habits visible and turn reflection into behaviours to test. Customised focus can include speaking up, respectful listening and constructive responses to mistakes—practices relevant to psychological safety.',
    ],
    figure: '/images/hero/figure-b.webp',
  },
  programmes: [
    {
      id: 'team-building',
      title: 'Team Building & Collaboration',
      tagline: 'Move from individual effort to shared responsibility.',
      text: 'Explore trust, roles and shared goals. Practise sharing information and coordinating across differences.',
      focus: [
        'Social Awareness, Self-Management, Motivation',
        'Team challenges, feedback and a second attempt',
        'Collaboration, Communication',
        'Cross-functional Collaboration, Engagement',
      ] as Focus,
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills Training',
      tagline: 'Being clear is not the same as being understood.',
      text: 'Practise listening, clarifying expectations and checking understanding. Explore how assumptions and emotions shape difficult conversations.',
      focus: [
        'Self-Awareness, Social Awareness, Self-Management',
        'Role practice, feedback and reflection',
        'Communication, Collaboration',
        'Cross-functional Collaboration, High Performance',
      ] as Focus,
    },
    {
      id: 'change-management',
      title: 'Change Management & Adaptability',
      tagline: 'When the plan changes, how does your team respond?',
      text: 'Practise communicating uncertainty, updating assumptions and adjusting plans without losing sight of responsibilities.',
      focus: [
        'Situational Awareness, Self-Management, Resilience',
        'Changing scenarios, feedback and re-testing',
        'Adaptability, Learning Agility, Decision-Making',
        'High Performance; AI-era Execution Speed / Adaptability',
      ] as Focus,
    },
  ],
  experiences: {
    title: 'Experiences That Open the Conversation',
    intro: [
      'Activities sit within these programmes, with feedback and re-try opportunities as appropriate. Maps follow <strong>Foundations → Development Experience → Applied Capabilities → intended Business Outcomes</strong>.',
    ],
    items: [
      {
        title: 'Helicopter Rebuild',
        text: 'Explore changing responsibilities, trust and coordinated action.',
        focus: ['Social Awareness, Situational Awareness', 'role variation and reflection', 'Communication, Collaboration, Adaptability', 'Cross-functional Collaboration'] as Focus,
      },
      {
        title: '3D Tic Tac Toe',
        text: 'Bring different perspectives into a shared plan.',
        focus: ['Social Awareness, Situational Awareness', 'shared challenge and debrief', 'Communication, Collaboration, Decision-Making', 'Cross-functional Collaboration, High Performance'] as Focus,
      },
      {
        title: 'The Running Pen',
        text: 'Notice how individual signals affect a collective result.',
        focus: ['Self-Management, Social Awareness', 'coordinated practice and feedback', 'Communication, Collaboration', 'Cross-functional Collaboration, Engagement'] as Focus,
      },
      {
        title: 'Poker Family',
        text: 'Explore non-verbal communication, roles and shared leadership.',
        focus: ['Social Awareness, Motivation', 'role differences and reflection', 'Communication, Collaboration, Leadership', 'Engagement, Leadership Pipeline'] as Focus,
      },
      {
        title: 'Electric Maze',
        text: 'Examine trust, collective learning and shared accountability.',
        focus: ['Self-Management, Resilience', 'challenge, reflection and re-try', 'Learning Agility, Collaboration', 'Cross-functional Collaboration, High Performance'] as Focus,
      },
      {
        title: 'Black Out',
        text: 'Reflect on communication, trial-and-error learning and shared goals.',
        focus: ['Self-Awareness, Resilience', 'challenge and structured debrief', 'Communication, Learning Agility, Collaboration', 'Engagement, Cross-functional Collaboration'] as Focus,
      },
      {
        title: 'Mission in the Dark',
        text: 'Explore clear guidance, listening and collaboration with incomplete information.',
        focus: ['Situational Awareness, Self-Management', 'perspective differences and reflection', 'Communication, Collaboration, Adaptability', 'Cross-functional Collaboration, High Performance'] as Focus,
      },
    ],
  },
  debrief: {
    title: 'The Debrief Makes It Relevant',
    steps: [
      { word: 'Fact', question: 'What happened?' },
      { word: 'Feeling', question: 'How did people experience it?' },
      { word: 'Future', question: 'What will we keep, change or test at work?' },
    ],
  },
  cta: { label: 'Plan Training Around Your Team’s Real Friction', href: contactAbout(programmes.corporate) },
};

/* ------------ 6. Facilitation Training & Train-the-Trainer ------------ */
export const facilitationPage = {
  seo: {
    title: 'Facilitation Training & Train-the-Trainer | Dynamix Plus',
    description:
      'Facilitation skills training in Hong Kong for HR, L&D teams and subject-matter experts: turn knowledge into usable learning, facilitate a short segment, receive feedback and practise again.',
  },
  hero: {
    title: 'Your Experts Know the Content. Help People Use It.',
    lead: 'Facilitation skills training for HR, L&D teams and subject-matter experts.',
    body: [
      'A slide deck cannot show whether someone can apply a policy or make a sound judgement. Internal learning needs participation, practice and checks for understanding.',
      'Help HR, L&D teams and subject-matter experts turn knowledge into usable learning.',
    ],
    figure: '/images/hero/figure-a.webp',
  },
  practise: {
    id: 'facilitation-practice',
    title: 'Practise the Human Side of Facilitation',
    list: [
      'Define what participants should be able to demonstrate.',
      'Turn content into relevant examples, exercises and questions.',
      'Give clear instructions and manage the pace.',
      'Invite participation without forcing disclosure.',
      'Handle different views respectfully and debrief for application.',
    ],
    takeaway: 'Bring a training topic. Facilitate a short segment, receive feedback and practise again. Leave with a revised session plan and workplace application activity.',
    focus: [
      'Self-Awareness, Social Awareness, Situational Awareness',
      'Facilitation practice, peer feedback, reflection and re-try',
      'Communication, Leadership, Learning Agility',
      'Engagement, High Performance, Cross-functional Collaboration',
    ] as Focus,
    format: 'Half-day or full-day workshops, with extended practice and coaching available through a tailored programme.',
  },
  cta: { label: 'Bring an Internal Training Topic to Life', href: contactAbout(programmes.facilitationTraining) },
};

/* ------- 7. Tailored Development & Coaching Programmes ------- */
export const tailored = {
  seo: {
    title: 'Tailored Development & Coaching Programmes | Dynamix Plus',
    description:
      'Tailored journeys of three months or more that connect workshops, coaching, practice and reviews: NGO coaching and team development, and a leadership transition programme.',
  },
  hero: {
    title: 'Some Changes Need More Than a Good Start.',
    lead: 'Tailored development and coaching programmes.',
    body: [
      'New responsibilities and established habits need time and support. Tailored journeys, starting from three months, connect workshops, coaching, practice and reviews around your organisational need.',
      'Agree behaviours to develop and evidence of progress—not simply sessions to deliver.',
    ],
    figure: '/images/hero/figure-c.webp',
  },
  items: [
    {
      id: 'ngo-coaching',
      title: 'NGO Coaching & Team Development',
      tagline: 'Care for the people behind the mission.',
      intro: [
        'For NGO managers, team leaders and service teams balancing role demands, stakeholder relationships and pressure. Explore choices, communication and shared responsibility through coaching and workplace practice.',
      ],
      focus: [
        'Self-Awareness, Social Awareness, Self-Management, Resilience',
        'Reflective coaching, peer learning and behaviour experiments',
        'Communication, Collaboration, Adaptability',
        'Engagement, Cross-functional Collaboration, Retention',
      ] as Focus,
    },
    {
      id: 'leadership-transition',
      title: 'Leadership Transition Programme',
      tagline: 'Doing the work well is not the same as leading others well.',
      intro: [
        'For emerging leaders, second-tier talent and people preparing for management. Practise delegation, feedback, coaching conversations and decisions with wider team consequences.',
      ],
      focus: [
        'Motivation, Social Awareness, Situational Awareness, Resilience',
        'Workshops, role practice, coaching, assignments and stakeholder feedback',
        'Leadership, Communication, Decision-Making',
        'Leadership Pipeline, High Performance, Retention',
      ] as Focus,
    },
  ],
  journey: {
    title: 'The journey',
    steps: ['Discover the challenge', 'Design around real work', 'Practise', 'Apply', 'Review feedback and agreed progress indicators'],
  },
  cta: { label: 'Discuss the Change You Want to Support', href: contactAbout(programmes.tailored) },
};

/* ------------- 8. Our Approach — Human Intelligence Framework™ ------------- */
export const approachPage = {
  seo: {
    title: 'Our Approach: The Human Intelligence Framework™ | Dynamix Plus',
    description:
      'The Human Intelligence Framework™ connects Human Foundations, Development Experiences, Applied Capabilities and intended Business Outcomes, so learning stays focused on workplace application.',
  },
  hero: {
    title: 'Develop the Capabilities Behind Better Human Decisions.',
    body: [
      'Human Intelligence™ means noticing ourselves and others, learning through experience, managing reactions, exercising judgement and creating value together—amid uncertainty, interdependence and competing values.',
      'These enduring human capabilities are often called “soft skills”. AI supports work; people remain responsible for context, consequences and collaboration.',
    ],
    figure: '/images/hero/figure-a.webp',
  },
  framework: {
    title: 'Four Levels. One Route to Application.',
    stages: [
      {
        title: 'Human Foundations｜人本基礎',
        items: [
          { label: 'Self-Awareness｜自我覺察', text: 'Notice reactions, assumptions and impact.' },
          { label: 'Self-Management｜自我管理', text: 'Manage attention and behaviour under pressure.' },
          { label: 'Social Awareness｜社會覺察', text: 'Understand others’ perspectives and needs.' },
          { label: 'Situational Awareness｜情境覺察', text: 'Read context, constraints and signals.' },
          { label: 'Resilience｜韌性', text: 'Adjust and learn through difficulty.' },
          { label: 'Motivation｜動機', text: 'Build purpose and ownership.' },
        ],
      },
      {
        title: 'Development Experiences｜發展經驗',
        items: [
          'Meaningful, appropriately difficult challenges',
          'Choice and agency',
          'Different roles and perspectives',
          'Specific feedback or real consequences',
          'Structured reflection and meaning-making',
          'Re-try, variation and workplace transfer',
        ],
      },
      {
        title: 'Applied Capabilities｜應用能力',
        items: [
          'Learning Agility｜學習敏捷力',
          'Communication｜溝通力',
          'Collaboration｜協作力',
          'Leadership｜領導力',
          'Creativity｜創意力',
          'Adaptability｜適應力',
          'Decision-Making｜決策力',
        ],
      },
      {
        title: 'Business Outcomes｜業務成果',
        items: [
          'Retention｜留才',
          'Leadership Pipeline｜領導梯隊',
          'High Performance｜績效',
          'Innovation｜創新',
          'Engagement｜員工投入度',
          'Cross-functional Collaboration｜跨部門協作',
          'AI-era Execution Speed / Adaptability｜AI 時代的執行速度／適應力',
        ],
      },
    ],
  },
  learning: {
    title: 'Learning Is Possible. Practice Still Matters.',
    statement: 'Neuroplasticity describes the brain’s capacity to adapt through experience and learning, including in adulthood.',
    steps: [
      { title: 'Notice the pattern', text: 'Observe familiar reactions and assumptions before deciding what to change.' },
      { title: 'Direct attention', text: 'Focus practice on a specific behaviour rather than a general intention to “be better”.' },
      { title: 'Practise and revisit', text: 'Use feedback, reflection and another attempt to explore a different response.' },
      { title: 'Carry it into work', text: 'Continue with manageable behaviour experiments and workplace support; a single burst of motivation is not the whole learning journey.' },
    ],
    body: [
      'These experiences develop Self-Awareness, Self-Management and Resilience while participants practise Learning Agility, Communication and Adaptability, with intended contributions to Engagement, Cross-functional Collaboration and High Performance.',
      'The Human Intelligence Framework™ remains our core design framework. Neuroplasticity is supporting learning context—not proof of programme effects. We respect individual differences and choices; we do not measure neural change or promise instant rewiring or clinical outcomes.',
    ],
  },
  care: {
    title: 'Designed with Care. Connected to Work.',
    body: [
      'We invite questions, respect different perspectives and allow choice without forced personal disclosure. These practices make room for learning; no workshop alone can guarantee psychological safety.',
      'Business outcomes are intended contributions, not guaranteed results. We agree relevant progress indicators and follow-up where included.',
    ],
    cta: { label: 'Find Your Team’s Human Development Focus', href: routes.contact },
  },
};

/* ----------------------------- 9. Contact ----------------------------- */
export const contactPage = {
  seo: {
    title: 'Contact | Dynamix Plus',
    description:
      'Start with the challenge, not the course name. Share your team’s needs, group size and timing and Dynamix Plus will discuss a format and scope, starting with short workshops.',
  },
  hero: {
    title: 'Start with the Challenge, Not the Course Name.',
    lead: 'What gets in the way of better work together? Share your team’s needs, group size and timing. We will discuss a format and scope, starting with short workshops.',
  },
  programmeOptions: [...Object.values(programmes), 'Not sure yet'],
  groupSizes: ['Under 10', '10–30', '30–100', '100–500', 'Over 500', 'Not sure yet'],
};

export const ctaBand = {
  title: 'What Does Your Team Need to Do Differently?',
  text: 'Tell us what is getting in the way. We will discuss a learning experience around your people, priorities and available time.',
};
export { routes };
