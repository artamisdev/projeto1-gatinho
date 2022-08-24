class catchCat {
    constructor(){
        this.name = "name";
        this.points = 7;
    }

    randombuttons() {
        let random = options.sort(() => {
        return Math.random() - 0.5;
      })
    }

    points() {
        chances.innerText = this.points;
    }

    checkUsuario(){
        checkpont.classList.remove("hide")
        checkpont.classList.add("show")
    }


    loosePoints() {
        game.points--
        if (game.points === 0){
           
            //apagar o board e mostrar a div loose
            btns.classList.add(`hide`)
            btns.classList.remove(`show`)

            loose.classList.add(`show`)
            loose.classList.remove(`hide`)

            lamento.classList.remove("hide")
            lamento.classList.add("show")

            checkpont.classList.remove("show")
            checkpont.classList.add("hide")
        
        } 
    }  

    wincatchcat(){
    
        btns.classList.add(`hide`)
        btns.classList.remove(`show`)

        win.classList.add(`show`)
        win.classList.remove(`hide`)

        congrats.classList.remove("hide")
        congrats.classList.add("show")

        checkpont.classList.remove("show")
        checkpont.classList.add("hide")

       }
    }


    


