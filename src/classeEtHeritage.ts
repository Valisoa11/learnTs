class Animal {
    Nom: string;
    Age: number;
    constructor(nom: string, age: number){
        this.Nom = nom;
        this.Age = age;
    }
    faireDubruit():void{
        console.log("cet animal a fait un bruit")

    }
}
class Chat extends Animal{
    constructor(nom: string, age: number) {
        super(nom, age);
      }
    faireDubruit():void{
        console.log(`${this.Nom} miaule`);
    }
}
let chat = new Chat("Minou", 1);
chat.faireDubruit();