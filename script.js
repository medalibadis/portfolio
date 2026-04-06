// Translations object
const translations = {
    en: {
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hi, I am',
        'hero-role': 'Computer Science Engineer | AI & Data Science',
        'hero-tagline': 'Bridging AI Research with Full-Stack Solutions',
        'cta-contact': 'Get In Touch',
        'cta-projects': 'View Work',
        'section-about': 'About Me',
        'about-p1': 'I am a passionate <span class="highlight">State Engineer</span> (Specialization Year 2025-2026 for AI and Data Science) studying at ESI Sidi Bel Abbès. My motivation lies in building intelligent end-to-end systems that solve real-world problems.',
        'eng-state': 'State Engineer',
        'science-exp': 'Experimental Sciences',
        'about-p2': 'My academic journey started with a strong foundation in <span class="highlight">Experimental Sciences</span>, where I achieved a 2nd place ranking in my high school, highlighted by a flawless 20/20 in Mathematics.',
        'about-p3': "Beyond academics, I am a proud alumnus of the US Embassy's <strong>Access Program</strong> certification, which has fueled my drive to connect globally and lead impactful initiatives.",
        'section-projects': 'Featured Projects',
        'proj1-title': 'Intelligent Algae Yield Prediction Platform',
        'proj1-desc': 'An AI-driven platform utilizing satellite data and imagery to accurately forecast algae yields, assisting in sustainable harvesting and environmental monitoring.',
        'proj2-title': 'MySchool Manager',
        'proj2-desc': 'A highly scalable, modern school management system designed to streamline administration, tracking, and communication for educational institutions.',
        'proj3-title': 'AutoMate',
        'proj3-desc': 'A comprehensive mobile platform tailored for driving schools, providing seamless scheduling and progress tracking for both instructors and learners.',
        'section-skills': 'Technical Arsenal',
        'skill-ai': 'AI & Data',
        'skill-web': 'Web & Mobile',
        'skill-tools': 'Tools & Infra',
        'skill-soft': 'Soft Skills',
        'soft1': 'Creative Problem Solving',
        'soft2': 'Public Speaking',
        'soft3': 'Team Leadership',
        'section-exp': 'Experience & Leadership',
        'exp1-role': 'Head of Marketing',
        'exp1-desc': 'Led marketing strategies and campaigns, fostering engagement and promoting tech events within the student community.',
        'exp2-role': 'Head of HR',
        'exp2-desc': 'Managed recruitment, team dynamics, and structural organization for the Google Developer Student Clubs at Sidi Bel Abbès.',
        'exp3-role': 'Access Program Graduate',
        'exp3-desc': 'Completed a prestigious intensive program focusing on English proficiency, leadership, and community development.',
        'section-contact': 'Get In Touch',
        'contact-desc': "Whether you have a question or just want to say hi, I'll try my best to get back to you!"
    },
    fr: {
        'nav-about': 'À Propos',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-experience': 'Expérience',
        'nav-contact': 'Contact',
        'hero-greeting': 'Bonjour, je suis',
        'hero-role': 'Ingénieur en Informatique | IA & Data Science',
        'hero-tagline': "L'alliance de l'IA et du Développement Full-Stack",
        'cta-contact': 'Me Contacter',
        'cta-projects': 'Voir Mes Travaux',
        'section-about': 'À Propos de Moi',
        'about-p1': 'Je suis un <span class="highlight">Ingénieur d\'État</span> passionné (Année de Spécialisation 2025-2026 en IA et Data Science) étudiant à l\'ESI Sidi Bel Abbès. Ma motivation réside dans la création de systèmes intelligents de bout en bout qui résolvent des problèmes du monde réel.',
        'about-p2': 'Mon parcours académique a commencé avec une base solide en <span class="highlight">Sciences Expérimentales</span>, où j\'ai obtenu la 2ème place dans mon lycée, couronnée par un 20/20 parfait en Mathématiques.',
        'about-p3': "Au-delà des études, je suis fier d'être diplômé du programme de certification <strong>Access Program</strong> de l'Ambassade des États-Unis, qui a nourri mon désir de me connecter à l'international et de mener des initiatives à fort impact.",
        'section-projects': 'Projets Phares',
        'proj1-title': 'Plateforme Intelligente de Prédiction de Rendement des Algues',
        'proj1-desc': 'Une plateforme propulsée par l\'IA utilisant des données et images satellitaires pour prévoir avec précision le rendement des algues, aidant ainsi la récolte durable.',
        'proj2-title': 'MySchool Manager',
        'proj2-desc': 'Un système de gestion scolaire moderne et évolutif conçu pour rationaliser l\'administration et la communication au sein des établissements.',
        'proj3-title': 'AutoMate',
        'proj3-desc': 'Une plateforme mobile complète sur mesure pour les auto-écoles, offrant une planification transparente et un suivi des progrès pour les instructeurs et les apprenants.',
        'section-skills': 'Arsenal Technique',
        'skill-ai': 'IA & Data',
        'skill-web': 'Web & Mobile',
        'skill-tools': 'Outils & Infra',
        'skill-soft': 'Compétences Douces',
        'soft1': 'Résolution Créative de Problèmes',
        'soft2': 'Prise de Parole en Public',
        'soft3': 'Leadership d\'Équipe',
        'section-exp': 'Expérience & Leadership',
        'exp1-role': 'Responsable Marketing',
        'exp1-desc': 'Direction des stratégies et campagnes marketing, favorisant l\'engagement et promouvant les événements tech au sein de la communauté étudiante.',
        'exp2-role': 'Responsable des Ressources Humaines',
        'exp2-desc': 'Gestion du recrutement, de la dynamique d\'équipe et de l\'organisation structurelle pour les Google Developer Student Clubs de Sidi Bel Abbès.',
        'exp3-role': 'Diplômé du Programme Access',
        'exp3-desc': 'Achèvement d\'un programme intensif prestigieux axé sur la maîtrise de l\'anglais, le leadership et le développement communautaire.',
        'section-contact': 'Me Contacter',
        'contact-desc': "Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !"
    }
};

// Language Toggle Logic
const btnEn = document.getElementById('lang-en');
const btnFr = document.getElementById('lang-fr');

function setLanguage(lang) {
    // Update active button state
    if (lang === 'en') {
        btnEn.classList.add('active');
        btnFr.classList.remove('active');
    } else {
        btnFr.classList.add('active');
        btnEn.classList.remove('active');
    }

    // Update text content based on data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

btnEn.addEventListener('click', () => setLanguage('en'));
btnFr.addEventListener('click', () => setLanguage('fr'));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add subtle scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-panel').forEach(panel => {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(30px)';
    panel.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(panel);
});
