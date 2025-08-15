import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/RegisterStyle.css';

const Register = () => {
  const navigate = useNavigate();

  // Estados para capturar os dados do formulário
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  // Estados para mensagens
  const [mensagem, setMensagem] = useState(null);
  const [tipoMensagem, setTipoMensagem] = useState(""); // "sucesso" ou "erro"

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação de senha
    if (senha !== confirmSenha) {
      setMensagem("As senhas não coincidem!");
      setTipoMensagem("erro");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/cadastro', {
        email,
        nome,
        senha,
        cargo: parseInt(cargo)
      
      });

      setMensagem(response.data.mensagem);
      setTipoMensagem("sucesso");

      // Redireciona após 2 segundos
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      if (error.response) {
        setMensagem(error.response.data.erro || 'Erro ao cadastrar usuário!');
      } else {
        setMensagem('Erro ao cadastrar o usuário!');
      }
      setTipoMensagem("erro");
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        {/* Navbar se necessário */}
      </header>

      <main className="main-content">
        <div className="register-container">
          <div className="register-card">

            {/* Mensagem de alerta */}
            {mensagem && (
              <div className={`alerta ${tipoMensagem}`}>
                {mensagem}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <h2>Cadastro de Usuário</h2>

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
                <label htmlFor='nome'>Nome</label>
                <input 
                  type="text" 
                  id="nome"
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
                  <option value="1">Administrador</option>
                  <option value="2">Moderador</option>
                  <option value="3">Funcionário</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input 
                  type="password" 
                  id="senha"
                  placeholder="Digite sua senha" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  minLength="8"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmSenha">Confirme sua Senha</label>
                <input 
                  type="password" 
                  id="confirmSenha"
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
