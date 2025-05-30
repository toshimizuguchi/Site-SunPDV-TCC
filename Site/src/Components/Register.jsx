
import { useNavigate } from 'react-router-dom';
import './styles/RegisterStyle.css';
import Axios from "axios";




const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    Axios.post("Https://localhost:5000/cadastro", {
      email: e.target[0].value,
      name: e.target[1].value,
      cargo: e.target[2].value
    }
    )
    

    // Lógica de cadastro aqui
    navigate('/'); // Redireciona após cadastro
  };

  

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
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
        <div className="register-container">
          <div className="register-card">
            <div className="logo-container">
                <img className="sunreg-logo" src="/logo2.png" />
             </div>
              <span className="sub-title">Crie sua conta</span>
            
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Digite seu email" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor='name'>Nome</label>
                <input type="Name" placeholder="Digite seu nome completo" required />
              </div>
              <div className="form-group">
                  <label htmlFor="cargo">Cargo</label>
                  <select 
                    id="cargo" 
                    name="cargo" 
                    required
                    className="form-control"
                  >
                    <option value=""> Selecione seu cargo </option>
                    <option value="Administrador">Administrador</option>
                    <option value="Gerenter">Moderador</option>
                    <option value="vendedor">Funcionario</option>
                    
                  </select>
                </div>
                              
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Digite sua senha" 
                  required
                  minLength="8"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirm-password">Confirme sua Senha</label>
                <input 
                  type="password" 
                  id="confirm-password"
                  placeholder="Confirme sua senha" 
                  required
                />
              </div>
              
              <button type="submit" className="register-btn">
                Criar Conta
              </button>
            </form>
            
            
            
            <div className="terms">
              <p>Ao se registrar, você concorda com nossos <a href="/termos">Termos de Serviço</a> e <a href="/privacidade">Política de Privacidade</a></p>
            </div>
          </div>
        </div>
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
};

export default Register;