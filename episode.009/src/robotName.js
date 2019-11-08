export default class Robot {
        constructor() {
            this.name = "";
            this.dataBase = []
            this.regenerateName()
        }
        regenerateName(){
            this.setRandomName()
            if(this.dataBase.includes(this.name)) {
                this.regenerateName()
            } else {
                this.dataBase.push(this.name)
            }
        }
        setRandomName(){
            this.name = "";
            for(let i=0; i < 2; i++)
                this.name += String.fromCharCode(65+Math.floor(Math.random()*26))
            for(let j=0; j < 3; j++)
                this.name += String.fromCharCode(48+Math.floor(Math.random()*10))
        }
    }
