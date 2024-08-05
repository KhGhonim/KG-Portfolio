export const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export const navLinks = [
  {
    href: "/Translator",
    text: "Home",
  },
  {
    href: "/Translator/Resume",
    text: "Resume",
  },
  {
    href: "/Translator/Services",
    text: "Services",
  },
  {
    href: "/Translator/Contact",
    text: "Contact",
  },
];

export const testimonials = [
  {
    name: "BROS Team",
    title: "CEO",
    location: "Turkey",
    testimonial:
      "Khaled Ghonim ile çalışmak, uluslararası işlerimde büyük bir kolaylık sağladı. Dil bilgisi, profesyonellik ve özeni mükemmel. Özel tercüman arayanlara kesinlikle tavsiye ederim!",
    photo: "/Büyük Tabela.jpg",
  },
  {
    name: "SRI Translation",
    title: "Founder",
    location: "India",
    testimonial:
      "Khaled Ghonim is a phenomenal private translator. Their linguistic expertise, professionalism, and attention to detail have greatly enhanced my international business endeavors. Highly recommended!",
    photo: "/logo-1.png",
  },
  {
    name: "ALPHA",
    title: "CEO",
    location: "Dubai",
    testimonial:
      "Working with Khaled Ghonim as my Operations Manager has been a delight. His exceptional project management skills and professionalism have made our collaboration seamless. Highly recommended for any translations project!",
    photo: "/Alpha-logo.webp",
  },
  {
    name: "Andovar ",
    title: "Operation Manager",
    location: "Singapore",
    testimonial:
      "Khaled has demonstrated exceptional skill and precision in translating numerous gaming and entertainment domain sheets through Phrase. His dedication to quality and attention to detail have consistently resulted in outstanding translations that resonate with our target audience. We highly recommend his services for any project requiring top-notch linguistic expertise.",
    photo: "/download.jpg",
  },
  {
    name: "Fox News",
    title: "Editor in Chief",
    location: "Syria",
    testimonial:
      "Khaled expertly translated several pieces of footage concerning Turkey's earthquake into more than four languages. His linguistic proficiency and commitment to accuracy ensured that crucial information reached diverse audiences effectively. His work has been invaluable in conveying vital messages across language barriers. Highly recommended for any project requiring exceptional translation skills.",
    photo: "/unnamed (4).jpg",
  },
  {
    name: "Ollang",
    title: "CEO",
    location: "Istanbul, Turkey",
    testimonial:
      "Khaled has successfully translated 150 series and movies from Turkish to both Arabic and English. His linguistic expertise and attention to cultural nuances have ensured that each translation is both accurate and engaging. Khaled’s work has significantly contributed to making these series and movies accessible to a broader audience. Highly recommended for any large-scale translation projects.",
    photo: "/zgr6e5jrgkfkuokckkuw.jpg",
  },
  {
    name: "Collot Baca Localization",
    title: "Project Manager",
    location: "Switzerland",
    testimonial:
      "During his internship, Khaled demonstrated exceptional skill while working on projects with Netflix and Disney+. He expertly managed separate projects in Greek, Dutch, and German, translating more than 30 series and movies. His proficiency in multiple languages and his attention to detail ensured high-quality translations that resonated with diverse audiences. Khaled’s work has been instrumental in making these shows accessible to viewers worldwide. Highly recommended for any complex and large-scale translation projects.",
    photo: "/1635514359868.jpg",
  },
  {
    name: "WORDS Language Solutions",
    title: "Project Manager",
    location: "Austrlia",
    testimonial:
      "Khaled has been an invaluable asset to the SBS Arabic News team, assisting in the preparation of daily bulletins and working on SBS On Demand programs. His expertise as a skilled translator, familiar with Australian accents and argot, has been crucial. Additionally, Khaled has contributed to other major projects for the company, translating around 200,000 words since he started. His dedication and proficiency have significantly enhanced our content delivery. Highly recommended for any translation needs.",
    photo: "/1.webp",
  },
  {
    name: "Hilal Play",
    title: "Manager",
    location: "Denmark",
    testimonial:
      "Khaled has played a pivotal role in translating and transcribing historical series like Diriliş Ertuğrul and Kuruluş Osman, along with many other episodes. His deep understanding of historical context and linguistic precision has brought these stories to life for a broader audience. Khaled’s work is highly valued for its accuracy and cultural sensitivity. Highly recommended for any historical translation and transcription projects.",
    photo: "/643d11b454483.jpg",
  },
  {
    name: "Pinnacles Productions",
    title: "Account Manager",
    location: "Pakistan",
    testimonial:
      "Working with Pinnacles Productions, a partner for MBC Group's entertainment services, Khaled Ghonim showcased exceptional translation and linguistic skills. Within just a month, Khaled delivered over 1,000 minutes of content in various languages, demonstrating not only his proficiency but also his remarkable ability to handle high-volume projects under tight deadlines. His dedication and meticulous attention to detail have significantly contributed to our success. Khaled's work consistently exceeds expectations, making him an invaluable asset to any project requiring top-notch translation services.",
    photo: "/PinnacleWhite+Logo.png",
  },
  {
    name: "TransTech",
    title: "Project Manager",
    location: "Egypt",
    testimonial:
      "Khaled Ghonim has been an exceptional MTPE specialist at TransTech. His sharp linguistic skills and attention to detail have greatly improved our machine-generated translations. Khaled's ability to refine translations and ensure accuracy has been invaluable to our projects. We highly recommend him for any MTPE role.",
    photo: "/unnamed.jpg",
  },
];

export const services = [
  {
    imgSrc: "/translate.png",
    imgAlt: "Translation Service",
    title: "Translation",
    description:
      "As a seasoned language translator, I specialize in providing expert translation services in multiple language pairs. With fluency in English, Arabic, and Turkish, I offer precise and culturally nuanced translations from English to Arabic, Arabic to English, Turkish to Arabic, and Arabic to Turkish. With meticulous attention to detail and a thorough understanding of language intricacies, I ensure your message is accurately conveyed across different languages and cultural contexts.",
    Link: "/Translator/Services/Translation",
  },
  {
    imgSrc: "/project-manager.png",
    imgAlt: "Project Management ",
    title: "Project Management",
    description:
      "With a wealth of experience as a Project Manager and Operation Manager at reputable companies in Switzerland and the UAE, I offer exceptional Project Management services. I bring a strategic approach, meticulous planning, and effective execution to ensure successful project outcomes aligned with your business objectives.",
    Link: "/Translator/Services/Management ",
  },

  {
    imgSrc: "/transcription.png",
    imgAlt: "Transcription Service",
    title: "Transcription",
    description:
      "Enhance your content with our accurate transcription services. Capture every word from meetings, interviews, and lectures with precision. Improve accessibility and make your content searchable.",
    Link: "/Translator/Services/Transcription",
  },
  {
    imgSrc: "/ai.png",
    imgAlt: "Post Editing Service",
    title: "Post Editing",
    description: `
MTPE Editor

Join me on a journey to transform your language with my MTPE (Machine Translation Post-Editing) editing services. As a linguistic alchemist, I take the raw materials of machine-generated translations and imbue them with the power of human creativity. Witness the magic of technology and human expertise coming together to create linguistic works of art that will capture the hearts and minds of people worldwide. Let's shape the future of communication together!`,
    Link: "/Translator/Services/PE",
  },
  {
    imgSrc: "/translating.png",
    imgAlt: "Proofreading Service",
    title: "Proofreading",
    description:
      "Embark on a linguistic journey of perfection with my extraordinary Linguistic Quality Assurance services. Harnessing the artistry of language, I weave a tapestry of flawlessness, polishing every word and nuance to captivate your audience. From linguistic finesse to cultural resonance, I breathe life into your content, crafting a symphony of linguistic brilliance. Elevate your brand's voice and leave an indelible mark with my unrivalled linguistic mastery.",
    Link: "/Translator/Services/Proofreading",
  },
  {
    imgSrc: "/subtitles.png",
    imgAlt: "Subtitling Service",
    title: "Subtitling",
    description: `Unleash the full potential of your videos with my creative expertise in video subtitling service. I seamlessly bridge the language gap with my Turkish, English, and Arabic fluency, offering accurate and captivating translations in both directions. From English to Arabic, Turkish to Arabic, and beyond, I ensure your videos resonate with diverse audiences, captivating hearts and minds across cultures. Let's bring your visuals to life and connect the world through powerful storytelling.`,
    Link: "/Translator/Services/Subtitling",
  },
];

export const projects = [
  {
    category: "Translation",
    items: [
      {
        title: "Project Title 1",
        description:
          "A project leveraging AI and machine learning for real-time translation of large documents, ensuring high accuracy and context preservation.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["AI", "Machine Learning", "Translation Memory"],
      },
      {
        title: "Project Title 2",
        description:
          "An innovative project focused on translating complex technical manuals using specialized terminology databases and glossaries.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Terminology Database", "Glossary Management", "CAT Tools"],
      },
      {
        title: "Project Title 3",
        description:
          "A comprehensive translation project for e-commerce platforms, involving product descriptions, user reviews, and UI elements.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "E-commerce Platforms",
          "Localization",
          "Content Management System",
        ],
      },
      {
        title: "Project Title 4",
        description:
          "A project focusing on translating legal documents with precision, utilizing OCR technology and legal dictionaries.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "OCR Technology",
          "Legal Dictionaries",
          "Secure File Transfer",
        ],
      },
      {
        title: "Project Title 5",
        description:
          "A creative translation project for marketing campaigns, ensuring cultural relevance and engagement across different regions.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Marketing Tools", "Cultural Adaptation", "SEO"],
      },
      {
        title: "Project Title 6",
        description:
          "A localization project for mobile applications, focusing on user interface and user experience design in multiple languages.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Localization Platform",
          "UI/UX Design",
          "Mobile Development",
        ],
      },
    ],
  },
  {
    category: "Management",
    items: [
      {
        title: "Project Title 1",
        description:
          "Managing a large-scale multilingual project with agile methodologies and real-time collaboration tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Agile Methodologies",
          "Collaboration Tools",
          "Project Management Software",
        ],
      },
      {
        title: "Project Title 2",
        description:
          "Coordinating a global team for a high-profile translation project, using advanced scheduling and resource allocation techniques.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Resource Allocation",
          "Scheduling Tools",
          "Global Team Coordination",
        ],
      },
      {
        title: "Project Title 3",
        description:
          "Overseeing a complex project with multiple stakeholders, ensuring seamless communication and progress tracking.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Communication Platforms",
          "Progress Tracking",
          "Stakeholder Management",
        ],
      },
      {
        title: "Project Title 4",
        description:
          "Implementing project management best practices for a series of translation and localization projects, ensuring on-time delivery.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Best Practices", "Risk Management", "Quality Assurance"],
      },
      {
        title: "Project Title 5",
        description:
          "Leading a project to localize educational content for various regions, using specialized tools for educational material management.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Educational Tools", "Content Management", "Localization"],
      },
      {
        title: "Project Title 6",
        description:
          "Managing a project involving the translation and localization of multimedia content, ensuring high-quality audio and video synchronization.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Multimedia Management",
          "Audio/Video Synchronization",
          "Quality Control",
        ],
      },
    ],
  },
  {
    category: "Transcription",
    items: [
      {
        title: "Project Title 1",
        description:
          "Transcribing interviews and speeches with high accuracy, using advanced speech-to-text software.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Speech-to-Text Software",
          "Audio Analysis",
          "Transcription Tools",
        ],
      },
      {
        title: "Project Title 2",
        description:
          "A project focused on transcribing legal proceedings, ensuring precision and adherence to legal terminology.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Legal Transcription",
          "Terminology Management",
          "Secure Storage",
        ],
      },
      {
        title: "Project Title 3",
        description:
          "Transcribing educational videos for online learning platforms, integrating with captioning tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Captioning Tools",
          "Educational Platforms",
          "Video Integration",
        ],
      },
      {
        title: "Project Title 4",
        description:
          "Providing transcription services for multilingual conference recordings, using AI-based language detection.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Language Detection",
          "Conference Tools",
          "AI-based Transcription",
        ],
      },
      {
        title: "Project Title 5",
        description:
          "Transcribing market research focus groups, utilizing specialized tools for industry-specific terminology.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Market Research Tools",
          "Industry Terminology",
          "Transcription Management",
        ],
      },
      {
        title: "Project Title 6",
        description:
          "A project aimed at transcribing medical dictations with high precision, using medical transcription software.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Medical Transcription Software",
          "Dictation Tools",
          "Terminology Management",
        ],
      },
    ],
  },
  {
    category: "PE",
    items: [
      {
        title: "Project Title 1",
        description:
          "Post-editing machine-translated content for accuracy and fluency, using advanced linguistic tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Linguistic Tools", "MT Post-Editing", "Quality Assurance"],
      },
      {
        title: "Project Title 2",
        description:
          "A project focused on enhancing the quality of translated legal documents, ensuring adherence to legal standards.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Legal Standards", "Quality Control", "MT Enhancement"],
      },
      {
        title: "Project Title 3",
        description:
          "Post-editing marketing materials translated by AI, ensuring cultural relevance and persuasive language.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Marketing Tools",
          "Cultural Adaptation",
          "Language Enhancement",
        ],
      },
      {
        title: "Project Title 4",
        description:
          "Enhancing the readability and coherence of translated educational content, using specialized educational tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Educational Tools",
          "Readability Enhancement",
          "Content Coherence",
        ],
      },
      {
        title: "Project Title 5",
        description:
          "A project aimed at improving the fluency and accuracy of translated medical documents, using medical post-editing tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Medical Tools", "Fluency Enhancement", "Accuracy Control"],
      },
      {
        title: "Project Title 6",
        description:
          "Post-editing translated technical manuals, ensuring precision and consistency in terminology.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Technical Tools",
          "Terminology Management",
          "Consistency Control",
        ],
      },
    ],
  },
  {
    category: "Proofreading",
    items: [
      {
        title: "Project Title 1",
        description:
          "Proofreading legal documents for accuracy and compliance with legal standards, using advanced proofreading tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Proofreading Tools", "Legal Standards", "Accuracy Control"],
      },
      {
        title: "Project Title 2",
        description:
          "A project focused on proofreading marketing content, ensuring persuasive and engaging language.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Marketing Tools",
          "Engagement Enhancement",
          "Language Control",
        ],
      },
      {
        title: "Project Title 3",
        description:
          "Proofreading educational materials for clarity and coherence, using specialized educational tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Educational Tools",
          "Clarity Enhancement",
          "Coherence Control",
        ],
      },
      {
        title: "Project Title 4",
        description:
          "Ensuring the precision and fluency of translated medical documents, using medical proofreading tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Medical Tools", "Fluency Control", "Precision Enhancement"],
      },
      {
        title: "Project Title 5",
        description:
          "Proofreading technical manuals for consistency and accuracy, using advanced technical proofreading tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Technical Tools",
          "Consistency Control",
          "Accuracy Enhancement",
        ],
      },
      {
        title: "Project Title 6",
        description:
          "A project aimed at proofreading multimedia content captions for readability and synchronization.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Multimedia Tools",
          "Caption Synchronization",
          "Readability Enhancement",
        ],
      },
    ],
  },
  {
    category: "Subtitling",
    items: [
      {
        title: "Project Title 1",
        description:
          "Subtitling a series of educational videos, ensuring synchronization and readability, using specialized subtitling software.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Subtitling Software",
          "Educational Tools",
          "Synchronization",
        ],
      },
      {
        title: "Project Title 2",
        description:
          "Creating subtitles for a documentary series, focusing on accuracy and cultural relevance.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "Documentary Tools",
          "Cultural Adaptation",
          "Accuracy Control",
        ],
      },
      {
        title: "Project Title 3",
        description:
          "Subtitling multilingual conference recordings, using AI-based language detection and synchronization tools.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Language Detection", "AI Tools", "Conference Subtitling"],
      },
      {
        title: "Project Title 4",
        description:
          "A project focused on subtitling animated films, ensuring timing accuracy and viewer engagement.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Animation Tools", "Timing Control", "Viewer Engagement"],
      },
      {
        title: "Project Title 5",
        description:
          "Subtitling e-learning courses, integrating with LMS platforms to enhance learning experience.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: [
          "LMS Integration",
          "E-learning Tools",
          "Subtitling Software",
        ],
      },
      {
        title: "Project Title 6",
        description:
          "Creating subtitles for marketing videos, focusing on brand messaging and viewer retention.",
        imageUrl: "https://placehold.co/600x400",
        usedTech: ["Marketing Tools", "Brand Messaging", "Viewer Retention"],
      },
    ],
  },
];

export const serviceNames = {
  Translation: "Translation",
  Proofreading: "Proofreading",
  Management: "Project Management",
  Transcription: "Transcription",
  Subtitling: "Subtitling",
  PE: "Post Editing",
};

export const Sliderprojects = [
  {
    name: "Al-Ahli Saudi FC",
    photo: "/projects/Alahli from Arabic to English.png", // Replace with actual image path or data
  },
  {
    name: "Dicerna Phyox",
    photo: "/projects/Dicerna Phyox, medical.png",
  },
  {
    name: "Dina Farms",
    photo: "/projects/Dina Farms.png",
  },
  {
    name: "HSBC",
    photo: "/projects/HSCB.png",
  },
  {
    name: "200k MTPE Project files",
    photo: "/projects/Screenshot_2.png",
  },
  {
    name: "Series and Movies Translated From Turkish to Arabic or English",
    photo: "/projects/Series and Movies I translated from Turkish.png",
  },
  {
    name: "Turkish Series Translated to English or Arabic",
    photo: "/projects/Turkish series translated.png",
  },
  {
    name: "Turkish to Arabic Empsan",
    photo: "/projects/Turkish to Arabic Empsan.png",
  },
];

export const backendSkills = [
  {
    text: "Node",
    image: "/devSVG/node-svgrepo-com.svg",
    alt: "node",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Prisma",
    image: "/devSVG/prisma-svgrepo-com.svg",
    alt: "prisma",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Express",
    image: "/devSVG/express-svgrepo-com.svg",
    alt: "express",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "MongoDB",
    image: "/devSVG/mongo-svgrepo-com.svg",
    alt: "mongodb",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Strapi",
    image: "/devSVG/strapi-svgrepo-com.svg",
    alt: "Strapi",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
];

export const frontendSkills = [
  {
    text: "React",
    image: "/devSVG/react-javascript-js-framework-facebook-svgrepo-com.svg",
    alt: "react",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Vite",
    image: "/devSVG/vite-svgrepo-com.svg",
    alt: "vite",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "NextJS",
    image: "/devSVG/nextjs-svgrepo-com.svg",
    alt: "nextjs",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Typescript",
    image: "/devSVG/typescript-svgrepo-com.svg",
    alt: "typescript",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Bootstrap",
    image: "/devSVG/bootstrap-svgrepo-com.svg",
    alt: "bootstrap",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },

  {
    text: "Javascript",
    image: "/devSVG/javascript-svgrepo-com.svg",
    alt: "javascript",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Typescript",
    image: "/devSVG/react-javascript-js-framework-facebook-svgrepo-com.svg",
    alt: "typescript",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "HTML",
    image: "/devSVG/html-5-svgrepo-com.svg",
    alt: "html",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Tailwind CSS",
    image: "/devSVG/tailwind-svgrepo-com.svg",
    alt: "tailwindcss",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "CSS",
    image: "/devSVG/css-3-svgrepo-com.svg",
    alt: "css",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Material-UI",
    image: "/devSVG/material-ui-svgrepo-com.svg",
    alt: "Material-UI",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Sass",
    image: "/devSVG/sass-svgrepo-com.svg",
    alt: "Sass",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
];

export const tools = [
  {
    text: "VS Code",
    image: "/devSVG/vs-code-svgrepo-com.svg",
    alt: "vscode",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Github",
    image: "/devSVG/github-142-svgrepo-com.svg",
    alt: "github",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "NPM",
    image: "/devSVG/npm-svgrepo-com.svg",
    alt: "npm",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },

  {
    text: "Wordpress",
    image: "/devSVG/wordpress-svgrepo-com.svg",
    alt: "wordpress",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
];

export const Devprojects = [
  {
    title: "Project 1",
    previewLink: "https://example.com/preview1",
    repoLink: "https://github.com/username/repo1",
    description:
      "Description of Project 1. This project involves building a responsive web application using React and Tailwind CSS.",
    photo: "/fetih.jpg",
    category: "React",
  },
  {
    title: "Project 2",
    previewLink: "https://example.com/preview2",
    repoLink: "https://github.com/username/repo2",
    description:
      "Description of Project 2. This project focuses on creating a dynamic e-commerce platform with Node.js and MongoDB.",
    photo: "/fetih.jpg",
    category: "Nextjs",
  },
  {
    title: "Project 3",
    previewLink: "https://example.com/preview3",
    repoLink: "https://github.com/username/repo3",
    description:
      "Description of Project 3. A real-time chat application built with Next.js and Firebase, featuring user authentication and messaging.",
    photo: "/fetih.jpg",
    category: "NE",
  },
  {
    title: "Project 4",
    previewLink: "https://example.com/preview4",
    repoLink: "https://github.com/username/repo4",
    description:
      "Description of Project 4. A portfolio website developed using Gatsby and GraphQL.",
    photo: "/fetih.jpg",
    category: "React",
  },
  {
    title: "Project 5",
    previewLink: "https://example.com/preview5",
    repoLink: "https://github.com/username/repo5",
    description:
      "Description of Project 5. An interactive data visualization dashboard built with D3.js.",
    photo: "/fetih.jpg",
    category: "Nextjs",
  },
  {
    title: "Project 6",
    previewLink: "https://example.com/preview6",
    repoLink: "https://github.com/username/repo6",
    description:
      "Description of Project 6. A blogging platform developed with WordPress and customized themes.",
    photo: "/fetih.jpg",
    category: "NE",
  },
  {
    title: "Project 7",
    previewLink: "https://example.com/preview7",
    repoLink: "https://github.com/username/repo7",
    description:
      "Description of Project 7. A single-page application created with Vue.js and Vuex.",
    photo: "/fetih.jpg",
    category: "Nextjs",
  },
  {
    title: "Project 8",
    previewLink: "https://example.com/preview8",
    repoLink: "https://github.com/username/repo8",
    description:
      "Description of Project 8. An e-commerce site built with Shopify and Liquid templates.",
    photo: "/fetih.jpg",
    category: "React",
  },

];
