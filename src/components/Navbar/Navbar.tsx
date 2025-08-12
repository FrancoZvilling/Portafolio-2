import React, { useState, useEffect } from 'react'; // Necesitamos estos hooks
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaArrowLeft, FaHome, FaUser } from 'react-icons/fa';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const isOnAboutPage = location.pathname === '/about';

  // --- ESTADO PARA LA HORA ---
  const [currentTime, setCurrentTime] = useState(new Date());

  // --- EFECTO PARA ACTUALIZAR LA HORA ---
  useEffect(() => {
    // Creamos un intervalo que se ejecuta cada segundo
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpieza del intervalo para evitar fugas de memoria
    return () => {
      clearInterval(timerId);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // --- RENDERIZADO ---
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        {
          isOnAboutPage ? (
            // --- ESTO SE MUESTRA SI ESTAMOS EN /about ---
            <>
              <Link to="/" className={styles.navLink}>
                <FaHome className={styles.navIcon} />
              </Link>
              <FaArrowLeft className={styles.hintArrow} />
              <span className={styles.hintText}>
                Volver a la página principal
              </span>
            </>
          ) : (
            // --- ESTO SE MUESTRA EN CUALQUIER OTRA PÁGINA ---
            <>
              <Link to="/about" className={styles.navLink}>
                <FaUser className={styles.navIcon} />
              </Link>
              <FaArrowLeft className={styles.hintArrow} />
              <span className={styles.hintText}>
                Mis datos personales y otros proyectos
              </span>
            </>
          )
        }
      </div>

      <div className={styles.navbarInfo}>
        {/* Usamos el estado para mostrar la hora formateada */}
        <span>{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>
    </nav>
  );
};

export default Navbar;