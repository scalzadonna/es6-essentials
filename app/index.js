let a = [7,8,9];
let b = [6, ...a, 10];

//console.log(b);

function print(a,b,c){
    console.log(a,b,c);
}

let z = [1,2,3];
//print(z[0],z[1],z[2]);

//print(...z);

function print2(...z){
    console.log(z);
}

print2(1,2,3,4,5,6);