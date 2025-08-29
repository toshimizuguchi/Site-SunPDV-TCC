import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/DownloadPage.css"; //Estilização da pagina

const PagDown = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/obrigado");
    setIsDownloading(true);

    setTimeout(() => {
      const fileUrl = "/arquivos/pagdown.zip";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "pagdown.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-sunpdv">
              <img src="./public/logosunpdv.png" alt="Logo SunPDV" className="sun-logo" />
            </div>
           
          </div>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Sobre-Nos" className="nav-link">Sobre Nós</Link>
            <Link to="/Download" className="nav-link active">Download</Link>
            
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="hero">
          <div className="hero-content">
          <h1 className="title">
            Baixe o{' '}
            <span style={{ color: 'var(--primary)' }}>Sun</span>
            <span style={{ color: 'var(--secondary)' }}>PDV</span>
            </h1>
            <p>
              O sistema completo para gestão de vendas e controle do seu negócio. 
              Rápido, eficiente e fácil de usar.
            </p>
            
            <div className="system-requirements">
              <h2 className="section-title">Requisitos do Sistema</h2>
              <ul className="requirements-list">
                <li>Windows 10 ou superior / Linux (Ubuntu 20.04+)</li>
                <li>Processador Intel i3 ou superior</li>
                <li>4GB de RAM (8GB recomendado)</li>
                <li>500MB de espaço em disco</li>
              </ul>
            </div>

            <button 
              className={`download-btn ${isDownloading ? "loading" : ""}`} 
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>📥 Baixar Sun PDV</>
              )}
            </button>
          </div>

          <div className="hero-image">
            <img 
              src="./public/telafunc.png" 
              alt="Sun PDV em funcionamento" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <section className="features-section">
          <div className="section-title">
            <h2>Como instalar?</h2>
            <p>Siga estas instruções simples para começar a usar o Sun PDV</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>Baixe o instalador</h3>
              <p>Clique no botão de download para obter o arquivo de instalação</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>Execute o instalador</h3>
              <p>Siga as instruções na tela para completar a instalação</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>Configure o sistema</h3>
              <p>Abra o Sun PDV e configure conforme as necessidades do seu negócio</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-title">
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas dúvidas sobre o Sun PDV</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>O Sun PDV é gratuito?</h3>
              <p>Sim, é de uso gratuito e não precisa de licença</p>
            </div>

            <div className="feature-card">
              <h3>Precisa de internet para funcionar?</h3>
              <p>O Sun PDV funciona totalmente offline. Apenas para atualizações e backup na nuvem é necessária conexão.</p>
            </div>

            <div className="feature-card">
              <h3>Posso instalar em mais de um computador?</h3>
              <p>SIm. Oferecemos múltiplas interações.</p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2>Pronto para revolucionar seu negócio?</h2>
          <button 
            className={`download-btn ${isDownloading ? "loading" : ""}`} 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>📥 Baixar Agora</>
            )}
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Sun PDV</h3>
            <ul className="footer-links">
              <li><Link to="/home">Home</Link></li>
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

export default PagDown;