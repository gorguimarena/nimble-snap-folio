import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.role': 'Développeur Full-Stack',
    'hero.description': 'Passionné par la création d\'expériences web exceptionnelles avec des technologies modernes. Je transforme les idées en solutions digitales innovantes.',
    'hero.download': 'Télécharger le CV',
    'hero.discover': 'En savoir plus',
    'hero.scroll': 'Découvrir',

    // About
    'about.title': 'À propos de moi',
    'about.description': 'Titulaire d\'une attestation de l\'ISEP de Diamniadio, je me forme actuellement à la Sonatel Academy où je développe des applications web et mobiles dans le cadre de projets pratiques. J\'ai également obtenu plusieurs certifications sur Coursera, renforçant mes compétences en développement et en technologies numériques. Durant mon parcours, j\'ai collaboré à des projets à l\'ISEP et je continue à construire des solutions concrètes en équipe et en autonomie à la Sonatel Academy.',

    // Skills
    'skills.title': 'Compétences',
    'skills.description': 'Langages, outils et concepts que je maîtrise pour créer des solutions performantes',
    'skills.languages': 'Langages',
    'skills.tools': 'Outils',
    'skills.concepts': 'Concepts',
    'skills.softSkills': 'Soft Skills',

    // Projects
    'projects.title': 'Projets Réalisés',
    'projects.description': 'Découvrez mes projets qui démontrent mes compétences en développement',
    'projects.student.title': 'Application de gestion des étudiants',
    'projects.student.description': 'Gestion des profils étudiants (filtrage, ajout, modification, suppression).',
    'projects.student.tech': 'PHP pur',
    'projects.todo.title': 'Application de gestion de tâches',
    'projects.todo.description': 'Ajout, suppression et sélection de tâches. Utilisation de localStorage et identifiants uniques. Interface dynamique avec createElement.',
    'projects.todo.tech': 'JavaScript Vanilla',
    'projects.messaging.title': 'Interface de messagerie',
    'projects.messaging.description': 'Création d\'une interface type messagerie avec sidebar, contacts, et discussions.',
    'projects.messaging.tech': 'En cours',

    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Vous avez un projet ou souhaitez collaborer ? N\'hésitez pas à me contacter !',
    'contact.phone': 'Téléphone 1',
    'contact.phoneLabel2': 'Téléphone 2',
    'contact.phone1': '77 706 54 68',
    'contact.phone2': '76 906 41 34',
    'contact.email': 'gorguimarena@gmail.com',
    'contact.emailLabel': 'Email',
    'contact.location': 'Khar Yalla, Dakar, Sénégal',
    'contact.locationLabel': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.messageSent': 'Message envoyé !',
    'contact.messageResponse': 'Je vous répondrai dans les plus brefs délais.',

    // About
    'about.stats.projects': 'Projets Réalisés',
    'about.stats.certifications': 'Certifications',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.skills': 'Compétences',
    'about.education.isep': 'ISEP Diamniadio',
    'about.education.isep_desc': 'Attestation obtenue en développement Back-End',
    'about.education.sonatel': 'Sonatel Academy',
    'about.education.sonatel_desc': 'Formation actuelle en développement Full-Stack',
    'about.experience.projects': 'Projets Pratiques',
    'about.experience.projects_desc': 'Développement d\'applications concrètes en équipe et en autonomie',
    'about.experience.teamwork': 'Travail d\'Équipe',
    'about.experience.teamwork_desc': 'Collaboration efficace et communication dans les projets',


    // Footer
    'footer.role': 'Développeur Full-Stack Passionné',
    'footer.rights': 'Tous droits réservés.',

    // Chatbot
    'chatbot.welcome': 'Salut ! Je suis l\'assistant virtuel de Gorgui. Je peux vous aider à en savoir plus sur son parcours, ses compétences et ses projets. Posez-moi une question !',
    'chatbot.education': 'Gorgui est titulaire d\'une attestation de l\'ISEP de Diamniadio et se forme actuellement à la Sonatel Academy en développement Full-Stack. Il a également obtenu plusieurs certifications sur Coursera.',
    'chatbot.skills': 'Gorgui maîtrise PHP, JavaScript, SQL, et utilise des outils comme Git, Docker, JSON Server. Il a des notions en POO, API REST et bases de données relationnelles.',
    'chatbot.projects': 'Gorgui a réalisé plusieurs projets : gestion des étudiants (PHP), gestion de tâches (JavaScript), et une interface de messagerie (en cours).',
    'chatbot.student': 'Il a réalisé une application de gestion des étudiants à la Sonatel Academy en PHP pur, permettant de gérer les profils (filtrage, ajout, modification, suppression).',
    'chatbot.todo': 'Il a créé une application de gestion de tâches en JavaScript Vanilla, avec ajout/suppression de tâches, utilisation de localStorage et identifiants uniques.',
    'chatbot.messaging': 'Il travaille actuellement sur une interface de messagerie avec sidebar, contacts et discussions.',
    'chatbot.contact': 'Vous pouvez contacter Gorgui au 77 706 54 68 / 76 906 41 34 ou par email : gorguimarena@gmail.com. Il est basé à Khar Yalla, Dakar, Sénégal.',
    'chatbot.experience': 'Gorgui a collaboré à des projets à l\'ISEP et continue à développer des solutions concrètes en équipe et en autonomie à la Sonatel Academy.',
    'chatbot.greeting': 'Bonjour ! Ravi de vous rencontrer. Comment puis-je vous aider à découvrir le portfolio de Gorgui ?',
    'chatbot.thanks': 'De rien ! N\'hésitez pas si vous avez d\'autres questions.',
    'chatbot.fallback': 'Je suis désolé, je n\'ai pas bien compris votre question. Vous pouvez me demander des informations sur l\'éducation, les compétences, les projets ou les coordonnées de Gorgui.',
    'chatbot.placeholder': 'Tapez votre message...',
    'chatbot.online': 'En ligne',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Full-Stack Developer',
    'hero.description': 'Passionate about creating exceptional web experiences with modern technologies. I transform ideas into innovative digital solutions.',
    'hero.download': 'Download CV',
    'hero.discover': 'Learn More',
    'hero.scroll': 'Discover',

    // About
    'about.title': 'About Me',
    'about.description': 'Holder of an ISEP Diamniadio certificate, I am currently training at Sonatel Academy where I develop web and mobile applications as part of practical projects. I have also obtained several certifications on Coursera, strengthening my skills in development and digital technologies. During my journey, I collaborated on projects at ISEP and continue to build concrete solutions in teams and independently at Sonatel Academy.',

    // Skills
    'skills.title': 'Skills',
    'skills.description': 'Languages, tools and concepts I master to create performant solutions',
    'skills.languages': 'Languages',
    'skills.tools': 'Tools',
    'skills.concepts': 'Concepts',
    'skills.softSkills': 'Soft Skills',

    // Projects
    'projects.title': 'Completed Projects',
    'projects.description': 'Discover my projects that demonstrate my development skills',
    'projects.student.title': 'Student Management Application',
    'projects.student.description': 'Student profile management (filtering, adding, editing, deleting).',
    'projects.student.tech': 'Pure PHP',
    'projects.todo.title': 'Task Management Application',
    'projects.todo.description': 'Adding, deleting and selecting tasks. Using localStorage and unique identifiers. Dynamic interface with createElement.',
    'projects.todo.tech': 'Vanilla JavaScript',
    'projects.messaging.title': 'Messaging Interface',
    'projects.messaging.description': 'Creating a messaging-type interface with sidebar, contacts, and discussions.',
    'projects.messaging.tech': 'In Progress',

    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Have a project or want to collaborate? Don\'t hesitate to contact me!',
    'contact.phone': 'Phone 1',
    'contact.phoneLabel2': 'Phone 2',
    'contact.phone1': '77 706 54 68',
    'contact.phone2': '76 906 41 34',
    'contact.email': 'gorguimarena@gmail.com',
    'contact.emailLabel': 'Email',
    'contact.location': 'Khar Yalla, Dakar, Senegal',
    'contact.locationLabel': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.messageSent': 'Message sent!',
    'contact.messageResponse': 'I will respond as soon as possible.',

    // About
    'about.stats.projects': 'Projects Completed',
    'about.stats.certifications': 'Certifications',
    'about.stats.experience': 'Years of Experience',
    'about.stats.skills': 'Skills',
    'about.education.isep': 'ISEP Diamniadio',
    'about.education.isep_desc': 'Certificate obtained in Back-End development',
    'about.education.sonatel': 'Sonatel Academy',
    'about.education.sonatel_desc': 'Current training in Full-Stack development',
    'about.experience.projects': 'Practical Projects',
    'about.experience.projects_desc': 'Development of concrete applications in teams and independently',
    'about.experience.teamwork': 'Team Work',
    'about.experience.teamwork_desc': 'Effective collaboration and communication in projects',

    // Footer
    'footer.role': 'Passionate Full-Stack Developer',
    'footer.rights': 'All rights reserved.',

    // Chatbot
    'chatbot.welcome': 'Hi! I\'m Gorgui\'s virtual assistant. I can help you learn more about his background, skills and projects. Ask me a question!',
    'chatbot.education': 'Gorgui holds a certificate from ISEP Diamniadio and is currently training at Sonatel Academy in Full-Stack development. He has also obtained several certifications on Coursera.',
    'chatbot.skills': 'Gorgui masters PHP, JavaScript, SQL, and uses tools like Git, Docker, JSON Server. He has knowledge in OOP, REST APIs and relational databases.',
    'chatbot.projects': 'Gorgui has completed several projects: student management (PHP), task management (JavaScript), and a messaging interface (in progress).',
    'chatbot.student': 'He created a student management application at Sonatel Academy in pure PHP, allowing management of student profiles (filtering, adding, editing, deleting).',
    'chatbot.todo': 'He created a task management application in Vanilla JavaScript, with adding/deleting tasks, using localStorage and unique identifiers.',
    'chatbot.messaging': 'He is currently working on a messaging interface with sidebar, contacts and discussions.',
    'chatbot.contact': 'You can contact Gorgui at 77 706 54 68 / 76 906 41 34 or by email: gorguimarena@gmail.com. He is based in Khar Yalla, Dakar, Senegal.',
    'chatbot.experience': 'Gorgui collaborated on projects at ISEP and continues to develop concrete solutions in teams and independently at Sonatel Academy.',
    'chatbot.greeting': 'Hello! Nice to meet you. How can I help you discover Gorgui\'s portfolio?',
    'chatbot.thanks': 'You\'re welcome! Don\'t hesitate if you have other questions.',
    'chatbot.fallback': 'I\'m sorry, I didn\'t understand your question well. You can ask me for information about education, skills, projects or Gorgui\'s contact details.',
    'chatbot.placeholder': 'Type your message...',
    'chatbot.online': 'Online',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};