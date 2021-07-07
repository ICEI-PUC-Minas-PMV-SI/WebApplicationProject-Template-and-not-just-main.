async function initAssemblies() {
  //Encontra a tabela
  const table = document.getElementById('tableAssemblies')
  // Remove todas as linhas do corpo da tabela
  table.innerHTML = "";

  //Reseta os campos do formulário
  const form = document.getElementById('assemblyForm')
  form.reset()
   
   

  //Encontra o modal
  const assemblyModal = new bootstrap.Modal(document.getElementById('assemblyModal'), {})

  const priorities = [
    "Baixa",
    "Média",
    "Alta",
  ]

  //Popula a select de perfis com os perfis disponíveis
  for (i = 0; i < priorities.length; i++) {
    const priority = priorities[i];    
    document.getElementById("selectPriority").insertAdjacentHTML("beforeend",`
    <option value="${priority}">${priority}</option>`);
  }

  const assemblies = [
    {
      _id: '1',
      name: 'Assembléia 1',
      subject: 'Áreas Comuns',
      date: '20/07/2021 19:00',
      createdBy: 'Chaves',
      obs: 'Assembléia para discutir o uso das áreas comuns',
      priority: 'Média',
    },
    {
      _id: '2',
      name: 'Assembléia 2',
      subject: 'Garagem',
      date: '22/07/2021 19:30',
      createdBy: 'Chaves',
      obs: 'Assembléia para discutir o uso devido das garagens do edifício',
      priority: 'Alta',
    },
    {
      _id: '3',
      name: 'Assembléia 3',
      subject: 'Lixeiras',
      date: '30/07/2021 20:00',
      createdBy: 'Chaves',
      obs: 'Assembléia para discutir o uso incorreto das lixeiras',
      priority: 'Baixa',
    },
    {
      _id: '4',
      name: 'Assembléia 4',
      subject: 'Assembléia Semestral',
      date: '22/08/2021 19:00',
      createdBy: 'Seu Barriga',
      obs: 'Assembléia para discutir o uso das áreas comuns',
      priority: 'Alta',
    },
  ];

  // Popula a tabela com os registros do banco de dados
  for (i = 0; i < assemblies.length; i++) {
    const assembly = assemblies[i];    
    document.getElementById("tableAssemblies").insertAdjacentHTML("beforeend",`
    <tr id="${assembly._id}">
      <td scope="row" style="display: none;">${assembly._id}</td>
      <td>${assembly.name}</td>
      <td>${assembly.subject}</td>
      <td>${assembly.obs}</td>
      <td>${assembly.date}</td>
      <td>${assembly.priority}</td>
      <td>${assembly.createdBy}</td>        
    </tr>`);
  }

  
  let rows = table.querySelectorAll("tr")
  
  Array.from(rows).forEach(function(element) {
    element.addEventListener('click', onRowClick);
  });

  function onRowClick() {
    const columns = this.querySelectorAll("td")

    const assembly = {
      _id: columns[0].innerText,
      name: columns[1].innerText,
      subject: columns[2].innerText,
      obs: columns[3].innerText,
      date: columns[4].innerText,
      priority: columns[5].innerText,
      createdBy: columns[6].innerText,
    }

    
    //Encontra os inputs do formulário
    const _id = document.getElementById('inputId')
    const name = document.getElementById('inputName')
    const subject = document.getElementById('inpuSubject')
    const obs = document.getElementById('inputObs')
    const date = document.getElementById('inputDate')
    const priority = document.getElementById('selectPriority')
    const createdBy = document.getElementById('inputCreatedBy')

    //Preenche os inputs com os dados da tabela
    _id.value = assembly._id
    name.value = assembly.name
    subject.value = assembly.subject
    obs.value = assembly.obs
    date.value = assembly.date
    priority.value = assembly.priority
    createdBy.value = assembly.createdBy

    //Abre o Modal com os valores carregados
    assemblyModal.show()
  }


  // axios.get('http://localhost:3000/assemblies').then(res => {
  //   const assemblies = res.data;
  //   // Popula a tabela com os registros do banco de dados
  //   for (i = 0; i < assemblies.length; i++) {
  //     const assembly = assemblies[i];    
  //     document.getElementById("table-assemblies").insertAdjacentHTML("beforeend",`
  //     <tr>
  //       <td scope="row" style="display: none;">${assembly._id}</td>
  //       <td>${assembly.name}</td>
  //       <td>${assembly.subject}</td>
  //       <td>${assembly.obs}</td>
  //       <td>${assembly.date}</td>
  //       <td>${assembly.priority}</td>
  //       <td>${assembly.createdBy}</td>        
  //     </tr>`);
  //   }
  // }).catch(err => {
  //   console.log(err)
  // })
}

function handleInsertAssembly() {
  //Reseta os campos do formulário
  const form = document.getElementById('assemblyForm')
  form.reset()

  //Encontra o modal
  const assemblyModal = new bootstrap.Modal(document.getElementById('assemblyModal'), {})
  //Abre o modal
  assemblyModal.show()
}

function handleSubmitAssembly() {
  //Encontra os inputs do formulário
  const _id = document.getElementById('inputId')
  const name = document.getElementById('inputName')
  const subject = document.getElementById('inpuSubject')
  const obs = document.getElementById('inputObs')
  const date = document.getElementById('inputDate')
  const priority = document.getElementById('selectPriority')
  const createdBy = document.getElementById('inputCreatedBy')

  //Verifica se existe o id e cadastra/altera dependendo do resultado
  if(!_id.value) {
    console.log('insert assembly')
    //Fazer a call do axios aqui para incluir um novo usuário
  } else {
    console.log(`update assembly ${_id.value}`)
    //Fazer a call do axios aqui para atualizar um usuário existente
  }
}


function handleDeleteAssembly() {
  const _id = document.getElementById('inputId')

}