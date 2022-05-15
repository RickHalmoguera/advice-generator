const adviceDisplay = document.getElementById("adviceText")
const adviceNumberDisplay=document.getElementById("adviceNumber")
const btnClick =document.getElementById("button")

let adviceInfo= {}

btnClick.addEventListener("click",()=> {

    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data=> adviceInfo = data)
        .then(()=> {
            adviceDisplay.innerText = adviceInfo.slip.advice
            adviceNumberDisplay.innerText = `advice # ${adviceInfo.slip.id}`}
            )

    
    
})



