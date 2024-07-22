"use strict";
class Animal {
    constructor(nom, age) {
        this.Nom = nom;
        this.Age = age;
    }
    faireDubruit() {
        console.log("cet animal a fait un bruit");
    }
}
class Chat extends Animal {
    constructor(nom, age) {
        super(nom, age);
    }
    faireDubruit() {
        console.log(`${this.Nom} miaule`);
    }
}
let chat = new Chat("Minou", 1);
chat.faireDubruit();
