export const digitalRoot = (n:number):number => {
    let sum = n;
    
     while(`${sum}`.length > 1) 
      sum = `${sum}`.split(``).reduce((total,ele) => parseInt(ele) + total,0)
  
    return sum
  };