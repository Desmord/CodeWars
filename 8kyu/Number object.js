const whatNumberIsIt = n => {
  
    if(n >= Infinity) return `Input number is Number.POSITIVE_INFINITY`;
    if(n <= -Infinity) return `Input number is Number.NEGATIVE_INFINITY`;
    if(isNaN(n)) return `Input number is Number.NaN`
    if(n <= 5e-324) return "Input number is Number.MIN_VALUE"
    if(n >= 1.7976931348623157e+308) return "Input number is Number.MAX_VALUE"
    return `Input number is ${n}`
    
  }