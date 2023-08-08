const toUnderscore = string =>{
    let capitalLetters = `${string}`.match(/[A-Z]/g);
    let capitalIndexes = []
    
    if(!capitalLetters) return `${string}`
    
    capitalLetters = capitalLetters.map(letter=>letter.toLowerCase())
    
    let words = string.split(/[A-Z]/g)
    
    words.shift()
    
    return words.map((word,index)=>`${capitalLetters[index]}${word}`).join(`_`)
    
  }