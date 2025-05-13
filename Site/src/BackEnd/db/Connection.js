// Carregar as variáveis de ambiente
import dotenv from 'dotenv';
import sql from 'mssql';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Verificar se as variáveis estão carregadas corretamente
console.log('Servidor:', process.env.AZURE_SQL_SERVER);
console.log('Usuário:', process.env.AZURE_SQL_USER);

// Configuração da conexão com o banco de dados Azure
const config = {
  user: process.env.AZURE_SQL_USER,           // Usuário do banco de dados
  password: process.env.AZURE_SQL_PASSWORD,   // Senha do banco de dados
  server: process.env.AZURE_SQL_SERVER,       // Endereço do servidor (do arquivo .env)
  database: process.env.AZURE_SQL_DATABASE,   // Nome do banco de dados
  port: 1433,                                // Porta padrão do SQL Server no Azure (pode ser alterada, caso necessário)
  options: {
    encrypt: true,                            // Necessário para conexão com o Azure SQL
    trustServerCertificate: true             // Pode ser necessário se o certificado do servidor não for confiável
  }
};

// Função para testar a conexão com o banco de dados
async function conectar() {
  try {
    // Conectando ao banco de dados Azure
    await sql.connect(config);
    console.log('Conectado com sucesso ao banco de dados Azure!');

    // Exemplo de consulta
    const result = await sql.query('SELECT TOP 10 * FROM sua_tabela');
    console.log('Dados da tabela:', result.recordset);  // Exibindo os resultados da consulta
  } catch (err) {
    console.error('Erro de conexão:', err);  // Exibindo erros caso a conexão falhe
  }
}

// Chamar a função de conexão
conectar();
