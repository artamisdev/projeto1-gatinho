

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
const checkpont = document.querySelector(".checkpont")


let cat = ["gato", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

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
        console.log(element)
    if (element === "gato"){ 

        //quando ganhar, apagar o board e dar show na div "win"
        game.wincatchcat();
    
    } else {
        // funçao de retirar os pontos 
        game.loosePoints(); 
        chances.innerText = game.points; 

        console.log("Não é o gato")
        
        //checar quantas vidas o jogador tem e se ele tiver zerado, terminar o jogo
    }
    })
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
    
    game.name = inputName.value

    userName.innerText = game.name
    
})

//adicionar os points na div score
chances.innerText = game.points;

const replay = document.querySelector(".replay")

replay.addEventListener("click",()=>{
    
    let sortedCat = cat.sort(() => {
        return Math.random() - 0.5;
      });

    chances.innerText = game.points;
    location.reload()
})



//backgroud image do button



// checando status


//adicionar o nome na div score
