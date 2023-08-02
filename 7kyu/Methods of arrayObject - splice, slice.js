const threeInOne = arr => {
    let newArr = []
    
    for(let i =0; i < arr.length;i = i+3){
      newArr.push(arr[i]+arr[i+1]+arr[i+2])
    }
    
    return newArr
  }