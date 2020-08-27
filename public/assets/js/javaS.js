function formatForm () {
  var n = document.getElementById('nome')
  n.value = n.value.toUpperCase()

  var e = document.getElementById('endereco')
  e.value = e.value.toUpperCase()

  var b = document.getElementById('bairro')
  b.value = b.value.toUpperCase()

  var r = document.getElementById('regiao')
  r.value = r.value.toUpperCase()

  var email = document.getElementById('email')
  email.value = email.value.toUpperCase()

  var o = document.getElementById('origem')
  o.value = o.value.toUpperCase()

  var obs = document.getElementById('observacao')
  obs.value = obs.value.toUpperCase()

  var s = document.getElementById('sexo')
  s.value = s.value.toUpperCase()
}
