const api = 'https://server-puc-condominio.herokuapp.com';

function initAccount() {
  const name = document.getElementById('inputName')
  const email = document.getElementById('inputEmail')
  const phone = document.getElementById('inputPhone')
  const apartment = document.getElementById('inputApartment')
  const role = document.getElementById('selectRole')
  const category = document.getElementById('selectCategory')

  const roles = [
    "Administrador",
    "Síndico",
    "Condomíno",
    "Zelador"
  ]

  const categories = [
    "Proprietário do Condomínio",
    "Proprietário",
    "Morador(a)",
    "Funcionário"
  ]

  //Popula a select de perfis com os perfis disponíveis
  for (i = 0; i < roles.length; i++) {
    const role = roles[i];    
    document.getElementById("selectRole").insertAdjacentHTML("beforeend",`
    <option value="${role}">${role}</option>`);
  }

  //Popula a select de categorias com as categorias disponíveis
  for (i = 0; i < categories.length; i++) {
    const category = categories[i];    
    document.getElementById("selectCategory").insertAdjacentHTML("beforeend",`
    <option value="${category}">${category}</option>`);
  }

  //Preenche os campos com os dados do usuário armazenados no LocalStorage
  const account = JSON.parse(localStorage.getItem('account'))
  
  name.value = account.name
  email.value = account.email
  phone.value = account.phone
  apartment.value = account.apartment
  role.value = account.role
  category.value = account.category
}

async function updatePersonalInfo() {
  const account = JSON.parse(localStorage.getItem('account'))

  //Encontra os inputs do formulário
  const name = document.getElementById('inputName')
  const email = document.getElementById('inputEmail')
  const phone = document.getElementById('inputPhone')
  
  const updated = {
    name: name.value,
    email: email.value,
    phone: phone.value
  }
  //Fazer a call do axios aqui para atualizar o usuário atual
  axios.patch(`${api}/accounts/${account._id}`, updated).then(res => {        
    //Atualiza local storage com o novo usuário
    localStorage.setItem('account', JSON.stringify(res.data));
    alert(`Usuário atualizado com sucesso!`)
  }).catch(err =>
    alert(`${err}`)
  )
}

async function updatePassword() {
  const account = JSON.parse(localStorage.getItem('account'))
  console.log(account)
  //Encontra os inputs do formulário
  const password = document.getElementById('inputCurrentPassword')
  const newPassword = document.getElementById('inputNewPassword')
  const confirmPassword = document.getElementById('inputConfirmPassword')

  if(password.value !== account.password) {
    alert('Senha atual inválida!')
  } else if (newPassword.value !== confirmPassword.value) {
    alert('Nova senha e confirmação de senha não são iguais!')
  } else {
    //Fazer a call do axios aqui para atualizar o usuário atual
    axios.patch(`${api}/accounts/${account._id}`, {password: newPassword.value}).then(res => {        
      //Atualiza local storage com o novo usuário
      localStorage.setItem('account', JSON.stringify(res.data));     
      alert(`Usuário atualizado com sucesso!`)
    }).catch(err =>
      alert(`${err}`)
    )
  }
}