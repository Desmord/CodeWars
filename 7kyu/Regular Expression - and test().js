const findSimilarity = (str,word) =>  str.split(` `)
  .filter(ele => 
      ele.length !== word.length ? false :
          ([...ele][0] === [...word][0] && [...ele][ele.length -1] === [...word][word.length -1]) ? true : false)
            .join(` `)