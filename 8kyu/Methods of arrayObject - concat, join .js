const bigToSmall = arr => {
  
    let joinArray = [];
    
    arr.forEach(ele => {
      joinArray = joinArray.concat(ele)
    })
  
    return joinArray.sort((a ,b)=> a - b).reverse().join(`>`)
    
  }