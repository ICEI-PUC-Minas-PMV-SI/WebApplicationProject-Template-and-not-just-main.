const api = 'http://localhost:3000';

async function initAccounts() {
    //Encontra a tabela
    const table = document.getElementById('tableAccounts')
    // Remove todas as linhas do corpo da tabela
    table.innerHTML = "";

    //Encontra as selects
    const accountRole = document.getElementById("accountRole")
    const accountCategory = document.getElementById("accountCategory")

    //Reseta as selects
    accountRole.innerHTML = "";
    accountCategory.innerHTML = "";
  
    //Reseta os campos do formulário
    const form = document.getElementById('accountForm')
    form.reset()
  
    //Cria a instância do modal
    const accountModal = new bootstrap.Modal(document.getElementById('accountModal'), {})
  
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
      accountRole.insertAdjacentHTML("beforeend",`
      <option value="${role}">${role}</option>`);
    }
  
    //Popula a select de categorias com as categorias disponíveis
    for (i = 0; i < categories.length; i++) {
      const category = categories[i];    
      accountCategory.insertAdjacentHTML("beforeend",`
      <option value="${category}">${category}</option>`);
    }
      
    axios.get(`${api}/accounts`).then(res => {
      const accounts = res.data;
      // Popula a tabela com os registros do banco de dados
      for (i = 0; i < accounts.length; i++) {
        const account = accounts[i];    
        document.getElementById("tableAccounts").insertAdjacentHTML("beforeend",`
        <tr>
          <td scope="row" style="display: none;">${account._id}</td>
          <td>${account.name}</td>
          <td>${account.email}</td>
          <td>${account.phone}</td>
          <td>${account.apartment}</td>
          <td>${account.role}</td>
          <td>${account.category}</td>        
        </tr>`);
      }

      let rows = table.querySelectorAll("tr")

      Array.from(rows).forEach(async function(element) {
        element.addEventListener('click', onRowClick);
      });

    }).catch(err => {
      console.log(err)
    })

    function onRowClick() {
      const columns = this.querySelectorAll("td")
  
      const account = {
        _id: columns[0].innerText,
        name: columns[1].innerText,
        email: columns[2].innerText,
        phone: columns[3].innerText,
        apartment: columns[4].innerText,
        role: columns[5].innerText,
        category: columns[6].innerText,
      }

      //Encontra os inputs do formulário
      const _id = document.getElementById('accountId')
      const name = document.getElementById('accountName')
      const email = document.getElementById('accountEmail')
      const phone = document.getElementById('accountPhone')
      const apartment = document.getElementById('accountApartment')
      const role = document.getElementById('accountRole')
      const category = document.getElementById('accountCategory')
  
      //Preenche os inputs com os dados da tabela
      _id.value = account._id
      name.value = account.name
      email.value = account.email
      phone.value = account.phone
      apartment.value = account.apartment
      role.value = account.role
      category.value = account.category
  
      //Deixa visível os elementos necessários
      const deleteButton = document.getElementById('accountDelete')
      deleteButton.style.visibility = 'visible'

      //Esconde os elementos desnecessários
      const pwd = document.getElementById('passDiv')      
      pwd.style.visibility = 'hidden'      

      //Abre o Modal com os valores carregados
      accountModal.show()
    }
  }
  
  function handleInsertAccount() {
    //Reseta os campos do formulário
    const form = document.getElementById('accountForm')
    form.reset()
  
    //Encontra o modal
    const modal = document.getElementById('accountModal')
    const accountModal = bootstrap.Modal.getInstance(modal)
    //Deixa visível os elementos necessários
    const pwd = document.getElementById('passDiv')      
    pwd.style.visibility = 'visible'      
    //Esconde os elementos desnecessários
    const deleteButton = document.getElementById('accountDelete')
    deleteButton.style.visibility = 'hidden'
    //Abre o modal
    accountModal.show()
  }
  
function handleSubmitAccount() {
  //Encontra os inputs do formulário
  const _id = document.getElementById('accountId')
  const name = document.getElementById('accountName')
  const email = document.getElementById('accountEmail')
  const phone = document.getElementById('accountPhone')
  const apartment = document.getElementById('accountApartment')
  const role = document.getElementById('accountRole')
  const category = document.getElementById('accountCategory')
  const password = document.getElementById('accountPassword')
  const confirmPassword = document.getElementById('accountConfirmPassword')

  if(password.value !== confirmPassword.value) {
    alert('As senhas informadas não são iguais!')
  } else {
    //Encontra o modal
    const modal = document.getElementById('accountModal')
    const accountModal = bootstrap.Modal.getInstance(modal)

    const account = { 
      name: name.value, 
      email: email.value, 
      phone: phone.value, 
      apartment: apartment.value, 
      role: role.value, 
      category: category.value
    }
    
    //Verifica se existe o id e cadastra/altera dependendo do resultado
    if(!_id.value) {
      //Fazer a call do axios aqui para incluir um novo usuário
      axios.post(`${api}/accounts`, {...account, password: password.value}).then(res => {
        alert(`Usuário ${res.data.name} cadastrado com sucesso!`)
        //Reseta a Tabela
        initAccounts()
        //Esconde o Modal
        accountModal.hide()
      }).catch(err => 
        alert(`${err}`)
      )
    } else {
      //Fazer a call do axios aqui para atualizar um usuário existente
      axios.patch(`${api}/accounts/${_id.value}`, account).then(res => {        
        alert(`Usuário ${res.data.name} alterado com sucesso!`)
        //Reseta a Tabela
        initAccounts()
        //Esconde o Modal
        accountModal.hide()
      }).catch(err =>
        alert(`${err}`)
      )
    } 
  }
}

function handleDeleteAccount() {
  const _id = document.getElementById('accountId')

}