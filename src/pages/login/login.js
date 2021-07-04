async function login(args) {
  axios.post('http://localhost:3000/auth', args).then(res => {
    localStorage.setItem('account', JSON.stringify(res.data));
    
    return true;
  }).catch(err => {
    console.log(err)

    return false;
  })  
}