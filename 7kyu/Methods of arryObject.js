const countGrade = scores => {
    let S = 0;
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let X = 0;
    
    scores.forEach(score => {
      
      if(score === 100) S = S + 1;
      if(score >= 90 && score < 100) A = A + 1;
      if(score >= 80 && score < 90) B = B + 1;
      if(score >= 60 && score < 80) C = C + 1;
      if(score >= 0 && score < 60) D = D + 1;
      if(score < 0) X = X + 1;
    
    })
    
    return {
      S,A,B,C,D,X
    }
    
  }