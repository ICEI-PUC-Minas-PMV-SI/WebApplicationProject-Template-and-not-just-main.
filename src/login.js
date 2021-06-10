function login (username, password) {
    const accounts = [
        { "id": 1, "username": "admin", "password": "admin.123", "name": "Administrador", "email": "admin@example.com" },
        { "id": 2, "username": "sindico", "password": "sindico.123", "name": "Síndico", "email": "sindico@example.com" },
        { "id": 3, "username": "condomino", "password": "condomino.123", "name": "Condomíno", "email": "condomino@example.com" }
    ]
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        
        const currentAccount = {};
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (username == account.username && password == account.password) {
            currentAccount.id = account.id;
            currentAccount.username = account.username;
            currentAccount.email = account.email;
            currentAccount.name = account.name;
            
            // Salva os dados do usuário currentAccount no Session Storage, mas antes converte para string
            sessionStorage.setItem ('currentAccount', JSON.stringify (currentAccount));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}