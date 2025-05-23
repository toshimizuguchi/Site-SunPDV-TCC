
import './styles/SobrePage.css'; // Estilização da pagina 

const PagSobr = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
              <div className="logo-sunpdv">
                <img src="/logosunpdv.png" alt="Logo SunPDV" className="sun-logo" />
              </div>
            Sun<span>PDV</span>
          </div>
          <nav className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/Sobre-Nos" className="nav-link active">Sobre Nós</a>
            <a href="/Download" className="nav-link">Download</a>
            
           
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <section className="hero-section">
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

        <section className="history-section">
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
                <h3>500+</h3>
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
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Sobre-Nos">Sobre Nós</a></li>
              <li><a href="/Download">Download</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Suporte</h3>
            <ul className="footer-links">
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="/privacidade">Política de Privacidade</a></li>
              <li><a href="/termos">Termos de Uso</a></li>
              <li><a href="/licenca">Licença</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sun PDV. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PagSobr;