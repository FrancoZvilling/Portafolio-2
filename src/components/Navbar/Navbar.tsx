// src/components/Navbar/Navbar.tsx (VERSIÓN DINÁMICA)

import React from 'react';
// 1. Importamos Link y el hook useLocation de React Router
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
// 2. Importamos los dos iconos que necesitaremos
import { FaArrowLeft, FaHome } from 'react-icons/fa';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  // 3. Obtenemos la información de la ruta actual
  const location = useLocation();
  // 4. Creamos una variable booleana para saber si estamos en la página "about"
  const isOnAboutPage = location.pathname === '/about';

  const currentTime = "12:00";
  const currentTemp = "20°";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        {
          // 5. Usamos un operador ternario para mostrar contenido condicional
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
                <span className={styles.navIcon}>👤</span>
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
        <span>{currentTime}</span>
        <span>/</span>
        <span>{currentTemp}</span>
      </div>
    </nav>
  );
};

export default Navbar;