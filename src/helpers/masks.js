function dateMask(field){
  var date = field.value;
  if (date.length == 2){
      date = date + '/';
      document.forms[0].date.value = date;
return true;              
  }
  if (date.length == 5){
      date = date + '/';
      document.forms[0].date.value = date;
      return true;
  }
}

function mask(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execMask()",1)
}
function execMask(){
  v_obj.value=v_fun(v_obj.value)
}
function phoneMask(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}