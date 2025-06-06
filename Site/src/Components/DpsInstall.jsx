
import { useNavigate } from 'react-router-dom';
import './styles/ObrigadoPage.css';

const DpsInstall = () => {
  const navigate = useNavigate();



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
            <a href="/Sobre-Nos" className="nav-link">Sobre Nós</a>
            <a href="/Download" className="nav-link">Download</a>
            
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <section className="thank-you-section">
          <div className="thank-you-card">
            <div className="checkmark">✓</div>
            <h1 className="title">Obrigado por baixar nosso sistema!</h1>
            <p className="subtitle">
              Agora, siga os passos abaixo para se cadastrar e começar a usar o Sun PDV.
            </p>
            
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Execute o instalador</h3>
                  <p>Localize o arquivo baixado e execute a instalação</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Complete seu cadastro</h3>
                  <p>Registre-se para ativar sua licença</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Comece a usar</h3>
                  <p>Configure seu estabelecimento e comece as vendas</p>
                </div>
              </div>
            </div>

            <button 
              className="register-btn" 
              onClick={() => navigate('/cadastro')}
            >
              Cadastre-se Agora
            </button>

            <p className="support-text">
              Precisa de ajuda? <a href="https://wa.me/12997703313" className="support-link">Fale com nosso suporte</a>
            </p>
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
  }

export default DpsInstall;