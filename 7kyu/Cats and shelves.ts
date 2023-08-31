export function solution(start: number, finish: number) {
    let threeJumps = Math.floor((finish -start) / 3)
    let oneJumps = (finish - start)  - (threeJumps * 3)
    
    
    return threeJumps + oneJumps;
  }