const alphabet = [
    { char: `a`, number: 1 },
    { char: `b`, number: 2 },
    { char: `c`, number: 3 },
    { char: `d`, number: 4 },
    { char: `e`, number: 5 },
    { char: `f`, number: 6 },
    { char: `g`, number: 7 },
    { char: `h`, number: 8 },
    { char: `i`, number: 9 },
    { char: `j`, number: 10 },
    { char: `k`, number: 11 },
    { char: `l`, number: 12 },
    { char: `m`, number: 13 },
    { char: `n`, number: 14 },
    { char: `o`, number: 15 },
    { char: `p`, number: 16 },
    { char: `q`, number: 17 },
    { char: `r`, number: 18 },
    { char: `s`, number: 19 },
    { char: `t`, number: 20 },
    { char: `u`, number: 21 },
    { char: `v`, number: 22 },
    { char: `w`, number: 23 },
    { char: `x`, number: 24 },
    { char: `y`, number: 25 },
    { char: `z`, number: 26 },
]

const getNumber = (char) => {
    let number = 0;

    alphabet.forEach(letter => {
        if (letter.char === char) {
            number = letter.number
        }
    })

    if (number) {
        return `${number} `
    } else {
        return ``
    }

}

const alphabetPosition = (text) => {

    let returnString = ``;

    [...text.toLowerCase()].forEach(element => {
        returnString = returnString + `${getNumber(element)}`
    });

    return returnString.trim();
}