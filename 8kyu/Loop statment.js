const padIt = (str,n) =>{
    let newPad = str;
    
    for(let i = 0;i<n / 2;i++){
        newPad = `*${newPad}`
    }
    
    for(let i = 0;i<(n-1) / 2;i++){
            newPad = `${newPad}*`
    }
    
  //   while
    return newPad
  }