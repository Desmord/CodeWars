export const tribonacci = ([a, b, c]: [number, number, number], n: number): number[] =>{
    let tribonacci = [a,b,c];
    
    if(n===0) return []
    if(n===1) return [tribonacci[0]]
    if(n===2) return [tribonacci[0],tribonacci[1]]
  
    for(let i = 2;i<n -1;i++)
      tribonacci.push(tribonacci[i-2]+tribonacci[i-1]+tribonacci[i])
    
    return tribonacci
    
  }