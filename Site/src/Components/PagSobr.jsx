import { Link } from "react-router-dom";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './styles/SobrePage.css'; // Estilização da pagina 

const PagSobr = () => {
  // Hook para detectar quando a seção está visível
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-sunpdv">
              <img src="/logosunpdv.png" alt="Logo SunPDV" className="sun-logo" />
            </div>
          </div>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Sobre-Nos" className="nav-link active">Sobre Nós</Link>
            <Link to="/Download" className="nav-link">Download</Link>
          </nav>
        </div>
      </header>
              {/* Conteúdo Principal */}
              <main className="main-content">
                <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="title">
                Sobre o{' '}
                <span style={{ color: 'var(--primary)' }}>Sun</span>
                <span style={{ color: 'var(--secondary)' }}>PDV</span>
              </h1>
              <p className="description">
                Nosso sistema é conhecido por ser único e otimizado para o cenário Varejista,
                oferecendo soluções completas para gestão de vendas e controle do seu negócio.
              </p>
            </div>
            <div className="image">
              <img className="product-screenshot" src="/telavendas.png" alt="Tela de vendas do Sun PDV" />
            </div>
          </div>
        </section>


        <section className="features-section">
          <div className="section-title">
            <h2>Nossos <span>Diferenciais</span></h2>
            <p>Descubra o que faz do Sun PDV a melhor escolha para seu negócio</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Desempenho</h3>
              <p>O sistema mais rápido do mercado, otimizado para operar mesmo em hardware modesto</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Intuitivo</h3>
              <p>Interface simples e amigável que reduz a curva de aprendizado</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Atualizações</h3>
              <p>Melhorias constantes sem custo adicional para nossos clientes</p>
            </div>
          </div>
        </section>

        {/* Seção com contador animado */}
        <section className="history-section" ref={ref}>
          <div className="section-title">
            <h2>Nossa <span>História</span></h2>
          </div>
          <div className="history-content">
            <p>
              Fundado em 2025, o Sun PDV nasceu da necessidade de oferecer uma solução verdadeiramente eficiente
              para pequenos e médios varejistas. Com anos de experiência no mercado, nossa equipe desenvolveu
              um sistema que combina simplicidade com poder de gestão.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="numerosobe">
                  <CountUp
                    start={0}
                    end={inView ? 1000000 : 0}
                    duration={3}
                    separator="."
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <h3 className="numeroini" ref={countUpRef}></h3>
                    )}
                  </CountUp>
                </div>
                <p>Clientes satisfeitos</p>
              </div>
              <div className="stat-item">
                <h3>99%</h3>
                <p>Disponibilidade</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Suporte especializado</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="section-title">
            <h2>Conheça o <span>Time</span></h2>
            <p>Profissionais dedicados ao seu sucesso</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>João Pedro de Moraes Mendes</h3>
              <p>Co-Fundador e Desenvolvedor de Software</p>
            </div>
            <div className="team-card"> 
              <div className="team-avatar">👨‍💼</div>
              <h3>João Pedro Silva Schinato</h3>
              <p>Fundador e Data Engineer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>Vinicius Toshi Mizuguchi</h3>
              <p>Co-Fundador e Desenvolvedor Web</p>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Sun PDV</h3>
            <p>Soluções completas para gestão de vendas e fluxo de caixa</p>
          </div>

          <div className="footer-column">
            <h3>Links Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Sobre-Nos">Sobre Nós</Link></li>
              <li><Link to="/Download">Download</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contato</h3>
            <ul className="footer-links">
              <li>suporte@sunpdv.com</li>
              <li>(12) 3456-7890</li>
              <li>WhatsApp: (12) 98765-4321</li>
            </ul>
          </div>
        </div>

          <div className="footer-column">
             <h3>Legal</h3>
              <ul className="footer-links">
                <li><Link to="/privacidade">Política de Privacidade</Link></li>
                <li><Link to="/termos">Termos de Uso</Link></li>
                <li><Link to="/licenca">Licença</Link></li>
              </ul>
          </div>
          
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sun PDV. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PagSobr;
