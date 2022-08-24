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

    loosePoints() {
        game.points--
        if (game.points === 0){
            window.alert("PERDEEEUU KKKKKKKK")

            //apagar o board e mostrar a div loose
            btns.classList.add(`hide`)
            btns.classList.remove(`show`)
            loose.classList.add(`show`)
            loose.classList.remove(`hide`)
        } 
    }  

    wincatchcat(){
    
        btns.classList.add(`hide`)
        btns.classList.remove(`show`)
        win.classList.add(`show`)
        win.classList.remove(`hide`)

        window.alert("É o gato! Parabéns!")
        
       }
    }


    


