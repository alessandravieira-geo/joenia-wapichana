import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const timeline = [
  { year: "1997", title: "Direito", text: "Conclui a graduação em Direito pela Universidade Federal de Roraima e inicia sua atuação jurídica em defesa dos povos indígenas." },
  { year: "2008", title: "Supremo Tribunal Federal", text: "Atua na defesa dos direitos indígenas no STF durante o julgamento relacionado à Terra Indígena Raposa Serra do Sol." },
  { year: "2018", title: "Representação", text: "É eleita deputada federal por Roraima, tornando-se a primeira mulher indígena eleita para a Câmara dos Deputados." },
  { year: "2019", title: "Congresso", text: "Toma posse e leva ao Parlamento a defesa dos direitos indígenas, do meio ambiente e da sustentabilidade." },
  { year: "2023", title: "Funai", text: "Assume a presidência da Fundação Nacional dos Povos Indígenas, primeira mulher indígena a liderar a instituição." },
  { year: "2026", title: "Legado", text: "Conclui sua gestão à frente da Funai após liderar a primeira gestão indígena da instituição." }
];

const themes = [
  { icon: "✦", title: "Território", text: "Proteção das terras tradicionalmente ocupadas e defesa da autonomia dos povos indígenas." },
  { icon: "◈", title: "Direitos", text: "O Direito como instrumento de defesa, participação e garantia de direitos coletivos." },
  { icon: "⌂", title: "Representação", text: "A presença indígena nos espaços de decisão e na política institucional." },
  { icon: "❋", title: "Futuro", text: "Meio ambiente, sustentabilidade e protagonismo dos povos indígenas." }
];

function LeafMark() {
  return (
    <div className="leaf-mark" aria-hidden="true">
      <span className="leaf purple"></span>
      <span className="leaf orange"></span>
      <span className="leaf green"></span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeYear, setActiveYear] = useState("2018");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="paper-noise" />

      <header className="header">
        <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Voltar ao início">
          <LeafMark />
          <span>JOENIA<br />WAPICHANA</span>
        </button>

        <button className="mobile-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button className="active" onClick={() => scrollTo("inicio")}>INÍCIO</button>
          <button onClick={() => scrollTo("trajetoria")}>TRAJETÓRIA</button>
          <button onClick={() => scrollTo("atuacao")}>ATUAÇÃO</button>
          <button onClick={() => scrollTo("povos")}>POVOS INDÍGENAS</button>
          <button onClick={() => scrollTo("galeria")}>GALERIA</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">TERRITÓRIO • DIREITOS • FUTURO</p>
            <h1>Joenia<br /><em>Wapichana</em></h1>
            <p className="hero-text">
              Uma trajetória marcada pela defesa dos povos indígenas,
              pelo Direito, pela participação política e pela proteção
              dos territórios e do meio ambiente.
            </p>
            <button className="primary-button" onClick={() => scrollTo("trajetoria")}>
              CONHEÇA SUA TRAJETÓRIA <span>→</span>
            </button>
            <div className="hero-note">
              <span className="small-leaf">✦</span>
              <span>Uma história de presença indígena nos espaços de decisão.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun-shape"></div>
            <div className="portrait-frame">
              <img src="/assets/joenia-portrait.png" alt="Ilustração de Joenia Wapichana" />
            </div>
            <div className="hero-flower flower-one">✿</div>
            <div className="hero-flower flower-two">✦</div>
            <div className="bird" aria-hidden="true">⌁</div>
          </div>

          <img className="hero-border" src="/assets/botanical-border.svg" alt="" aria-hidden="true" />
        </section>

        <section className="intro torn" id="atuacao">
          <div className="section-title">
            <p className="eyebrow">CONHECER PARA COMPREENDER</p>
            <h2>Quem é <span>Joenia?</span></h2>
            <div className="scribble"></div>
          </div>
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Joenia Wapichana, pertencente ao povo Wapichana, nasceu em Boa Vista,
                Roraima. Formada em Direito pela UFRR em 1997, construiu uma longa
                trajetória de atuação jurídica e política em defesa dos direitos dos povos indígenas.
              </p>
              <p>
                Em 2018, tornou-se a primeira mulher indígena eleita para a Câmara dos
                Deputados. Em 2023, assumiu a presidência da Funai, liderando a primeira
                gestão indígena da instituição.
              </p>
              <button className="outline-button" onClick={() => scrollTo("trajetoria")}>VER A LINHA DO TEMPO →</button>
            </div>
            <div className="fact-grid">
              <article className="fact-card">
                <div className="fact-icon map-icon">●</div>
                <h3>Roraima</h3>
                <p>Boa Vista e a comunidade indígena Truarú da Cabeceira fazem parte de sua trajetória.</p>
              </article>
              <article className="fact-card">
                <div className="fact-icon book-icon">▱</div>
                <h3>Direito</h3>
                <p>Formação em Direito pela UFRR e atuação jurídica junto às comunidades indígenas.</p>
              </article>
              <article className="fact-card">
                <div className="fact-icon house-icon">⌂</div>
                <h3>Representação</h3>
                <p>Primeira mulher indígena eleita deputada federal no Brasil.</p>
              </article>
              <article className="fact-card">
                <div className="fact-icon leaf-icon">❋</div>
                <h3>Funai</h3>
                <p>Primeira mulher indígena a presidir a Fundação Nacional dos Povos Indígenas.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="timeline-section" id="trajetoria">
          <div className="center-heading">
            <p className="eyebrow">UMA CAMINHADA</p>
            <h2>Trajetória que <em>inspira</em></h2>
            <p>Selecione um marco para conhecer um pouco dessa história.</p>
          </div>

          <div className="vine-timeline">
            <div className="vine-line"></div>
            {timeline.map((item, index) => (
              <button
                className={`timeline-item ${activeYear === item.year ? "selected" : ""}`}
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                style={{ "--i": index }}
              >
                <span className="timeline-dot">{item.year}</span>
                <span className="timeline-content">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="timeline-detail">
            {timeline.filter(x => x.year === activeYear).map(item => (
              <div key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="themes" id="povos">
          <div className="theme-heading">
            <p className="eyebrow">IDEIAS QUE ATRAVESSAM A TRAJETÓRIA</p>
            <h2>Território, direitos,<br /><em>presença e futuro.</em></h2>
          </div>
          <div className="theme-cards">
            {themes.map((theme, i) => (
              <article className={`theme-card card-${i + 1}`} key={theme.title}>
                <div className="theme-icon">{theme.icon}</div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-section" id="galeria">
          <div className="quote-leaves left"></div>
          <div className="quote-inner">
            <p className="quote-mark">“</p>
            <blockquote>
              Uma história de luta, representação e compromisso
              com os povos indígenas.
            </blockquote>
            <p className="quote-caption">JOENIA WAPICHANA • UMA TRAJETÓRIA QUE FLORESCE</p>
            <button className="yellow-button" onClick={() => scrollTo("inicio")}>EXPLORAR O SITE <span>→</span></button>
          </div>
          <div className="quote-leaves right"></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <LeafMark />
          <div><strong>JOENIA WAPICHANA</strong><span>Território • Direitos • Futuro</span></div>
        </div>
        <div className="footer-links">
          <button onClick={() => scrollTo("inicio")}>Início</button>
          <button onClick={() => scrollTo("trajetoria")}>Trajetória</button>
          <button onClick={() => scrollTo("atuacao")}>Atuação</button>
          <button onClick={() => scrollTo("povos")}>Povos indígenas</button>
        </div>
        <p className="credits">
          Projeto educativo • Conteúdo baseado em fontes públicas oficiais.
        </p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
