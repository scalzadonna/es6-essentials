this.a = 25;

let print = function(){
    this.a = 15;
    console.log(this.a);
};

let arrowPrint = ()=>{
    console.log(this.a);
}
print();

arrowPrint();