// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import perfilimage from "./assets/perfil.png";
import bellimage from "./assets/sino.png";
import searchimage from "./assets/search.png";
import Profile from "./pages/Profile";

const movies = [
  { id: 1, title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
  { id: 2, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg" },
  { id: 3, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg" },
  { id: 4, title: "Narcos", image: "https://image.tmdb.org/t/p/w500/f5uNbUC76oowt5mt5J9QlqrIYQ6.jpg" },
  { id: 5, title: "Dark", image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg" },
];

function Home() {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h2>Stranger Things</h2>
          <p>Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais e uma garota estranha.</p>
          <div className="banner-buttons">
            <button className="btn-play">▶ Assistir</button>
            <button className="btn-info">ℹ Mais informações</button>
          </div>
        </div>
      </div>

      <main className="container">
        <h2 className="section-title">Em alta</h2>
        <div className="catalog">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>

        <section className="suggestion-form">
          <h2 className="section-title">Sugira um filme para adicionar</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const reason = e.target.elements.reason.value;
            alert(`Sugestão recebida!\nFilme: ${title}\nMotivo: ${reason}`);
            e.target.reset();
          }}>
            <input
              type="text"
              name="title"
              placeholder="Nome do filme ou série"
              required
            />
            <textarea
              name="reason"
              placeholder="Por que deveríamos adicionar?"
              required
            ></textarea>
            <button type="submit">Enviar sugestão</button>
          </form>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <h1>NETFLIX</h1>
            </div>
            <nav className="navbar">
              <ul>
                <li><Link to="/" className="active">Início</Link></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Jogos</a></li>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Minha Lista</a></li>
              </ul>
            </nav>
          </div>
          <div className="profile">
            <button className="bell-btn">
              <img src={searchimage} alt="Buscar" />
            </button>
            <button className="bell-btn">
              <img src={bellimage} alt="Notificações" />
            </button>
            <Link to="/perfil" className="profile-btn">
              <img src={perfilimage} alt="Perfil" />
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

