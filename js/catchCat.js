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
        this.points--

        this.checkGame()
    }

    checkGame() {
        if (this.points === 0){
            console.log("VOCÊ PERDEU")
        } 
        if (element === "gato"){
            console.log("VOCÊ GANHOU")
        }
    }


}




