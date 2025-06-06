import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando axios
import './styles/RegisterStyle.css';
import Axios from "axios";




const Register = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  // Estados para capturar os dados do formulário
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
=======
  const handleSubmit = (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  const email = e.target[0].value;
  const name = e.target[1].value;
  const cargo = e.target[2].value;
  const senha = e.target[3].value;
  const confirmSenha = e.target[4].value;

  if (senha !== confirmSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  Axios.post("http://localhost:3001/cadastro", {
    Nome: name,
    Email: email,
    Senha: senha,
    Cargo: cargo
  })
    .then((res) => {
      alert(res.data.message || "Cadastro feito com sucesso!");
      navigate('/'); // Redireciona para a home
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao cadastrar usuário.");
    });
};
>>>>>>> 94e051d28041d6dc277063acc3d5b2799edf560d

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
<<<<<<< HEAD
=======
            <div className="logo-container">
                <img className="sunreg-logo" src="/logo2.png" />
             </div>
              <span className="sub-title">Crie sua conta</span>
            
            
>>>>>>> 94e051d28041d6dc277063acc3d5b2799edf560d
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
<<<<<<< HEAD
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
=======
                  <label htmlFor="cargo">Cargo</label>
                  <select id="cargo" name="cargo" required className="form-control">
                    <option value="">Selecione seu cargo</option>
                    <option value="1">Administrador</option>
                    <option value="2">Moderador</option>
                    <option value="3">Funcionario</option>
                </select>
                  
                </div>
                              
>>>>>>> 94e051d28041d6dc277063acc3d5b2799edf560d
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
