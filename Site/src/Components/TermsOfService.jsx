import './styles/PolicyPages.css';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="app-container">
      {/* Header (mesmo de outras páginas) */}
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

      <main className="policy-container">
        <div className="policy-header">
          <h1>Termos de <span>Uso</span></h1>
          <p>Condições gerais para utilização do Sun PDV</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao instalar ou utilizar o Sun PDV, você concorda com estes Termos de Uso.</p>
          </div>

          <div className="policy-section">
            <h2>2. Licença de Uso</h2>
            <p>Concedemos uma licença limitada, não exclusiva e intransferível para usar o Sun PDV.</p>
            
            <h3>2.1 Restrições</h3>
            <p>Você concorda em não:</p>
            <ul>
              <li>Copiar, modificar ou distribuir o software ilegalmente</li>
              <li>Usar o software para fins ilegais</li>
              <li>Contornar medidas de segurança</li>
            </ul>
          </div>

          <div className="last-updated">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>

      {/* Footer (mesmo de outras páginas) */}
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
};

export default TermsOfService;