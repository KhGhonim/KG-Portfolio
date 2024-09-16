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
        title: "Arabic Movies and Series Localization",
        description:
          "Expertly localized Arabic movies and series, ensuring cultural relevance, maintaining original context, and enhancing viewer engagement through high-quality subtitling and dubbing.",
        imageUrl: [
          "/Translation Projects/Arabic Movies and Series Localization 1.png",
          "/Translation Projects/Arabic Movies and Series Localization.png",
          "/Translation Projects/Arabic Movies and Series Localization 3.png",
        ],
        usedTech: ["Localization", "Cultural Adaptation", "Translation Memory"],
      },
      {
        title: "Building CALP Markets E-Learning Courses",
        description:
          "Developed and translated comprehensive e-learning courses for CALP markets, incorporating interactive elements and multimedia to facilitate effective learning experiences for diverse audiences.",
        imageUrl: [
          "/Translation Projects/Building CALP Markets E-Learning Courses.png",
          "/Translation Projects/Building CALP Markets E-Learning Courses 2.png",
          "/Translation Projects/Building CALP Markets E-Learning Courses 3.png",
          "/Translation Projects/Building CALP Markets E-Learning Courses 4.png",
          "/Translation Projects/Building CALP Markets E-Learning Courses 5.png",
        ],
        usedTech: [
          "E-Learning",
          "Interactive Content",
          "Translation",
          "Multimedia Integration",
          "SCORM",
        ],
      },
      {
        title: "Food KFC",
        description:
          "Translated and localized marketing materials for KFC, ensuring the brand message is consistent and culturally resonant across different regions, while adhering to local regulatory requirements.",
        imageUrl: [
          "/Translation Projects/Food KFC.png",
          "/Translation Projects/Food KFC 2.png",
          "/Translation Projects/Food KFC 3.png",
        ],
        usedTech: [
          "Marketing Translation",
          "Brand Localization",
          "Cultural Adaptation",
          "Regulatory Compliance",
          "Transcreation",
        ],
      },
      {
        title: "Goat Games Localization",
        description:
          "Localized popular video games from English to Arabic, preserving gaming terminology, enhancing player experience, and ensuring seamless integration of translated content within the game interface.",
        imageUrl: [
          "/Translation Projects/Goat Games-- EN-AR.png",
          "/Translation Projects/Goat Games-- EN-AR - 2.png",
          "/Translation Projects/Goat Games-- EN-AR 3.png",
        ],
        usedTech: [
          "Game Localization",
          "Terminology Management",
          "Player Experience",
          "UI/UX Translation",
          "In-Game Text Integration",
        ],
      },
      {
        title: "IMDB Movies Translation",
        description:
          "Translated movie descriptions and reviews for IMDB, focusing on accuracy, engaging content delivery, and maintaining the tone and style of the original material to attract a global audience.",
        imageUrl: [
          "/Translation Projects/IMBD Movies Translation.png",
          "/Translation Projects/IMBD Movies Translation 1.png",
          "/Translation Projects/IMBD Movies Translation 2.png",
        ],
        usedTech: [
          "Translation",
          "Content Localization",
          "Cultural Adaptation",
          "SEO",
          "Content Management",
        ],
      },
      {
        title: "Nestlé Product Localization",
        description:
          "Translated and localized content for Nestlé’s product descriptions and marketing campaigns, ensuring clarity, cultural appropriateness, and regulatory compliance in various target markets.",
        imageUrl: [
          "/Translation Projects/Nestlé.png",
          "/Translation Projects/Nestlé 1.png",
          "/Translation Projects/Nestlé 2.png",
          "/Translation Projects/Nestlé 3.png",
        ],
        usedTech: [
          "Content Localization",
          "Regulatory Compliance",
          "Marketing Translation",
          "Product Description",
          "Cultural Adaptation",
        ],
      },
      {
        title: "Playdemic Game Localization",
        description:
          "Localized Playdemic games, focusing on user interface translation and maintaining game playability, while delivering an immersive experience for players in different linguistic regions.",
        imageUrl: [
          "/Translation Projects/Playdemic Game.png",
          "/Translation Projects/Playdemic Game 1.png",
        ],
        usedTech: [
          "Game Localization",
          "UI Translation",
          "Playability",
          "Linguistic Testing",
          "Localization Quality Assurance",
        ],
      },
      {
        title: "TV Series Localization",
        description:
          "Localized a wide range of TV series, ensuring accurate subtitle translation and synchronization, while preserving the original tone, humor, and cultural references for global audiences.",
        imageUrl: [
          "/Translation Projects/Series Localizations.png",
          "/Translation Projects/Series Localizations 3.png",
          "/Translation Projects/Series Localizations 2.png",
          "/Translation Projects/Series Localizations 1.png",
        ],
        usedTech: [
          "Subtitle Translation",
          "Synchronization",
          "Localization",
          "Cultural Adaptation",
          "Quality Control",
        ],
      },
      {
        title: "Song Names and Lyrics Translation",
        description:
          "Translated song names and lyrics, preserving poetic elements, cultural nuances, and musical rhythm to deliver authentic and engaging experiences for listeners in different languages.",
        imageUrl: [
          "/Translation Projects/Song Names, lyrics and Singer name.png",
          "/Translation Projects/Song Names, lyrics and Singer name 3.png",
          "/Translation Projects/Song Names, lyrics and Singer name 2.png",
          "/Translation Projects/Song Names, lyrics and Singer name 1.png",
        ],
        usedTech: [
          "Translation",
          "Cultural Adaptation",
          "Lyric Localization",
          "Poetic Translation",
          "Music Adaptation",
        ],
      },
    ],
  },
  {
    category: "Management",
    items: [
      {
        title: "Global Marketing Campaign Translation",
        description:
          "Coordinated a global team for a high-profile translation project, utilizing advanced scheduling and resource allocation techniques to deliver culturally relevant marketing campaigns across multiple regions.",
        imageUrl: ["/Translation Projects/Management 1.webp"],
        usedTech: [
          "Resource Allocation",
          "Scheduling Tools",
          "Global Team Coordination",
          "Marketing Translation",
          "Cultural Adaptation",
          "Transcreation",
        ],
      },
      {
        title: "Technical Manual Localization",
        description:
          "Overseeing a complex project with multiple stakeholders, ensuring seamless communication and progress tracking while translating and localizing intricate technical manuals.",
        imageUrl: ["/Translation Projects/Management 2.jpg"],
        usedTech: [
          "Communication Platforms",
          "Progress Tracking",
          "Stakeholder Management",
          "Technical Translation",
          "Glossary Management",
          "CAT Tools",
        ],
      },
      {
        title: "Legal Document Translation Project",
        description:
          "Implementing project management best practices for a series of translation and localization projects, ensuring on-time delivery and high accuracy in translating legal documents.",
        imageUrl: ["/Translation Projects/Management 4.jpg"],
        usedTech: [
          "Best Practices",
          "Risk Management",
          "Quality Assurance",
          "Legal Translation",
          "OCR Technology",
          "Secure File Transfer",
        ],
      },
      {
        title: "Educational Content Localization",
        description:
          "Leading a project to localize educational content for various regions, using specialized tools for educational material management and ensuring effective learning experiences.",
        imageUrl: ["/Translation Projects/Management 5.jpg"],
        usedTech: [
          "Educational Tools",
          "Content Management",
          "Localization",
          "Interactive Content",
          "SCORM",
          "Translation",
        ],
      },
      {
        title: "Multimedia Content Translation",
        description:
          "Managing a project involving the translation and localization of multimedia content, ensuring high-quality audio and video synchronization for a seamless user experience.",
        imageUrl: ["/Translation Projects/Management 6.jpeg"],
        usedTech: [
          "Multimedia Management",
          "Audio/Video Synchronization",
          "Quality Control",
          "Translation",
          "Localization",
          "Cultural Adaptation",
        ],
      },
      {
        title: "Healthcare Document Translation",
        description:
          "Coordinating the translation of healthcare documents, leveraging specialized medical terminology databases to ensure accuracy and compliance with healthcare standards.",
        imageUrl: ["/Translation Projects/Management 8.jpg"],
        usedTech: [
          "Medical Terminology",
          "Compliance Tools",
          "Healthcare Translation",
          "Terminology Database",
          "Glossary Management",
          "CAT Tools",
        ],
      },
      {
        title: "Software Localization Project",
        description:
          "Leading the localization of software applications, focusing on user interface translation and ensuring a seamless user experience across different linguistic regions.",
        imageUrl: ["/Translation Projects/Management 9.webp"],
        usedTech: [
          "Localization Platform",
          "UI/UX Design",
          "Software Development",
          "Translation Memory",
          "Linguistic Testing",
          "Quality Assurance",
        ],
      },
      {
        title: "E-commerce Platform Translation",
        description:
          "Managing the translation of e-commerce platforms, including product descriptions, user reviews, and UI elements, to enhance user engagement and global reach.",
        imageUrl: ["/Translation Projects/Management 7.jpg"],
        usedTech: [
          "E-commerce Platforms",
          "Localization",
          "Content Management System",
          "SEO",
          "Translation",
          "Cultural Adaptation",
        ],
      },
      {
        title: "Entertainment Media Localization",
        description:
          "Overseeing the localization of entertainment media, ensuring that subtitles and dubbing are accurately translated and synchronized, while maintaining the original tone and humor.",
        imageUrl: ["/Translation Projects/Management 3.jpg"],
        usedTech: [
          "Subtitle Translation",
          "Dubbing",
          "Synchronization",
          "Localization",
          "Cultural Adaptation",
          "Quality Control",
        ],
      },
    ],
  },
  {
    category: "Transcription",
    items: [
      {
        title: "Corporate Meeting Transcription",
        description:
          "Accurately transcribed high-profile corporate meetings, utilizing advanced speech recognition tools and ensuring confidentiality and precise time-coding.",
        imageUrl: ["/Translation Projects/Transcription 1.jpg"],
        usedTech: [
          "Speech Recognition",
          "Time-Coding",
          "Confidentiality Protocols",
          "Audio Enhancement",
          "Transcription Software",
        ],
      },
      {
        title: "Medical Conference Transcription",
        description:
          "Transcribed medical conferences, ensuring accurate terminology and adhering to strict confidentiality standards to support healthcare professionals.",
        imageUrl: ["/Translation Projects/Transcription 2.jpg"],
        usedTech: [
          "Medical Terminology",
          "Confidentiality Protocols",
          "Transcription Software",
          "Audio Enhancement",
          "Time-Coding",
        ],
      },
      {
        title: "Legal Deposition Transcription",
        description:
          "Provided detailed transcription for legal depositions, utilizing specialized legal transcription tools and ensuring high accuracy and compliance with legal standards.",
        imageUrl: ["/Translation Projects/Transcription 3.jpg"],
        usedTech: [
          "Legal Transcription Tools",
          "Compliance Tools",
          "Audio Enhancement",
          "Time-Coding",
          "Confidentiality Protocols",
        ],
      },
      {
        title: "Podcast Transcription",
        description:
          "Transcribed podcast episodes, focusing on accurate representation of spoken content and ensuring proper formatting for publication and accessibility.",
        imageUrl: ["/Translation Projects/Transcription 4.webp"],
        usedTech: [
          "Transcription Software",
          "Audio Enhancement",
          "Formatting Tools",
          "Time-Coding",
          "Content Management Systems",
        ],
      },
      {
        title: "Academic Lecture Transcription",
        description:
          "Accurately transcribed academic lectures, employing advanced transcription software and ensuring precise terminology for various academic fields.",
        imageUrl: ["/Translation Projects/Transcription 5.webp"],
        usedTech: [
          "Transcription Software",
          "Terminology Management",
          "Time-Coding",
          "Audio Enhancement",
          "Content Management Systems",
        ],
      },
      {
        title: "Media Interview Transcription",
        description:
          "Transcribed media interviews with a focus on capturing nuanced dialogue and ensuring high-quality audio processing for clear and accurate transcription.",
        imageUrl: ["/Translation Projects/Transcription 6.webp"],
        usedTech: [
          "Audio Enhancement",
          "Transcription Software",
          "Time-Coding",
          "Dialogue Management",
          "Content Management Systems",
        ],
      },
      {
        title: "Focus Group Transcription",
        description:
          "Provided transcription services for focus groups, ensuring accurate representation of multiple speakers and clear identification of individual contributions.",
        imageUrl: ["/Translation Projects/Transcription 7.jpg"],
        usedTech: [
          "Multi-Speaker Identification",
          "Transcription Software",
          "Audio Enhancement",
          "Time-Coding",
          "Content Management Systems",
        ],
      },
      {
        title: "Documentary Footage Transcription",
        description:
          "Transcribed documentary footage, ensuring accurate and contextual representation of spoken content to aid in the editing and production process.",
        imageUrl: ["/Translation Projects/Transcription 8.jpg"],
        usedTech: [
          "Transcription Software",
          "Time-Coding",
          "Audio Enhancement",
          "Content Management Systems",
          "Contextual Analysis",
        ],
      },
      {
        title: "Court Hearing Transcription",
        description:
          "Transcribed court hearings with a focus on maintaining accuracy and adherence to legal standards, utilizing specialized transcription tools for legal proceedings.",
        imageUrl: ["/Translation Projects/Transcription 9.jpg"],
        usedTech: [
          "Legal Transcription Tools",
          "Compliance Tools",
          "Time-Coding",
          "Audio Enhancement",
          "Confidentiality Protocols",
        ],
      },
    ],
  },
  {
    category: "PE",
    items: [
      {
        title: "AI-Generated Text Post-Editing",
        description:
          "Refined AI-generated texts for clarity, coherence, and accuracy, utilizing advanced language models and ensuring the final output met high-quality standards.",
        imageUrl: ["/Translation Projects/PE.png"],
        usedTech: [
          "AI Language Models",
          "Quality Assurance Tools",
          "Grammar Checkers",
          "Content Management Systems",
          "Editing Software",
        ],
      },
      {
        title: "Technical Manual Post-Editing",
        description:
          "Edited technical manuals to ensure precise terminology and adherence to style guides, enhancing readability and technical accuracy for end-users.",
        imageUrl: ["/Translation Projects/PE 2.jpeg"],
        usedTech: [
          "Terminology Management",
          "Style Guides",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Marketing Content Post-Editing",
        description:
          "Polished marketing content to enhance engagement and cultural relevance, ensuring the messaging was compelling and aligned with brand guidelines.",
        imageUrl: ["/Translation Projects/PE 3.jpeg"],
        usedTech: [
          "Content Management Systems",
          "Brand Guidelines",
          "Editing Software",
          "SEO Tools",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "E-Learning Course Post-Editing",
        description:
          "Reviewed and edited e-learning materials to improve instructional clarity and effectiveness, ensuring the content was pedagogically sound and engaging.",
        imageUrl: ["/Translation Projects/PE 4.jpeg"],
        usedTech: [
          "Educational Tools",
          "Content Management Systems",
          "Editing Software",
          "Quality Assurance Tools",
          "Interactive Content",
        ],
      },
      {
        title: "Legal Document Post-Editing",
        description:
          "Edited legal documents for accuracy and compliance, ensuring all legal terminology was correct and the documents adhered to regulatory standards.",
        imageUrl: ["/Translation Projects/PE 5.png"],
        usedTech: [
          "Legal Dictionaries",
          "Compliance Tools",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Medical Research Post-Editing",
        description:
          "Enhanced medical research papers for clarity and technical accuracy, ensuring the use of correct medical terminology and adherence to publication standards.",
        imageUrl: ["/Translation Projects/PE 6.jpg"],
        usedTech: [
          "Medical Terminology",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
          "Publication Standards",
        ],
      },
      {
        title: "Website Content Post-Editing",
        description:
          "Edited website content to improve readability and SEO, ensuring that all text was optimized for search engines and provided a seamless user experience.",
        imageUrl: ["/Translation Projects/PE 7.png"],
        usedTech: [
          "SEO Tools",
          "Content Management Systems",
          "Editing Software",
          "Quality Assurance Tools",
          "Web Analytics",
        ],
      },
      {
        title: "Financial Report Post-Editing",
        description:
          "Refined financial reports for clarity and precision, ensuring that all financial data was accurately presented and complied with reporting standards.",
        imageUrl: ["/Translation Projects/PE 8.jpg"],
        usedTech: [
          "Financial Analysis Tools",
          "Compliance Tools",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Academic Paper Post-Editing",
        description:
          "Reviewed and edited academic papers for coherence and adherence to scholarly standards, ensuring the proper use of citations and academic style.",
        imageUrl: ["/Translation Projects/PE 9.png"],
        usedTech: [
          "Academic Databases",
          "Citation Management Tools",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "News Article Post-Editing",
        description:
          "Reviewed and edited news articles for clarity and adherence to journal standards, ensuring the proper use of journalistic style.",
        imageUrl: ["/Translation Projects/PE 10.jpeg"],
        usedTech: [
          "Academic Databases",
          "Citation Management Tools",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
        ],
      },
    ],
  },
  {
    category: "Proofreading",
    items: [
      {
        title: "Medical Journal Review",
        description:
          "Reviewed and proofread submissions for a leading medical journal, ensuring terminological accuracy, clarity, and adherence to stringent editorial standards.",
        imageUrl: ["/Translation Projects/Proofreading 1.png"],

        usedTech: [
          "Medical Terminology Tools",
          "Plagiarism Detection",
          "Editing Software",
          "Reference Management",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Financial Statement Proofreading",
        description:
          "Proofread financial statements for major corporations, ensuring precision, compliance with regulatory standards, and clarity in financial reporting.",
        imageUrl: ["/Translation Projects/Proofreading 2.webp"],

        usedTech: [
          "Financial Analysis Tools",
          "Compliance Tools",
          "Editing Software",
          "Content Management Systems",
          "Grammar Checkers",
        ],
      },
      {
        title: "Educational Textbook Review",
        description:
          "Reviewed and proofread educational textbooks for various subjects, ensuring pedagogical soundness, accuracy, and engagement for students.",
        imageUrl: ["/Translation Projects/Proofreading 3.png"],

        usedTech: [
          "Educational Tools",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
          "Pedagogical Standards",
        ],
      },
      {
        title: "Marketing Material Proofreading",
        description:
          "Proofread marketing materials, including brochures and online content, ensuring compelling and error-free messaging aligned with brand guidelines.",
        imageUrl: ["/Translation Projects/Proofreading 4.png"],

        usedTech: [
          "Marketing Tools",
          "SEO Tools",
          "Editing Software",
          "Content Management Systems",
          "Grammar Checkers",
        ],
      },
      {
        title: "Legal Document Review",
        description:
          "Reviewed and proofread legal documents, contracts, and agreements, ensuring terminological accuracy, compliance, and clarity for legal proceedings.",
        imageUrl: ["/Translation Projects/Proofreading 6.jpg"],

        usedTech: [
          "Legal Dictionaries",
          "Compliance Tools",
          "Editing Software",
          "Confidentiality Protocols",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Technical Manual Proofreading",
        description:
          "Proofread technical manuals for precision and clarity, ensuring accurate use of technical terminology and adherence to user-friendly guidelines.",
        imageUrl: ["/Translation Projects/Proofreading 7.jpg"],

        usedTech: [
          "Technical Terminology Management",
          "Editing Software",
          "Content Management Systems",
          "Quality Assurance Tools",
          "User Experience Standards",
        ],
      },
      {
        title: "Press Release Review",
        description:
          "Reviewed and proofread press releases for global brands, ensuring the accuracy of information, consistency, and impactful messaging.",
        imageUrl: ["/Translation Projects/Proofreading 8.jpeg"],

        usedTech: [
          "PR Tools",
          "Editing Software",
          "Content Management Systems",
          "Grammar Checkers",
          "Quality Assurance Tools",
        ],
      },
      {
        title: "Website Content Proofreading",
        description:
          "Proofread website content for major e-commerce platforms, ensuring error-free, engaging, and SEO-optimized text to enhance user experience.",
        imageUrl: ["/Translation Projects/Proofreading 9.png"],

        usedTech: [
          "SEO Tools",
          "Editing Software",
          "Content Management Systems",
          "Grammar Checkers",
          "Web Analytics",
        ],
      },
      {
        title: "Scientific Research Paper Review",
        description:
          "Reviewed and proofread scientific research papers, ensuring clarity, proper formatting, and adherence to publication standards and scientific rigor.",
        imageUrl: ["/Translation Projects/Proofreading 10.png"],

        usedTech: [
          "Scientific Databases",
          "Reference Management Tools",
          "Editing Software",
          "Quality Assurance Tools",
          "Style Guides",
        ],
      },
      {
        title: "Subtitling Script Proofreading",
        description:
          "Proofread subtitles for films and TV shows, ensuring synchronization, accuracy, and cultural relevance to enhance viewer understanding and enjoyment.",
        imageUrl: ["/Translation Projects/Proofreading 11.jpg"],

        usedTech: [
          "Subtitling Software",
          "Editing Software",
          "Cultural Adaptation Tools",
          "Quality Assurance Tools",
          "Grammar Checkers",
        ],
      },
    ],
  },
  {
    category: "Subtitling",
    items: [
      {
        title: "Official Subtitler for Al-Ahli Saudi FC Season 2023-2024",
        description:
          "Subtitling matches and promotional content for Al-Ahli Saudi FC, ensuring accurate and timely subtitles for fans.",
        imageUrl: ["/Translation Projects/Subtitling 1.png"],

        usedTech: [
          " Subtitling Software",
          "Live Event Captioning",
          "Synchronization",
        ],
      },
      {
        title: "MBC Group Subtitler",
        description:
          "Creating subtitles for various MBC Group broadcasts, including news, entertainment, and drama, with a focus on clarity and cultural relevance.",
        imageUrl: ["/Translation Projects/Subtitling 2.webp"],

        usedTech: [
          " Subtitling Software",
          "Cultural Adaptation",
          "Clarity Control",
        ],
      },
      {
        title: "Disney+ and Netflix Subtitler",
        description:
          "Subtitling a range of content for Disney+ and Netflix, ensuring accurate translations and adherence to platform guidelines.",
        imageUrl: ["/Translation Projects/Subtitling 3.jpeg"],

        usedTech: [
          "Streaming Platform Tools",
          "Translation Accuracy",
          "Platform Compliance",
        ],
      },
      {
        title: "SBS News Subtitler",
        description:
          "Providing subtitles for SBS News broadcasts, focusing on real-time accuracy and timely delivery.",
        imageUrl: ["/Translation Projects/Subtitling 3.webp"],

        usedTech: [
          " Subtitling Software",
          "Real-time Captioning",
          "Accuracy Control",
        ],
      },
      {
        title: "Fox News Subtitler",
        description:
          "Subtitling Fox News segments, ensuring precision in live news delivery and adherence to broadcasting standards.",
        imageUrl: ["/Translation Projects/Subtitling 7.png"],

        usedTech: [
          " Subtitling Software",
          "Live Captioning",
          "Standard Compliance",
        ],
      },
      {
        title: "Türkiye Earthquake Subtitler for Pakistani Newsletter",
        description:
          "Subtitling content related to the Türkiye earthquake for a Pakistani newsletter, focusing on accurate translation and sensitivity to the subject matter.",
        imageUrl: ["/Translation Projects/Subtitling 5.jpeg"],

        usedTech: [
          "Subtitling Software",
          "Cultural Sensitivity",
          "Emergency Reporting",
        ],
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
    photo: "/projects/Alahli from Arabic to English.png",
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
    text: "Express",
    image: "/devSVG/express-svgrepo-com.svg",
    alt: "express",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "Socekt.IO",
    image: "/devSVG/Socekt.io.png",
    alt: "Socekt.io",
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
    text: "Supabase",
    image: "/devSVG/image-Photoroom.png",
    alt: "Supabase",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
  {
    text: "PostgreSQL",
    image: "/devSVG/PostgreSQL.png",
    alt: "PostgreSQL",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },

  {
    text: "Redis",
    image: "/devSVG/redis-svgrepo-com.svg",
    alt: "Redis",
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

  {
    text: "AWS",
    image: "/devSVG/aws-svgrepo-com.svg",
    alt: "AWS",
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
    text: "Javascript",
    image: "/devSVG/javascript-svgrepo-com.svg",
    alt: "javascript",
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
    text: "Bootstrap",
    image: "/devSVG/bootstrap-svgrepo-com.svg",
    alt: "bootstrap",
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
    text: "Git",
    image: "/devSVG/git-svgrepo-com.svg",
    alt: "Git",
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

  {
    text: "Jira",
    image: "/devSVG/jira-svgrepo-com.svg",
    alt: "Jira",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },

  {
    text: "Postman",
    image: "/devSVG/postman-icon-svgrepo-com.svg",
    alt: "Postman",
    additionalClasses:
      "group cursor-pointer flex justify-center items-center gap-5",
    imgClasses:
      "w-10 h-10 bg-[#222233] transition-all duration-700 ease-in-out group-hover:bg-[#1A1A27] rounded-full p-2",
  },
];

export const DemoHomeprojects = [
  {
    title: "Grocery Store",
    previewLink: "https://grocery-store-beta.vercel.app",
    repoLink: "https://github.com/username/repo1",
    description:
      "A responsive web application for shopping items using React and Tailwind CSS.",
    photo: "/devProjects/grocery store.png",
    category: "Nextjs",
  },
  {
    title: "NewsPaper",
    previewLink: "https://news-paper-ruby.vercel.app",
    repoLink: "https://github.com/username/repo2",
    description:
      "A responsive web application for reading news articles using Nextjs and Tailwind CSS and MongoDB.",
    photo: "/devProjects/download.png",
    category: "Nextjs",
  },
  {
    title: "E-commerce Site",
    previewLink: "https://e-commerce-kg.vercel.app/",
    repoLink: "https://github.com/LoDaBeY/E-commerce",
    description:
      "A responsive web application for selling products. Built with React, Material UI, and Firebase for data management.",
    photo: "/devProjects/E-commerce.png",
    category: "React",
  },
  {
    title: "Movie Sotre",
    previewLink: "https://movie-store-us3x.vercel.app",
    repoLink: "https://github.com/username/repo4",
    description:
      "A responsive web application for selling movies using React, Tailwind CSS, and Firebase for handling data.",
    photo: "/devProjects/Movie Store.png",
    category: "React",
  },
];

export const DevProjects = [
  {
    title: "Grocery Store",
    previewLink: "https://grocery-store-beta.vercel.app",
    repoLink: "https://github.com/LoDaBeY/Grocery-Store",
    description:
      "A responsive web application enabling users to shop for items by category and add them to their cart. Built with React and Tailwind CSS.",
    photo: "/devProjects/grocery store.png",
    category: "Next.js",
    tools: ["Next.js", "Next.js API", "Next Auth", "Tailwind CSS", "Redux"],
  },
  {
    title: "NewsPaper",
    previewLink: "https://news-paper-ruby.vercel.app",
    repoLink: "https://github.com/LoDaBeY/NewsPaper-Dashboard",
    description:
      "A responsive web application for reading global and user-specific news articles. Developed using Next.js, Tailwind CSS, and MongoDB for article tracking.",
    photo: "/devProjects/download.png",
    category: "Next.js",
    tools: ["Next.js", "Next.js API", "Next Auth", "Swiper", "Tailwind CSS"],
  },
  {
    title: "The Pyjama House",
    previewLink: "https://pijamahouse-e1870.web.app",
    repoLink: "https://github.com/LoDaBeY/pajamahouse",
    description:
      "A responsive web application for selling clothing items. Built with React, Material UI, and Firebase.",
    photo: "/devProjects/Pijama evi.png",
    category: "React",
    tools: [
      "React",
      "Node.js",
      "Express",
      "Swiper",
      "Material UI",
      "Firebase Auth",
      "Redux",
    ],
  },
  {
    title: "Movie Store",
    previewLink: "https://movie-store-us3x.vercel.app",
    repoLink: "https://github.com/LoDaBeY/Movie-Store",
    description:
      "A responsive web application for streaming movies. Developed using React, Tailwind CSS, and a REST API for data retrieval.",
    photo: "/devProjects/Movie Store.png",
    category: "React",
    tools: ["React", "Swiper", "Tailwind CSS", "Firebase Auth", "Redux"],
  },
  {
    title: "NusrEt Restaurant",
    previewLink: "https://nusret-resturant.vercel.app",
    repoLink: "https://github.com/LoDaBeY/Resturant",
    description:
      "A responsive web application for ordering food. Built with React, Tailwind CSS, and a custom REST API.",
    photo: "/devProjects/Resturant.png",
    category: "React",
    tools: ["React", "Swiper", "Node.js", "Express", "Material UI"],
  },
  {
    title: "Admin Dashboard For Blog",
    previewLink:
      "https://vercel.com/khaled-ghonims-projects/admin-dashboard-blog",
    repoLink: "https://github.com/LoDaBeY/Frontend-Admin-Dashboard-Blog-",
    description:
      "A responsive web application for managing blog posts. Built with React, Tailwind CSS, and MongoDB. The connection is established through a REST API with NewsPaper API.",
    photo: "/devProjects/Dashboard Admin for Blogs.png",
    category: "React",
    tools: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Firebase Auth",
      "Redux",
    ],
  },
  {
    title: "Admin Dashboard For Stats",
    previewLink: "https://dashboard-admin-khaled-ghonim.web.app",
    repoLink: "https://github.com/LoDaBeY/admin-dashboard",
    description:
      "A web application for managing administrative statistics. Developed using React, Material UI, and Firebase.",
    photo: "/devProjects/Dashboard admin stats.png",
    category: "React",
    tools: [
      "React",
      "Node.js",
      "Express",
      "Material UI",
      "Full Calendar",
      "Nivo",
      "Firebase Auth",
    ],
  },
  {
    title: "E-commerce Site",
    previewLink: "https://e-commerce-kg.vercel.app",
    repoLink: "https://github.com/LoDaBeY/E-commerce",
    description:
      "A responsive web application for selling products. Built with React, Material UI, and Firebase for data management.",
    photo: "/devProjects/E-commerce.png",
    category: "React",
    tools: ["React", "Strapi", "Material UI", "Redux"],
  },
  {
    title: "Car Hub",
    previewLink: "https://car-hub-wheat-sigma.vercel.app",
    repoLink: "https://github.com/LoDaBeY/car-hub",
    description:
      "A responsive web application for buying and selling cars. Developed using React, Tailwind CSS, and MongoDB.",
    photo: "/devProjects/car.png",
    category: "Next.js",
    tools: ["Next.js", "Next.js API", "Clark Auth", "Tailwind CSS"],
  },
  {
    title: "Real-Time Chat Application",
    previewLink: "https://chat-app-sooty-seven.vercel.app",
    repoLink: "https://github.com/LoDaBeY/ChatApp",
    description:
      "The application provides a seamless messaging experience with instant, bi-directional communication, making it ideal for real-time conversations.",
    photo: "/devProjects/Socekt.io.png",
    category: "React",
    tools: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS"],
  },
  {
    title: "ALPHAA - Final Soltuion For Loans",
    previewLink: "https://alphaa-final-soltuion-for-loans.vercel.app",
    repoLink: "https://github.com/LoDaBeY/ALPHAA---Final-Soltuion-For-Loans",
    description:
      "Loan management Website app. It is a replica of one of the largest loan companies in Australia and is fully functional. It was developed using React, Swiper, and Tailwind CSS.",
    photo: "/devProjects/ALPHAA---Final-Soltuion-For-Loans.png",
    category: "React",
    tools: ["React", "Swiper", "Tailwind CSS"],
  },
];
