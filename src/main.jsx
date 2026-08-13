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
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

     <section className="gallery-section" id="galeria">
  <div className="gallery-inner">

    <div className="gallery-heading">
      <p className="eyebrow">REGISTROS DE UMA TRAJETÓRIA</p>
      <h2>Uma trajetória que <em>floresce</em></h2>
      <p>
        Imagens que registram momentos da caminhada de Joenia Wapichana,
        desde a defesa dos territórios indígenas até sua atuação nos espaços
        de representação e decisão.
      </p>
    </div>

    <div className="gallery-grid">

      <figure className="gallery-item" onClick={() => setSelectedPhoto(0)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-1.png" alt="Joenia Wapichana durante a defesa da Terra Indígena Raposa Serra do Sol" />
        </div>
        <figcaption>
          <span className="gallery-year">2008 • RAPOSA SERRA DO SOL</span>
          <h3>Defesa do território</h3>
          <p>
            Joenia Wapichana, em 2008, durante sua defesa no julgamento
            da demarcação da Terra Indígena Raposa Serra do Sol, em Roraima.
          </p>
          <small>Fonte: LinkedIn</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(1)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-2.png" alt="Joenia Wapichana durante o julgamento da Terra Indígena Raposa Serra do Sol" />
        </div>
        <figcaption>
          <span className="gallery-year">2008 • RAPOSA SERRA DO SOL</span>
          <h3>Direito e resistência</h3>
          <p>
            Durante o julgamento da demarcação da Terra Indígena
            Raposa Serra do Sol, Joenia atuou na defesa dos direitos indígenas.
          </p>
          <small>Fonte: Correio Braziliense</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(2)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-3.png" alt="Joenia Wapichana no Acampamento Terra Livre" />
        </div>
        <figcaption>
          <span className="gallery-year">2019 • ACAMPAMENTO TERRA LIVRE</span>
          <h3>Força coletiva</h3>
          <p>
            A deputada federal Joenia Wapichana encontra companheiras
            indígenas durante o Acampamento Terra Livre, em Brasília.
          </p>
          <small>Foto: Katie Maehler/APIB</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(3)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-4.png" alt="Joenia Wapichana recebida por indígenas do povo Wapichana" />
        </div>
        <figcaption>
          <span className="gallery-year">2018 • POVO WAPICHANA</span>
          <h3>Entre seu povo</h3>
          <p>
            Indígenas recebem Joenia Wapichana em uma comunidade próxima
            ao município de Amajari, em Roraima.
          </p>
          <small>Foto: Mayra Wapichana</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(4)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-5.png" alt="Joenia Wapichana recebendo prêmio das Nações Unidas" />
        </div>
        <figcaption>
          <span className="gallery-year">2018 • PRÊMIO DA ONU</span>
          <h3>Reconhecimento internacional</h3>
          <p>
            Joenia Wapichana recebe o Prêmio das Nações Unidas no Campo
            dos Direitos Humanos de 2018, em reconhecimento à sua atuação.
          </p>
          <small>Foto: ONU</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(5)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-6.png" alt="Joenia Wapichana em sua posse no Congresso Nacional" />
        </div>
        <figcaption>
          <span className="gallery-year">2019 • CONGRESSO NACIONAL</span>
          <h3>Uma nova representação</h3>
          <p>
            No dia da posse, apoiadores, lideranças indígenas e amigos
            caminharam junto com Joenia até o Congresso Nacional.
          </p>
          <small>Foto: Divulgação</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(6)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-7.png" alt="Joenia Wapichana em seu gabinete 231" />
        </div>
        <figcaption>
          <span className="gallery-year">2019 • GABINETE 231</span>
          <h3>Um espaço de representação</h3>
          <p>
            Joenia Wapichana escolheu para seu gabinete o número 231,
            referência ao artigo da Constituição que trata dos direitos indígenas.
          </p>
          <small>Foto: Webert da Cruz/ONU Mulheres</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(7)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-8.png" alt="Joenia Wapichana em seu gabinete na Câmara dos Deputados" />
        </div>
        <figcaption>
          <span className="gallery-year">2019–2022 • CONGRESSO</span>
          <h3>Atuação parlamentar</h3>
          <p>
            Joenia Wapichana em seu gabinete na Câmara dos Deputados,
            onde atuou na defesa dos direitos dos povos indígenas.
          </p>
          <small>Foto: Divulgação</small>
        </figcaption>
      </figure>

      <figure className="gallery-item" onClick={() => setSelectedPhoto(8)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-9.png" alt="Joenia Wapichana na presidência da Funai ao lado do cacique Raoni" />
        </div>
        <figcaption>
          <span className="gallery-year">2023 • FUNAI</span>
          <h3>Presidência da Funai</h3>
          <p>
            Posse de Joenia Wapichana como presidenta da Fundação Nacional
            dos Povos Indígenas, ao lado do cacique Raoni.
          </p>
          <small>Foto: Joedson Alves/Agência Brasil</small>
        </figcaption>
      </figure>

      <figure className="gallery-item gallery-featured" onClick={() => setSelectedPhoto(9)}>
        <div className="gallery-image">
          <img src="/assets/galeria/joenia-99.png" alt="Retrato de Joenia Wapichana" />
        </div>
        <figcaption>
          <span className="gallery-year">2022 • RETRATO</span>
          <h3>A força de uma trajetória</h3>
          <p>
            Antes dos espaços de poder, existe uma história. Joenia Wapichana
            carrega em sua trajetória a força de seu povo, a identidade Wapichana
            e a coragem de transformar resistência em representação.
          </p>
          <small>Foto: Lohana Chaves • Fonte: Repórter Brasil</small>
        </figcaption>
      </figure>

    </div>
  </div>

  {selectedPhoto !== null && (
    <div className="gallery-modal" onClick={() => setSelectedPhoto(null)}>
      <button
        className="gallery-close"
        onClick={() => setSelectedPhoto(null)}
        aria-label="Fechar galeria"
      >
        ×
      </button>

      <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={[
            "/assets/galeria/joenia-1.png",
            "/assets/galeria/joenia-2.png",
            "/assets/galeria/joenia-3.png",
            "/assets/galeria/joenia-4.png",
            "/assets/galeria/joenia-5.png",
            "/assets/galeria/joenia-6.png",
            "/assets/galeria/joenia-7.png",
            "/assets/galeria/joenia-8.png",
            "/assets/galeria/joenia-9.png",
            "/assets/galeria/joenia-99.png"
          ][selectedPhoto]}
          alt="Fotografia de Joenia Wapichana"
        />

        <button
          className="gallery-prev"
          onClick={() => setSelectedPhoto((selectedPhoto + 9) % 10)}
          aria-label="Fotografia anterior"
        >
          ←
        </button>

        <button
          className="gallery-next"
          onClick={() => setSelectedPhoto((selectedPhoto + 1) % 10)}
          aria-label="Próxima fotografia"
        >
          →
        </button>
      </div>
    </div>
  )}
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
