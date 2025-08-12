// src/components/ProjectSection/ProjectSection.tsx (CÓDIGO CORREGIDO)
import React from 'react'; // Necesitamos React aquí por el forwardRef
import styles from './ProjectSection.module.css';
import { FaLink } from 'react-icons/fa';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const techSkills = [
  { category: 'Lenguajes y Frameworks', skills: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3'] },
  { category: 'Herramientas de Frontend y Ecosistema', skills: ['Vite', 'React Router', 'TailwindCSS', 'DaisyUI', 'React Hook Form', 'React Context API', 'react-toastify', 'react-icons', 'framer-motion', 'pdfjs-dist', 'jspdf', 'docx'] },
  { category: 'Backend y Servicios en la Nube (BaaS)', skills: ['Firebase Authentication', 'Firestore (NoSQL)', 'Firebase Storage', 'Cloud Functions', 'Google Cloud Platform (GCP)', 'IAM', 'Secret Manager', 'Integración API Gemini'] },
  { category: 'Herramientas de Desarrollo y DevOps', skills: ['Git', 'GitHub', 'CI/CD (GitHub Actions)', 'Variables de Entorno', 'PWA (Vite Plugin)'] },
];

const ProjectSection = React.forwardRef<HTMLDivElement>((_props, ref) => { // Cambiamos props por _props
  return (
    <section ref={ref} className={styles.projectSection}>
      <h2 className={styles.mainTitle}>Proyecto Principal: Estud-IA</h2>
      <div className={styles.topContainer}>
        <div className={styles.videoContainer}>
          <VideoPlayer url="https://www.youtube.com/watch?v=1l5BqZ94bSU" />
        </div>
        <div className={styles.descriptionContainer}>
          <h3>El Origen de la Idea</h3>
          <p>
            Estud-IA nació de la necesidad de optimizar mi propio flujo de estudio. 
            Logré consolidar una 
            herramienta que no solo me ayuda a mí, sino que tiene el potencial de 
            transformar la manera en que otros estudiantes interactúan con el material académico.
          </p>
          <h3>¿Qué Problema Resuelve?</h3>
          <p>
            El proyecto ataca directamente la sobrecarga de información y la falta de 
            herramientas interactivas para el aprendizaje, utilizando IA para generar 
            resúmenes, modelos de parcial y organizar toda la información académica en un solo lugar.
          </p>
        </div>
      </div>
      <a 
        href="https://www.estud-ia.com.ar/"
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.mainProjectLink}
      >
        <FaLink /> Link al proyecto
      </a>
      <div className={styles.bottomContainer}>
        <h3 className={styles.techTitle}>Stack Tecnológico Utilizado</h3>
        {techSkills.map((category) => (
          <div key={category.category} className={styles.skillCategory}>
            <h4>{category.category}</h4>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ProjectSection;