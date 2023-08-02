const isolateIt = arr =>
  arr.map(ele=> ele.length % 2 === 0 ? 
      `${ele.slice(0,ele.length / 2)}|${ele.slice(ele.length / 2,ele.length )}` :
      `${ele.slice(0,ele.length / 2)}|${ele.slice(ele.length / 2+1 ,ele.length )}`)   