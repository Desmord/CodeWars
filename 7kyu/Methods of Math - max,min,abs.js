const maxMin = (arr1,arr2) =>{
    let difArr = [];
    
    for(let i = 0;i < arr1.length;i++){
        difArr.push(Math.abs(arr1[i]-arr2[i]))
    }
    
    return [Math.max(...difArr),Math.min(...difArr)]
  
  }