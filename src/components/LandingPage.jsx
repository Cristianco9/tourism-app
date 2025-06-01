import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCalendarAlt, FaCameraRetro, FaStar, FaUsers, FaWhatsapp } from "react-icons/fa";
import '../styles/LandingPage.css';

const LandingPage = ({ darkMode }) => {

  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Dashboard');
  };

  return (
    <div className={`landing-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <section className="hero-section">
        <div className="bg-overlay" />
        <motion.div
          className="hero-content container text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-3 fw-bold mb-3 mt-5">Bienvenido a Vive Zarzal</h1>
          <p className="lead">
            Vive experiencias únicas, conecta con la cultura local y recorre los mejores destinos turísticos de la región.
          </p>
          <section className="text-center py-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn btn-lg px-5 py-3 ${darkMode ? "btn-light" : "btn-warning"
                } fw-semibold`}
              onClick={handleStart}
            >
              Comenzar
            </motion.button>
          </section>
        </motion.div>
      </section>

      <section className="info-section container text-center py-5">
        <h2 className="mb-5 fw-bold">¿Qué puedes hacer aquí?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <FaMapMarkedAlt size={50} className="mb-3 text-warning" />
            <h5 className="fw-bold">Explorar Lugares</h5>
            <p>Descubre rutas, parajes naturales y joyas escondidas en tu región.</p>
          </div>
          <div className="col-md-4">
            <FaCalendarAlt size={50} className="mb-3 text-warning" />
            <h5 className="fw-bold">Planificar Actividades</h5>
            <p>Desde caminatas hasta festivales culturales, agenda tu próxima aventura.</p>
          </div>
          <div className="col-md-4">
            <FaCameraRetro size={50} className="mb-3 text-warning" />
            <h5 className="fw-bold">Captura Momentos</h5>
            <p>Registra recuerdos memorables y compártelos con otros viajeros.</p>
          </div>
        </div>
      </section>

      <section className="data-box text-white text-center py-5">
        <div className="container">
          <h2 className="mb-4 fw-bold">¿Por qué elegir Vive Zarzal?</h2>
          <p className="mb-3">Te ayudamos a redescubrir tu tierra con una experiencia personalizada, moderna y segura.</p>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4>+200 Lugares registrados</h4>
            </div>
            <div className="col-md-4">
              <h4>+1.000 Usuarios activos</h4>
            </div>
            <div className="col-md-4">
              <h4>100% Hecho en Colombia 🇨🇴</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section container py-5">
        <h2 className="text-center mb-5 fw-bold">Destinos Destacados</h2>
        <div className="row g-4">
          {[
            {
              id: 1,
              url: "https://turismovalledelcauca.com/wp-content/uploads/2020/01/foto-municipio-zarzal-turismo-valle-del-cauca-colombia.jpg",
              description: "Explora la belleza del municipio desde el aire.",
              destine: "Sobre vuelo sobre Zarzal"
            },
            {
              id: 2,
              url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Parque_santander_zarzal_valle.jpg",
              description: "Espacio público lleno de comercio y gastronomía local.",
              destine: "Parque principal del municipio"
            },
            {
              id: 3,
              url: "https://www.livevalledelcauca.com/assets/images/zarzal/lago-de-pesca-la-abuelita.jpg",
              description: "Un lugar imperdible para los amantes de la pesca.",
              destine: "Lago de Pesca la abuelita"
            }
          ].map((i) => (
            <div key={i.id} className="col-md-4">
              <div className="card-item  card h-100 shadow-sm">
                <img
                  src={`${i.url}`}
                  className="card-img-top card-img-fixed"
                  alt={`Destino ${i.destine}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{i.destine}</h5>
                  <p className="card-text">{i.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section text-center py-5 bg-light">
        <div className="container">
          <h2 className="mb-5 fw-bold">Lo que dicen nuestros visitantes</h2>
          <div className="row g-5">
            <div className="col-md-4">
              <blockquote className="blockquote message-box">
                <p>"Una experiencia inolvidable. La mejor forma de conocer Zarzal."</p>
                <footer className="blockquote-footer">Juan G.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote message-box">
                <p>"Fácil de usar, muy útil para planear mis paseos con la familia."</p>
                <footer className="blockquote-footer">María L.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote message-box">
                <p>"Recomiendo Vive Zarzal a todo el que quiera explorar el Valle."</p>
                <footer className="blockquote-footer">Andrés P.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-5 text-center text-black map-box">
        <div className="container">
          <h2 className="mb-4 fw-bold">Explora Zarzal desde el mapa</h2>
          <img
            src="https://media.istockphoto.com/id/163113165/photo/colombia.webp?a=1&b=1&s=612x612&w=0&k=20&c=zQSAKOcl4TI-MZyC_AcLpNzik33sOv1tXzPtyCz2Rg8="
            className="img-fluid rounded shadow"
            alt="Mapa de Zarzal"
          />
        </div>
      </section>

      <section className="stats-section py-5 text-center bg-warning text-dark">
        <div className="container">
          <h2 className="mb-4 fw-bold">Reconocimientos y Resultados</h2>
          <div className="row">
            <div className="col-md-4">
              <FaStar size={40} className="mb-2 text-dark" />
              <h5>App destacada regional</h5>
              <p>Premiada por innovación en turismo digital.</p>
            </div>
            <div className="col-md-4">
              <FaUsers size={40} className="mb-2 text-dark" />
              <h5>Comunidad activa</h5>
              <p>Colaboraciones con instituciones y guías locales.</p>
            </div>
            <div className="col-md-4">
              <FaWhatsapp size={40} className="mb-2 text-dark" />
              <h5>Soporte en línea</h5>
              <p>Atención y asesoría vía WhatsApp todos los días.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-dark text-white">
        <p className="mb-1">© 2025 Vive Zarzal. Todos los derechos reservados.</p>
        <p className="mb-0">
          Contacto: <a href="mailto:contacto@vivezarzal.com" className="text-info">contacto@vivezarzal.com</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
