const colorOf = (r,g,b)=>{
    const rColor = r.toString(16).length > 1? r.toString(16) : `0${r.toString(16)}`
    const gColor = g.toString(16).length > 1? g.toString(16) : `0${g.toString(16)}`
    const bColor = b.toString(16).length > 1? b.toString(16) : `0${b.toString(16)}`
    
    return `#${rColor}${gColor}${bColor}`
  }