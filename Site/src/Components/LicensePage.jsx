import './styles/LicensePage.css';

const LicensePage = () => {
  return (
    <div className="app-container">
      {/* Header (mesmo de outras páginas) */}

      <main className="policy-container">
        <div className="policy-header">
          <h1>Licença do <span>Sun PDV</span></h1>
          <p>Detalhes sobre licenciamento e uso comercial</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Tipos de Licença</h2>
            
            <h3>1.1 Licença Básica</h3>
            <ul>
              <li>Uso em um único estabelecimento</li>
              <li>Até 3 caixas simultâneos</li>
              <li>Suporte por e-mail</li>
            </ul>

            <h3>1.2 Licença Empresarial</h3>
            <ul>
              <li>Uso em até 5 estabelecimentos</li>
              <li>Caixas ilimitados</li>
              <li>Suporte prioritário 24/7</li>
            </ul>
          </div>


          <div className="last-updated">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>

      {/* Footer (mesmo de outras páginas) */}
    </div>
  );
};

export default LicensePage;