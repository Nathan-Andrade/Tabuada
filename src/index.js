function verificar(){
  let num = document.getElementById('tabnum');
  let tab = document.getElementById('tabuada');

  if(num.value.length == 0 ){
    alert('Oops! Está faltando algo, tente novamente')
  }else{
    let n = Number(num.value);
    let c = 1;

    tab.innerHTML = ``
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${c} x ${n} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}