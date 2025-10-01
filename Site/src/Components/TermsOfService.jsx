import './styles/PolicyPages.css';

const TermsOfService = () => {
  return (
    <div className="app-container">
      {/* Header (mesmo de outras páginas) */}

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
    </div>
  );
};

export default TermsOfService;