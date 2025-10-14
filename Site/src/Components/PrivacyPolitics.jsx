import './styles/PolicyPages.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="app-container">
      {/* Header*/}
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
          <h1>Política de <span>Privacidade</span></h1>
          <p>Como protegemos e utilizamos suas informações no Sun PDV</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Informações que Coletamos</h2>
            <p>Coletamos os seguintes tipos de informações quando você usa o Sun PDV:</p>
            
            <h3>1.1 Informações de Cadastro</h3>
            <ul>
              <li>Endereço de e-mail</li>
              <li>Dados pessoais como Nome</li>
            </ul>

            <h3>1.2 Dados de Uso</h3>
            <p>Coletamos informações sobre como você interage com nosso software, incluindo:</p>
            <ul>
              <li>Logs de acesso</li>
              <li>Funcionalidades utilizadas</li>
              <li>Erros e problemas reportados</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Como Utilizamos Seus Dados</h2>
            <p>Utilizamos suas informações para:</p>
            <ul>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Oferecer suporte técnico</li>
              <li>Enviar atualizações importantes</li>
              <li>Garantir a segurança do sistema</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Proteção de Dados</h2>
            <p>Implementamos medidas de segurança para proteger suas informações:</p>
            <ul>
              <li>Criptografia de dados sensíveis</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento contínuo de segurança</li>
            </ul>
          </div>

          <div className="last-updated">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>

      {/* Footer*/}
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

export default PrivacyPolicy;