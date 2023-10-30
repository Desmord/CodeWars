const toCamelCase = (str) => {
    let splitedStr = str.split(/[-_]/)
    let returnStr = splitedStr[0];

    for (let i = 1; i < splitedStr.length; i++) {
        const capitalWord = splitedStr[i].toLowerCase().charAt(0).toUpperCase() + splitedStr[i].slice(1)
        returnStr = returnStr + capitalWord
    }

    return returnStr

}