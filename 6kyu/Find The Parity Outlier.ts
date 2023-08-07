export function findOutlier(integers: number[]): number {
    let evenIntegersCount = 0;
    let oddIntegersCount = 0;
    
    integers.forEach((int:number)=>int % 2 ===0 ? evenIntegersCount++ : oddIntegersCount++ )
  
    let outlier = 0;
    
    if(evenIntegersCount > oddIntegersCount){
      integers.forEach((int:number)=> int % 2 === 0 ? `` : outlier = int)
    }else{
      integers.forEach((int:number)=> int % 2 === 0 ? outlier = int :``)
    }
  
    return outlier
  }