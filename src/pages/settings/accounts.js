async function initAccounts() {
    //Encontra a tabela
    const table = document.getElementById('tableAccounts')
    // Remove todas as linhas do corpo da tabela
    table.innerHTML = "";
  
    //Reseta os campos do formulário
    const form = document.getElementById('accountForm')
    form.reset()
     
     
  
    //Encontra o modal
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
      document.getElementById("selectRole").insertAdjacentHTML("beforeend",`
      <option value="${role}">${role}</option>`);
    }
  
    //Popula a select de categorias com as categorias disponíveis
    for (i = 0; i < categories.length; i++) {
      const category = categories[i];    
      document.getElementById("selectCategory").insertAdjacentHTML("beforeend",`
      <option value="${category}">${category}</option>`);
    }
  
    const accounts = [
      {
        _id: '1',
        name: 'Seu Barriga',
        email: 'seubarriga@example.com',
        phone: '999999999',
        apartment: '1A',
        role: 'Administrador',
        category: 'Proprietário do Condomínio',
      },
      {
        _id: '2',
        name: 'Chaves',
        email: 'chaves@example.com',
        phone: '999999999',
        apartment: '2A',
        role: 'Administrador',
        category: 'Funcionário',
      },
      {
        _id: '3',
        name: 'Dona Florinda',
        email: 'florinda@example.com',
        phone: '999999999',
        apartment: '4A',
        role: 'Condomíno',
        category: 'Morador(a)',
      },
      {
        _id: '4',
        name: 'Seu Madruga',
        email: 'madruga@example.com',
        phone: '999999999',
        apartment: '2B',
        role: 'Condomíno',
        category: 'Morador(a)',
      },
    ];
  
    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < accounts.length; i++) {
      const account = accounts[i];    
      document.getElementById("tableAccounts").insertAdjacentHTML("beforeend",`
      <tr id="${account._id}">
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
    
    Array.from(rows).forEach(function(element) {
      element.addEventListener('click', onRowClick);
    });
  
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
      const _id = document.getElementById('inputId')
      const name = document.getElementById('inputName')
      const email = document.getElementById('inputEmail')
      const phone = document.getElementById('inputPhone')
      const apartment = document.getElementById('inputApartment')
      const role = document.getElementById('selectRole')
      const category = document.getElementById('selectCategory')
  
      //Preenche os inputs com os dados da tabela
      _id.value = account._id
      name.value = account.name
      email.value = account.email
      phone.value = account.phone
      apartment.value = account.apartment
      role.value = account.role
      category.value = account.category
  
      //Abre o Modal com os valores carregados
      accountModal.show()
    }
  
  
    // axios.get('http://localhost:3000/accounts').then(res => {
    //   const accounts = res.data;
    //   // Popula a tabela com os registros do banco de dados
    //   for (i = 0; i < accounts.length; i++) {
    //     const account = accounts[i];    
    //     document.getElementById("tableAccounts").insertAdjacentHTML("beforeend",`
    //     <tr>
    //       <td scope="row" style="display: none;">${account._id}</td>
    //       <td>${account.name}</td>
    //       <td>${account.email}</td>
    //       <td>${account.phone}</td>
    //       <td>${account.apartment}</td>
    //       <td>${account.role}</td>
    //       <td>${account.category}</td>        
    //     </tr>`);
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
  }
  
  function handleInsertAccount() {
    //Reseta os campos do formulário
    const form = document.getElementById('accountForm')
    form.reset()
  
    //Encontra o modal
    const accountModal = new bootstrap.Modal(document.getElementById('accountModal'), {})
    //Abre o modal
    accountModal.show()
  }
  
  function handleSubmitAccount() {
    //Encontra os inputs do formulário
    const _id = document.getElementById('inputId')
    const name = document.getElementById('inputName')
    const email = document.getElementById('inputEmail')
    const phone = document.getElementById('inputPhone')
    const apartment = document.getElementById('inputApartment')
    const role = document.getElementById('selectRole')
    const category = document.getElementById('selectCategory')
  
    //Verifica se existe o id e cadastra/altera dependendo do resultado
    if(!_id.value) {
      console.log('insert account')
      //Fazer a call do axios aqui para incluir um novo usuário
    } else {
      console.log(`update account ${_id.value}`)
      //Fazer a call do axios aqui para atualizar um usuário existente
    }
  }
  
  
  function handleDeleteAccount() {
    const _id = document.getElementById('inputId')
  
  }