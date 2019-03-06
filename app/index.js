let c = [100,200];

let a = c[0];
let b = c[1];

console.log(a,b);

let [d,e] = c;

console.log(d,e);

let fellowship = ['Frodo', 'Gandalf', 'Aragorn'];

let [hobbit, wizard, ranger] = fellowship;

console.log(hobbit, wizard, ranger);


let f = [100,200,300,400,500];


let [g, ...h] = f;

console.log(g,h);