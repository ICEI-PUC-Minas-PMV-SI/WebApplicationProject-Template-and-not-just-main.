function logout() {
  const current = localStorage.getItem('account')
  
  //Se o usuário existir, ele será removido do LocalStorage
  if(current) {
    localStorage.removeItem('account')
  }

   //Redireciona para a Página de Login
   //window.location.href = '../pages/login/login.html';
}