// src/components/HeroSection/HeroSection.tsx

import React from 'react';
import styles from './HeroSection.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

// 1. Definimos que el componente recibirá una prop llamada 'onButtonClick'
type HeroSectionProps = {
  onButtonClick: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onButtonClick }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Bienvenidos a mi portafolio web
          </h1>
          <p className={styles.heroSubtitle}>
            Soy un desarrollador Full-Stack apasionado por la tecnología y por crear mundos virtuales. Explora mi trabajo y conoce mi proyecto principal.
          </p>
          {/* 2. Añadimos el evento onClick al botón */}
          <button className={styles.ctaButton} onClick={onButtonClick}>
            Ver mi proyecto principal
          </button>
        </div>
        <div className={styles.heroVideo}>
          <VideoPlayer url="https://www.youtube.com/watch?v=gEJNnRX0eY8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;