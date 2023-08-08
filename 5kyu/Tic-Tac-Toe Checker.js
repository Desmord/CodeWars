const isWon = (board,symbol) =>{
    let isHorizontal = false;
    let isVertical = false;
    let isDiagonal = false; 
    
    board.forEach(row =>{
      if(row[0] === symbol && row[1] === symbol && row[2] === symbol){ isHorizontal = true;}
    })
    
    for(let i = 0;i<3;i++){
      if(board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol){ isVertical = true;}
    }
    
    if(
      (board[0][0] === symbol && board[1][1] === symbol && board[2][2]===symbol) ||
      (board[0][2] === symbol && board[1][1] === symbol && board[2][0]===symbol)
    ){
      isDiagonal = true;
    }
    
    return (isHorizontal || isVertical || isDiagonal) ? true : false
  }
  
  const isGameFinished = board => {
    let isFinished = true;
    
    board.forEach( board => board.forEach(cell =>{if(cell === 0){isFinished = false;}}))
    
    return isFinished ? true : false;
  }
  
  
  const isSolved = board => {
    const isXWon = isWon(board,1)
    const isOWon = isWon(board,2)
    
    if(isXWon) return 1
    if(isOWon) return 2
    
    const isFinished = isGameFinished(board)
    
    return isFinished ? 0 : -1
  
  }
  
  