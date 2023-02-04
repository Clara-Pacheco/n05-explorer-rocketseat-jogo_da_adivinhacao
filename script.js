let random = Math.ceil(Math.random() * 10)

let numberAttempts = 1

console.log(random)

const button = document.querySelector(".button")
const button2 = document.querySelector("#button2")
const errorMessage = document.createElement("p")

document.addEventListener('keydown', (e)=>{
  if(e.key == 'Enter' && document.querySelector(".screen1").classList.contains("hide")){
    window.location.reload()
  }
})

button.addEventListener('click',(e)=>{
  e.preventDefault()

  let inputValue = document.querySelector("#input").value
  
  errorMessage.innerText = ''
  errorMessage.innerHTML= "<p>Errado! Tente Novamente</p>"
  errorMessage.style.fontSize = `${20}px`
  errorMessage.style.color = "#34355B"
  errorMessage.style.display = "flex"
  errorMessage.style.justifyContent = "flex-end"
  errorMessage.style.alignItems = "center"
  errorMessage.style.marginTop = `${90}px`
  


  if(Number(inputValue) !== random){
    errorMessage.style.transform.scale = 0
    button.appendChild(errorMessage)  
    
  }else{
    // const screen1 = document.querySelector(".screen1").classList.add("hide")
    // const screen2 = document.querySelector(".screen2").classList.remove("hide") 
    toggle() 

    const h2 = document.querySelector("h2")

    if(numberAttempts > 1){
      h2.innerHTML=`Você acertou em ${numberAttempts} tentativas.`
    }else{
      h2.innerHTML=`Você acertou em ${numberAttempts} tentativa.`
    }
   
    
  }
  
  numberAttempts++
  inputValue = ""

  // Deveria estar limpando o campo de input
  
})

button2.addEventListener('click',()=>{
  // const screen2 = document.querySelector(".screen2").classList.add("hide")  
  // const screen1 = document.querySelector(".screen1").classList.remove("hide")
  toggle()
  window.location.reload()

})

function toggle(){
  const screen2 = document.querySelector(".screen2").classList.toggle("hide")  
  const screen1 = document.querySelector(".screen1").classList.toggle("hide")
}