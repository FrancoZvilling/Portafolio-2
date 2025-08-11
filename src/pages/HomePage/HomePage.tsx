import React, { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar'; 
import HeroSection from '../../components/HeroSection/HeroSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';


// Cambia el nombre de la función de 'App' a 'HomePage'
function HomePage() { 
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToProject = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // El return es exactamente el mismo que tenías, pero sin el Navbar
  return (
    <>
      <HeroSection onButtonClick={handleScrollToProject} />
      <ProjectSection ref={projectSectionRef} />
    </>
  )
}

// Cambia la exportación también
export default HomePage;