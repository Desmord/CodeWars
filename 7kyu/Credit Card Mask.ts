export const maskify = (cc:string): string => {
    const mask = cc.length > 4 ? `#`.repeat(cc.length -4):``
    const end = cc.substring(cc.length-4,cc.length)
  
    return `${mask}${end}`
  }
  