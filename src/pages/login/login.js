function login (username, password) {
    const accounts = [
        { "id": 1, "username": "admin", "password": "admin.123", "name": "Administrador", "email": "admin@example.com" },
        { "id": 2, "username": "sindico", "password": "sindico.123", "name": "Síndico", "email": "sindico@example.com" },
        { "id": 3, "username": "condomino", "password": "condomino.123", "name": "Condomíno", "email": "condomino@example.com" }
    ]

    for (var i = 0; i < accounts.length; i++) {
        var account = accounts[i];
        
        const currentAccount = {};

        if (username == account.username && password == account.password) {
            
            currentAccount.id = account.id;
            currentAccount.username = account.username;
            currentAccount.email = account.email;
            currentAccount.name = account.name;
            
            sessionStorage.setItem ('currentAccount', JSON.stringify (currentAccount));

            return true;
        }
    }

    return false;
}