const blackAndWhite = arr => {
  
    if(!Array.isArray(arr)) return `It's a fake array`
    if(arr.some((ele)=>ele === 5) && arr.some(ele=>ele === 13)) return `It's a black array`
    return `It's a white array`
    
  }