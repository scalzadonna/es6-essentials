let wizard ={
    magical: true,
    power: 10
}

let magical = true;
let power = 2;

//let magical = wizard.magical;
//let power = wizard.power;

//let {magical, power} = wizard;


let ranger = {    magical: false,    power: 9};

({magical, power} = ranger);

console.log(magical, power);