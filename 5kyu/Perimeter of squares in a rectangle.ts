export const perimeter = (n:number):number => {
    let n1 = 1;
    let n2 = 1;
    let sum = 2;    
    
    for(let i = 1;i<n;i++){
      let n3 = n2 + n1; 
      sum += n3;
      n1 = n2;
      n2 = n3;
    }
  
    return 4 * sum
  }