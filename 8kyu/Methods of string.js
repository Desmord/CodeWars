const cutIt = arr => {
    const smallest = Math.min(...arr.map(ele=>ele.length))
    
    return arr.map(ele => ele.substr(0,smallest))
  }