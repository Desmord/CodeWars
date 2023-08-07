export const minDistance = (n:number):number =>{
    const factors =  [...Array(n + 1).keys()].filter(i=>n % i === 0);
    let smallestFactor = factors[1] - factors[0];
    
    for(let i = 1; i < factors.length; i++)smallestFactor > factors[i] - factors[i-1] ? smallestFactor = factors[i] - factors[i-1] : ``
    
    return smallestFactor
  }