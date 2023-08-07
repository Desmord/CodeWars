export const xo = (str: string):boolean =>{
    const xCount = str.toLowerCase().match(new RegExp(`[xX]`,`gi`)) || [];
    const oCount = str.toLowerCase().match(new RegExp(`[oO]`,`gi`)) || [];
    
    return xCount.length === oCount.length ? true : false
  }