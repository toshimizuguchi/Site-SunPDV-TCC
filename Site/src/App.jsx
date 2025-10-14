import './Components/styles/App.css'; // Estilização da pagina
import { Link, useNavigate } from 'react-router-dom'; //navegar de forma mais rapida e eficiente


function App() {
  return (
    <div className="app-container">
      
      
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-sunpdv">
              <img src="/logosunpdv.png" alt="Logo SunPDV" className="sun-logo" />
            </div>
            
          </div>
          <nav className="nav-links">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/Sobre-Nos" className="nav-link">Sobre Nós</Link>
            <Link to="/Download" className="nav-link">Download</Link>
          </nav>
        </div>
      </header>

      {/*Mains content*/}
      <main className="main-content" id="fundo">
        
        {/* section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Sistema PDV <span>completo</span> para seu negócio</h1>
            <p>
              O Sun PDV é a solução perfeita para gerenciar suas vendas com eficiência 
              e profissionalismo. Ideal para varejo, supermercados e restaurantes.
            </p>
            <Link to="/Download" className="btn-primary">Baixar Agora</Link>
          </div>
          <div className="hero-image">
            <div className="img-tela">
              <img className="product-screenshot" src="/Tela_de_cadastro.png" alt="Tela de cadastro do Sun PDV" />
            </div>
          </div>
        </section>

       

        <section className="features-section">
            <div className="section-title-container">
              <div className="section-title" id="titulo">
                  <h2>Por que escolher o <span id="cor2">Sun PDV</span> ?</h2>
                    <p>Conheça as vantagens do nosso sistema de gestão de vendas</p>
              </div>
                </div>



          <div className="features-grid">
            <div className="feature-card" id="cartoes">
              <div className="feature-icon">🚀</div>
              <h3>Rápido e Eficiente</h3>
              <p>Processamento ágil de vendas mesmo com grande movimento</p>
            </div>

            <div className="feature-card" id="cartoes">
              <div className="feature-icon">💻</div>
              <h3>Multiplataforma</h3>
              <p>Funciona em Windows e Linux sem problemas de compatibilidade</p>
            </div>

            
          </div>
        </section>
      </main>

      {/* Footer */}
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

        <div className="copyright">
          <p>Copyright 2024 © Sun PDV Software - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;