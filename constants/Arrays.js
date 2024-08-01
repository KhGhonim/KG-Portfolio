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
