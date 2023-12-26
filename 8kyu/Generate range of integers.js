function generateRange(min, max, step){
    let returnArr  =[];
    
    for(let i = min;i<=max;i=i+step){
      returnArr.push(i)
    }
    
    return returnArr
  
  }