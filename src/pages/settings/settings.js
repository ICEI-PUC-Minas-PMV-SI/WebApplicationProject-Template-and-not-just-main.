function initSettings() {
  // var triggerTabList = [].slice.call(document.querySelectorAll('settingsTabContent'))
  // triggerTabList.forEach(function (triggerEl) {
  //   var tabTrigger = new bootstrap.Tab(triggerEl)

  //   triggerEl.addEventListener('click', function (event) {
  //     event.preventDefault()
  //     tabTrigger.show()
  //   })
  // })

  const current = localStorage.getItem('account')
  const account = document.getElementById("accountLink")
  const financial = document.getElementById("financialLink")
  const services = document.getElementById("servicesLink")
  const settings = document.getElementById("settingsLink")
  
  //remover elementos que aparecem na tela baseado no perfil
  if(current !== null) {
    switch (current.role) {
      case "Condomíno":
        services.remove()
        break;
      case "Funcionário":
        settings.remove()
        financial.remove()
        break;
      default:
        break;
    }
  }
}

