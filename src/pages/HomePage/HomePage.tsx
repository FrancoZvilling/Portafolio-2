import { useRef } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const HomePage = () => {
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToProject = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onButtonClick={handleScrollToProject} />
      <ProjectSection ref={projectSectionRef} />
    </>
  );
};

export default HomePage;