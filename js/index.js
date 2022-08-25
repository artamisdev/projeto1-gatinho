const errou1 = new Audio("./assets/sounds/buttons/inferno.mp3")
const errou2 = new Audio("./assets/sounds/buttons/timer.mp3")
const errou3 = new Audio("./assets/sounds/buttons/naoconseguene.mp3")
const errou4 = new Audio("./assets/sounds/buttons/Pegadinha.mp3")
const errou5 = new Audio("./assets/sounds/buttons/xaropinho.mp3")
const errou6 = new Audio("./assets/sounds/buttons/nope.mp3")
const errou7 = new Audio("./assets/sounds/buttons/Warpy.mp3")
const errou8 = new Audio("./assets/sounds/buttons/rodrigoFaro.mp3")
const errou9 = new Audio("./assets/sounds/buttons/sumiu.mp3")
const errou10 = new Audio("./assets/sounds/buttons/tuecego.mp3")
const errou11 = new Audio("./assets/sounds/buttons/narutofunk.mp3")


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
        let randomwon = game.won
        let randomimgwon = document.querySelector(".randomwon")
        
        randomwon = randomwon.sort(() => {
            return Math.random() - 0.5;    
        });

        randomimgwon.src = randomwon[0]

      
        
    } else {

        // funçao de retirar os pontos 
        game.loosePoints(); 
        chances.innerText = game.points;

        let lloose = game.loose
        let randomimgloose = document.querySelector(".randomloose")

        lloose = lloose.sort(() => {
            return Math.random() - 0.5;    
        });

        randomimgloose.src = lloose[0]

       

console.log("Não é o gato")
        
        //checar quantas vidas o jogador tem e se ele tiver zerado, terminar o jogo
    }
    })
})
 
const options = document.querySelectorAll(".options")

//backgroud image do buttons

const um = document.querySelector("#um")
const dois = document.querySelector("#dois")
const tres = document.querySelector("#tres")
const quatro = document.querySelector("#quatro")
const cinco = document.querySelector("#cinco")
const seis = document.querySelector("#seis")
const sete = document.querySelector("#sete")
const oito = document.querySelector("#oito")
const nove = document.querySelector("#nove")
const dez = document.querySelector("#dez")
const onze = document.querySelector("#onze")

um.addEventListener('click', () => {
   
    errou1.play()

    um.classList.add('soaparecequandoclica1');
    setTimeout(() => {
      um.classList.remove('soaparecequandoclica1');
    }, 2500);
  });

  dois.addEventListener('click', () => {

    errou2.play()
    dois.classList.add('soaparecequandoclica2');
    setTimeout(() => {
      dois.classList.remove('soaparecequandoclica2');
    }, 2500);
  });

  tres.addEventListener('click', () => {
    errou3.play()

    tres.classList.add('soaparecequandoclica3');
    setTimeout(() => {
      tres.classList.remove('soaparecequandoclica3');
    }, 2000);
  });

  quatro.addEventListener('click', () => {
    errou4.play()
    quatro.classList.add('soaparecequandoclica4');
    setTimeout(() => {
      quatro.classList.remove('soaparecequandoclica4');
    }, 2000);
  });

  cinco.addEventListener('click', () => {
    errou5.play()
    cinco.classList.add('soaparecequandoclica5');
    setTimeout(() => {
      cinco.classList.remove('soaparecequandoclica5');
    }, 2000);
  });

  seis.addEventListener('click', () => {
    errou6.play()
    seis.classList.add('soaparecequandoclica6');
    setTimeout(() => {
      seis.classList.remove('soaparecequandoclica6');
    }, 2000);
  });

  sete.addEventListener('click', () => {
    errou7.play()

    sete.classList.add('soaparecequandoclica7');
    setTimeout(() => {
      sete.classList.remove('soaparecequandoclica7');
    }, 2000);
  });

  oito.addEventListener('click', () => {
    errou8.play()
    oito.classList.add('soaparecequandoclica8');
    setTimeout(() => {
      oito.classList.remove('soaparecequandoclica8');
    }, 2000);
  });

  nove.addEventListener('click', () => {
    errou9.play()
    nove.classList.add('soaparecequandoclica9');
    setTimeout(() => {
      nove.classList.remove('soaparecequandoclica9');
    }, 2000);
  });

  dez.addEventListener('click', () => {
    errou10.play()

    dez.classList.add('soaparecequandoclica10');
    setTimeout(() => {
      dez.classList.remove('soaparecequandoclica10');
    }, 2000);
  });

  onze.addEventListener('click', () => {
  

    onze.classList.add('soaparecequandoclica11');
      errou11.play()
    setTimeout(() => {  
      onze.classList.remove('soaparecequandoclica11');
    }, 2000);
  });

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

