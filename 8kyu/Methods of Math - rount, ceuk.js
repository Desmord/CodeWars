const roundIt = n => { 
    const splitArr = `${n}`.split(`.`)
    
    if(splitArr[0].length > splitArr[1].length){
      return Math.floor(n)
    }else if (splitArr[0].length < splitArr[1].length){
      return Math.ceil(n)
    }else{
      return Math.round(n)
    }
  
  }