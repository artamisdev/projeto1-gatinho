

const game = new catchCat()

const btns = document.querySelector("#btns")
const chances = document.querySelector("#chances")
const inputName = document.querySelector("#iniciar input");
const inicio = document.querySelector("#iniciar")
const buttonStart = document.querySelector("#start")
const show = document.querySelector(".show")
const userName = document.querySelector("#name")
const win = document.querySelector("#win")
const loose = document.querySelector("#loose")
const checkpont = document.querySelector("#checkpont")
const congrats = document.querySelector("#congrats")
const lamento = document.querySelector("#lamento")


let cat = ["gato", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze"]

//Randomizando os buttons 

let sortedCat = cat.sort(() => {
    return Math.random() - 0.5;
  });

console.log(sortedCat)

//iterando a array, criando buttons, add id e class e apendendo na btns

sortedCat.forEach((element)=>{
    let button = document.createElement("button") //<button>
    button.id = element
    button.classList.add("options")
    btns.appendChild(button)
    // quando clicar diz se é o gato ou nao
    button.addEventListener("click", () => {
     if (element === "gato"){ 
        //quando ganhar, apagar o board e dar show na div "win"
        game.wincatchcat();
        // randomizando win imgs
       
    } else {

        // funçao de retirar os pontos 
        game.loosePoints(); 
        chances.innerText = game.points;
    
        console.log("Não é o gato")
        
        //checar quantas vidas o jogador tem e se ele tiver zerado, terminar o jogo
    }
    })
})
 
const um = document.querySelector("#um")

um.addEventListener("click", () => {
    setTimeout(() => {
        um.classList.add("show")

    }, 500);
    
})

// checkpont.classList.add(`show`)
// checkpont.classList.remove(`hide`)


const options = document.querySelectorAll(".options")

// quando eu clico para começar e ele exige um nome, e faz com que apareça meu deck 

buttonStart.addEventListener("click", () => {
    if (inputName.value === "") {
        return;
    }
    
    btns.classList.remove("hide")
    
    inicio.classList.add(`hide`)
    inicio.classList.remove(`show`)
    game.checkUsuario()

    game.name = inputName.value

    userName.innerText = game.name
    
})

//adicionar os points na div score
chances.innerText = game.points;

//reloads 
const replay = document.querySelector(".replay")
const replay2 = document.querySelector(".replay2")

  replay.addEventListener("click",()=>{
    
    location.reload()
})
replay2.addEventListener("click",()=>{
     
    location.reload()
})


//backgroud image do buttons



