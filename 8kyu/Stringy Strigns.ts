export const stringy = (n: number): string => {
    let result =``;
    
    for(let i =0;i<n;i++){
      if(i % 2 === 0){
        result = result + `1`
      }else{
        result = result + `0`
      }
    }
    
    return result
  }
  