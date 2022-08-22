

const game = new catchCat

const btns = document.querySelector("#btns")
const chances = document.querySelector("#chances")
const inputName = document.querySelector("#iniciar input");
const buttonStart = document.querySelector("#start")


//iterando a array, criando buttons, add id e class e apendendo na btns

let cat = ["gato", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
cat.forEach((element)=>{
    let button = document.createElement("button") //<button>
    button.id = element
    button.classList.add("options")
    btns.appendChild(button)

    // quando clicar diz se é o gato ou nao

    button.addEventListener("click", () => {
    if (element === "gato"){
        console.log("É o gato! Parabéns!")

    } else (console.log("Não é o gato, tente novamente")
    )
}) 
})

const options = document.querySelectorAll(".options")

console.log(options)


// quando eu clico para começar e ele exige um nome, e faz com que apareça meu deck 

buttonStart.addEventListener("click", () => {
    if (inputName.value === "") {
        return;
    }
    btns.classList.remove("hide")
})





  