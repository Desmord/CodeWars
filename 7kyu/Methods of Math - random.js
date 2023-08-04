const rndCode = () =>{
    const characters = "ABCDEFGHIJKLM".split(``)
    const special =  "~!@#$%^&*".split(``);
    let code = ``
    
    code = code + characters[Math.floor(Math.random() * characters.length)]
    code = code + characters[Math.floor(Math.random() * characters.length)]
    
    for(let i = 0;i<4;i++){
      code = code + `${Math.floor(Math.random() * 9)}`
    }
    
    code = code + special[Math.floor(Math.random() * special.length)]
    code = code + special[Math.floor(Math.random() * special.length)]
    
    return code
  }