export const pigIt = (a : string) : string =>  {

    return a.split(` `).map((word: string)=> {
 
    let firstLetter = [...word].shift();
    let ulterWord= ``
     
    if(word.match(` `)){
       ulterWord = `  `
    }else if(word.match(/[a-z]/gi)){
       ulterWord = `${word.substring(1)}${firstLetter}ay`
    }else{
       ulterWord = `${word.substring(1)}${firstLetter}`
    }
     
    if(ulterWord === `undefined`){
       ulterWord = ``
    }
     
     return ulterWord
      
   }).join(` `)
   
 }