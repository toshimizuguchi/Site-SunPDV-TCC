import './styles/LicensePage.css';
import { Link } from 'react-router-dom';

const LicensePage = () => {
  return (
    <div className="app-container">
            {/*Header*/}
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
          <h1>Licença do <span>Sun PDV</span></h1>
          <p>Detalhes sobre licenciamento e uso comercial do software</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Tipos de Licença</h2>
            
            <h3>1.1 Licença Básica</h3>
            <p>Ideal para pequenos negócios que estão começando:</p>
            <ul>
              <li>Uso em um único estabelecimento</li>
              <li>Até 3 caixas simultâneos</li>
              <li>Suporte por e-mail</li>
              <li>Atualizações por 1 ano</li>
              <li>Acesso ao módulo de vendas e estoque</li>
            </ul>

            <h3>1.2 Licença Empresarial</h3>
            <p>Perfeita para negócios em expansão com múltiplas unidades:</p>
            <ul>
              <li>Uso em até 5 estabelecimentos</li>
              <li>Caixas ilimitados</li>
              <li>Suporte prioritário 24/7</li>
              <li>Atualizações vitalícias</li>
              <li>Acesso a todos os módulos do sistema</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Termos de Licenciamento</h2>
            <p>Ao adquirir uma licença do Sun PDV, você concorda com os seguintes termos:</p>
            <ul>
              <li>A licença é perpétua para a versão adquirida</li>
              <li>Não é permitida a redistribuição do software</li>
              <li>Cada licença está vinculada ao CNPJ da empresa</li>
              <li>Suporte técnico conforme o plano contratado</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Como Adquirir</h2>
            <p>Para adquirir uma licença do Sun PDV:</p>
            <ul>
              <li>Entre em contato com nossa equipe comercial</li>
              <li>Solicite um orçamento personalizado</li>
              <li>Escolha o plano que melhor atende às suas necessidades</li>
              <li>Receba sua chave de ativação por e-mail</li>
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

export default LicensePage;