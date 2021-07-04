async function showAccounts() {
  // Remove todas as linhas do corpo da tabela
  document.getElementById("table-accounts").innerHTML = "";

  axios.get('http://localhost:3000/accounts').then(res => {
    const accounts = res.data;
    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < accounts.length; i++) {
      const account = accounts[i];    
      document.getElementById("table-accounts").insertAdjacentHTML("beforeend",`
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
  }).catch(err => {
    console.log(err)
  })
}