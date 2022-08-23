

const game = new catchCat()

const btns = document.querySelector("#btns")
const chances = document.querySelector("#chances")
const inputName = document.querySelector("#iniciar input");
const inicio = document.querySelector("#iniciar")
const buttonStart = document.querySelector("#start")
const show = document.querySelector(".show")

// esconder a página 1, quando clicar no botao de começar



// MEU CODIGO AQUI



let cat = ["gato", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

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
        console.log("É o gato! Parabéns!")

    } else {
        game.loosePoints(); // funçao de retirar os pontos 
        chances.innerText = game.points; 
        console.log("Não é o gato, tente novamente")

    }
})
}) 

const options = document.querySelectorAll(".options")

// quando eu clico para começar e ele exige um nome, e faz com que apareça meu deck 

buttonStart.addEventListener("click", () => {
    if (inputName.value === "") {
        return;
    }
    btns.classList.remove("hide")

    inicio.classList.add(`hide`)
    inicio.classList.remove(`show`)
    
})


// checando status

//setar o userName do atributo da classe
game.name = inputName.value;
//adicionar o nome na div score
inputName.innerText = game.userName;
//adicionar os points na div score
chances.innerText = game.points;