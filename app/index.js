class Entity{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    greet(){
        console.log(`Hi, I\'m ${this.name}`);
    }

}

let Merry = new Entity('Merry',4.3);

Merry.greet();