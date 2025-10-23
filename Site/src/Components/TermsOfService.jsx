import './styles/PolicyPages.css';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          <h1>Termos de <span>Uso</span></h1>
          <p>Condições gerais para utilização do Sun PDV</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao instalar ou utilizar o Sun PDV, você concorda com estes Termos de Uso e se compromete a cumprir todas as disposições aqui estabelecidas.</p>
          </div>

          <div className="policy-section">
            <h2>2. Licença de Uso</h2>
            <p>Concedemos uma licença limitada, não exclusiva e intransferível para usar o Sun PDV de acordo com as condições especificadas neste documento.</p>
            
            <h3>2.1 Restrições</h3>
            <p>Você concorda em não:</p>
            <ul>
              <li>Copiar, modificar ou distribuir o software ilegalmente</li>
              <li>Usar o software para fins ilegais</li>
              <li>Contornar medidas de segurança</li>
              <li>Realizar engenharia reversa do código</li>
              <li>Remover avisos de direitos autorais</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>3. Responsabilidades do Usuário</h2>
            <p>Ao utilizar o Sun PDV, você se responsabiliza por:</p>
            <ul>
              <li>Manter a segurança de suas credenciais de acesso</li>
              <li>Garantir a precisão dos dados inseridos no sistema</li>
              <li>Cumprir com todas as leis e regulamentos aplicáveis</li>
            </ul>
          </div>

          <div className="last-updated">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>

     {/* Footer */}
      <footer className="footer">
              <div className="footer-content">
                <div className="footer-column">
                  <h3>Sun PDV</h3>
                  <p>Soluções completas para gestão de vendas e fluxo de caixa</p>
                </div>
      
                <div className="footer-column">
                  <h3>Contato</h3>
                  <ul className="footer-links">
                    <li>suporte@sunpdv.com</li>
                    <li>(12) 3456-7890</li>
                    <li>WhatsApp: (12) 98765-4321</li>
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