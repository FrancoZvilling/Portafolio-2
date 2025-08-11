import styles from './AboutPage.module.css';
import { FaEnvelope, FaPhone, FaDownload, FaLink, FaBriefcase } from 'react-icons/fa';

// --- DATA: Estructuramos toda tu información aquí para garantizar que no falte nada ---

const projectsData = [
  {
    title: 'E-App',
    role: 'Desarrollo Frontend con orientación a comercio electrónico',
    description: [
      'Diseño y desarrollo completo de una aplicación web para e-commerce.',
      'Implementación de interfaz de usuario responsiva y accesible, usando tecnologías como React y frameworks CSS modernos.',
      'Integración de funcionalidades esenciales para e-commerce, como listado de productos, filtros, carrito y experiencia de compra.'
    ],
    experienceNote: 'Experiencia con clientes reales.',
    link: 'https://e-appweb.netlify.app/'
  },
  {
    title: 'Estud-IA',
    role: 'Desarrollo Full-Stack Frontend + Backend Serverless',
    description: [
      'Desarrollo de una SPA completa con React.js, optimizando componentes y ciclo de vida con hooks personalizados.',
      'Implementación de un sistema de autenticación completo (Email, Google OAuth) con gestión avanzada de perfiles.',
      'Integración de Firestore para manejar datos complejos y desacoplados con consultas avanzadas.',
      'Creación de Cloud Functions (Node.js) con triggers y funciones callable para automatizar tareas y exponer APIs seguras.',
      'Gestión segura de secretos y permisos en Google Cloud (IAM y Secret Manager).',
      'Integración con Google AI para IA generativa y Mercado Pago para suscripciones recurrentes.',
      'Implementación de PWA con soporte offline y experiencia similar a aplicación nativa.',
      'Configuración de CI/CD con GitHub Actions para despliegue automático de funciones en la nube.'
    ],
    experienceNote: 'Experiencia con clientes reales.',
    link: 'https://www.estud-ia.com.ar/'
  }
];

const technicalSkills = [
  { category: 'Lenguajes y Frameworks', skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'Node.js'] },
  { category: 'Diseño y UI/UX', skills: ['TailwindCSS', 'DaisyUI', 'framer-motion', 'Mobile-First', 'Flexbox', 'CSS Grid'] },
  { category: 'Herramientas Frontend', skills: ['Vite', 'React Router', 'React Hook Form', 'React Context API', 'react-toastify', 'react-icons', 'react-markdown'] },
  { category: 'Backend y Cloud', skills: ['Firebase (Authentication, Firestore, Storage, Cloud Functions)', 'Google Cloud (IAM, Secret Manager)'] },
  { category: 'Integraciones y APIs', skills: ['Google AI (Gemini)', 'Mercado Pago (Suscripciones Checkout Pro)'] },
  { category: 'DevOps y Control de Versiones', skills: ['Git', 'GitHub Actions (CI/CD)', 'PWA (vite-plugin-pwa)'] },
  { category: 'Otras Competencias', skills: ['Depuración full-stack', 'manejo de CORS', 'configuración de npm y entornos'] }
];


// --- COMPONENTE: Renderizamos la información completa ---

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.contentWrapper}>

        <section id="sobre-mi" className={styles.card}>
          <h1 className={styles.mainTitle}>Sobre Mí</h1>
          <h2>Desarrollador Full-Stack | Semi-Senior</h2>
          <span className={styles.dob}>06/05/1996</span>
          <p>
            Desarrollador Full-Stack experto en Frontend, especializado en React.js y ecosistemas cloud, con experiencia en la creación de aplicaciones web completas desde el diseño de interfaz hasta la implementación de backend serverless. Capaz de integrar APIs de terceros, optimizar rendimiento y garantizar seguridad en entornos de producción. Apasionado por el desarrollo tecnológico y autodidacta.
          </p>
        </section>

        <section id="contacto" className={styles.card}>
          <h1 className={styles.mainTitle}>Contacto</h1>
          <div className={styles.contactContent}>
            <a href="https://wa.me/543541315119" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaPhone /> <span>+543541315119</span>
            </a>
            <div className={styles.contactItem}><FaEnvelope /> <span>francozvilling-programador@hotmail.com</span></div>
            <a href="/cv.pdf" download className={styles.cvButton}>
              <FaDownload /> Descargar mi CV
            </a>
          </div>
        </section>

        <section id="proyectos">
          <h1 className={`${styles.mainTitle} ${styles.standaloneTitle}`}>Mis Proyectos Principales</h1>
          <div className={styles.projectsGrid}>
            {projectsData.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <h4>{project.role}</h4>
                <ul className={styles.techList}>
                  {project.description.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                {project.experienceNote && (
                  <p className={styles.professionalExperience}>
                    <FaBriefcase /> {project.experienceNote}
                  </p>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <FaLink /> Ver Proyecto
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="educacion" className={styles.card}>
          <h1 className={styles.mainTitle}>Educación</h1>
          <div className={styles.educationContent}>
            <h3>Principalmente autodidacta</h3>
            <p><strong>Desarrollo Aumentado por IA (AI-Augmented Development):</strong> Experiencia en el uso de modelos de lenguaje grandes (como Gemini/GPT) para acelerar el ciclo de desarrollo, desde la planificación y la generación de boilerplate hasta la depuración de errores complejos y la refactorización de código.</p>
            <h3>Bases sólidas de programación aprendidas en CoderHouse</h3>
            <div className={styles.diplomaGrid}>
              <img src="/Desarrollo_web.png" alt="Diploma en Desarrollo Web" className={styles.diplomaImage} />
              <img src="/JavaScript.png" alt="Diploma en JavaScript" className={styles.diplomaImage} />
              <img src="/React.png" alt="Diploma en React" className={styles.diplomaImage} />
              <img src="/Frontend.png" alt="Diploma en Frontend" className={styles.diplomaImage} />
            </div>
          </div>
        </section>

        <section id="habilidades" className={styles.card}>
          <h1 className={styles.mainTitle}>Habilidades Técnicas</h1>
          <div className={styles.skillsContainer}>
            {technicalSkills.map(category => (
              <div key={category.category} className={styles.skillCategory}>
                <h5>{category.category}</h5>
                <div className={styles.skillsGrid}>
                  {category.skills.map(skill => (
                    <span key={skill} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;