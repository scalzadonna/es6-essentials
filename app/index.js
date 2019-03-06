function butter(...b) {
    let a = [1, 2, 3];
    return [...a,...b];
  }
  
console.log(  butter(4, 5, 6));
  