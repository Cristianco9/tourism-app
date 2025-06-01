import { useState } from "react";
import Header from "./Header";

const mockServices = [
  {
    id: 1,
    title: "Ruta de senderismo por la vereda La Paila",
    description: "Caminata guiada por senderos ecológicos con vista al río Cauca.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.7,
    price: "$15 USD",
    image: "https://images.unsplash.com/photo-1708737338778-497a8fa81606?q=80&w=1439&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Tour de caña de azúcar y trapiche artesanal",
    description: "Descubre el proceso de producción de la panela y prueba productos típicos.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.9,
    price: "$18 USD",
    image: "https://plus.unsplash.com/premium_photo-1694864661950-288ec8a06e5c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Taller de cocina vallecaucana",
    description: "Aprende a preparar sancocho, empanadas y otras delicias locales.",
    location: "Zarzal, Valle del Cauca",
    rating: 5.0,
    price: "$20 USD",
    image: "https://plus.unsplash.com/premium_photo-1661405776720-8130935fb24f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Cabalgata al atardecer",
    description: "Paseo a caballo por zonas rurales con vistas espectaculares del atardecer.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.6,
    price: "$25 USD",
    image: "https://images.unsplash.com/photo-1463748465553-80db1e6ff830?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Tour en bicicleta por cultivos de banano y café",
    description: "Recorre fincas locales en bicicleta y conoce sus cultivos.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.8,
    price: "$22 USD",
    image: "https://images.unsplash.com/photo-1534260900616-65167462e2e0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Visita al mercado campesino",
    description: "Conoce productos frescos y artesanías de la región directamente de los productores.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.5,
    price: "$10 USD",
    image: "https://images.unsplash.com/photo-1625213739781-809aeb135d9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Noche de mitos y leyendas vallecaucanas",
    description: "Narraciones tradicionales alrededor de una fogata con músicos locales.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.9,
    price: "$12 USD",
    image: "https://images.unsplash.com/photo-1649003114251-c82f271973b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    title: "Avistamiento de aves en la ribera del río Cauca",
    description: "Jornada de observación de aves con guías especializados.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.7,
    price: "$17 USD",
    image: "https://plus.unsplash.com/premium_photo-1723478690606-f953ea1dab3a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Taller de baile folclórico",
    description: "Aprende a bailar ritmos tradicionales como el currulao y el bambuco.",
    location: "Zarzal, Valle del Cauca",
    rating: 4.8,
    price: "$14 USD",
    image: "https://images.unsplash.com/photo-1720556836856-853dc0bf6e7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredServices = mockServices.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <div className="input-group shadow-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar actividades, lugares, servicios..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-warning text-white fw-semibold">Buscar</button>
            </div>
          </div>
        </div>

        <div className="row">
          {filteredServices.map(service => (
            <div key={service.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm transition-transform" style={{ transition: 'transform 0.2s' }}>
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <p className="card-text text-muted">
                    <i className="bi bi-geo-alt-fill text-danger"></i> {service.location}
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="badge bg-warning text-dark">
                      ⭐ {service.rating}
                    </span>
                    <strong className="text-success">{service.price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
