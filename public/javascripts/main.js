function addNumber(){
  var lista = []
  //var num
  //num = document.getElementsByName('numero1').value
  lista.push(document.getElementsByName('numero1')[0].value)
  lista.push(document.getElementsByName('numero2')[0].value)
  lista.push(document.getElementsByName('numero3')[0].value)
  lista.push(document.getElementsByName('numero4')[0].value)

  lista.sort(function(a, b){return b-a})

  document.getElementById('tag1').innerHTML = lista[0]
  document.getElementById('tag2').innerHTML = lista[1]
  document.getElementById('tag3').innerHTML = lista[2]
  document.getElementById('tag4').innerHTML = lista[3]
}
