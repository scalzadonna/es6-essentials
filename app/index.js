//filtering in es6

let isPassing = (grade)=>{
    return grade>=70;
}

let scores = [90,85,40,30,35,99];

//let passing = scores.filter(isPassing);

let passing = scores.filter(el => el>=70);

console.log(passing);