export const spinWords = (words: string):string =>
  words.split(` `).map((word: string) :string => 
       word.length < 5 ? word :   [...word].reverse().join(``)).join(` `)