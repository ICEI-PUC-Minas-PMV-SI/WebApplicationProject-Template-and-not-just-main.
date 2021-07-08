const api = 'https://server-puc-condominio.herokuapp.com';

async function login(args) {
  axios.post(`${api}/auth`, args).then(res => {
    //Persiste os dados do usuário no LocalStorage
    localStorage.setItem('account', JSON.stringify(res.data));

    //Redireciona para a Página Inicial
    window.location.href = '../index.html';
  }).catch(err => {
    alert('Usuário e/ou senha inválidos!');
  })  
}

async function handleLogin(event) {                
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const args = {email, password}
  console.log(args)

  await login(args);
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);