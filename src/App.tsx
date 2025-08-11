import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'; // Importamos la página que acabamos de crear
import AboutPage from './pages/AboutPage/AboutPage'; // Importamos la página que crearemos
import './App.css';

function App() {
  return (
    <div>
      {/* El Navbar vive aquí, fuera de las rutas, para ser siempre visible */}
      <Navbar />
      <main>
        {/* Aquí se decide qué página mostrar según la URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
