import './styles/PolicyPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="app-container">
      {/* Header (mesmo de outras páginas) */}

      <main className="policy-container">
        <div className="policy-header">
          <h1>Política de <span>Privacidade</span></h1>
          <p>Como protegemos e utilizamos suas informações</p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <h2>1. Informações que Coletamos</h2>
            <p>Coletamos os seguintes tipos de informações quando você usa o Sun PDV:</p>
            
            <h3>1.1 Informações de Cadastro</h3>
            <ul>
              <li>Endereço de e-mail</li>
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

          <div className="last-updated">
            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>

      {/* Footer (mesmo de outras páginas) */}
    </div>
  );
};

export default PrivacyPolicy;