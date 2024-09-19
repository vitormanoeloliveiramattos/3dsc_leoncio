let n=0

//set interval executa a cada x milisegundos
const intervalo = setInterval(function(){
  console.clear()
  console.log(`contador: ${n}`)
  n++
},1000)



setTimeout(function(){
  clearInterval(intervalo)
  location.href = "https://www.friv.com/"
}, 5000)

,