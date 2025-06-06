import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando axios
import './styles/RegisterStyle.css';

const Register = () => {
  const navigate = useNavigate();

  // Estados para capturar os dados do formulário
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica para confirmar senha
    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/cadastro', { email, nome, cargo, senha });

      alert(response.data.mensagem); // Exibir mensagem de sucesso do backend
      navigate('/'); // Redireciona para a página inicial após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário!');
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        {/* Navbar */}
      </header>

      <main className="main-content">
        <div className="register-container">
          <div className="register-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Digite seu email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor='name'>Nome</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome completo" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="cargo">Cargo</label>
                <select 
                  id="cargo" 
                  name="cargo" 
                  value={cargo} 
                  onChange={(e) => setCargo(e.target.value)}
                  required
                >
                  <option value="">Selecione seu cargo</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Moderador">Moderador</option>
                  <option value="Funcionario">Funcionário</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Digite sua senha" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)}
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
                  value={confirmSenha} 
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="register-btn">Criar Conta</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
