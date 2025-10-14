
import { Link, useNavigate } from 'react-router-dom'; //navegação entre rotas de forma mais rapida e eficiente
import './styles/ObrigadoPage.css';

const DpsInstall = () => {
  const navigate = useNavigate();



  return (
    <div className="app-container">
      {/*Navbar*/}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-sunpdv">
              <img src="/logosunpdv.png" alt="Logo SunPDV" className="sun-logo" />
            </div>
           
          </div>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Sobre-Nos" className="nav-link">Sobre Nós</Link>
            <Link to="/Download" className="nav-link">Download</Link>
            
          </nav>
        </div>
      </header>

      {/* Main principal */}
      <main className="main-content">
        <section className="thank-you-section">
          <div className="thank-you-card">
            <div className="checkmark">✓</div>
            <h1 className="title">Obrigado por baixar nosso sistema!</h1>
            <p className="subtitle">
              Agora, siga os passos abaixo para começar a usar o Sun PDV.
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
                  <p>Registre-se no Sistema</p>
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

            

            <p className="support-text">
              Precisa de ajuda? <Link to="https://wa.me/12997703313" className="support-link">Fale com nosso suporte</Link>
            </p>
          </div>
        </section>
      </main>

      {/*footer*/}
<footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <h3>Sun PDV</h3>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sobre-Nos">Sobre Nós</Link></li>
        <li><Link to="/Download">Download</Link></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Suporte</h3>
      <ul className="footer-links">
        <li><Link to="/contato">Contato</Link></li>
        
      </ul>
    </div>

    <div className="footer-column">
      <h3>Legal</h3>
      <ul className="footer-links">
        <li><Link to="/privacidade">Política de Privacidade</Link></li>
        <li><Link to="/termos">Termos de Uso</Link></li>
        <li><Link to="/licenca">Licença</Link></li>
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