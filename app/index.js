import Entity from "./Entity";

class Hobbit extends Entity{
    constructor(name, height){
        super(name, height);
    }

    greet(){
        console.log(`Hello I'm a hobbit from the shire`);
    }
};

let Frodo = new Hobbit('Frodo', 4.5);

console.log(Frodo);

Frodo.greet();