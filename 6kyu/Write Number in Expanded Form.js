function expandedForm(num) {
    const numLength = `${num}`.length

    let numbers = []
    let currentDivide = `1`;
    let currentNumber = num;

    for (let i = 1; i < numLength; i++) {
        currentDivide = currentDivide + `0`
    }

    currentDivide = parseInt(currentDivide)

    for (let i = 0; i < numLength; i++) {
        let number = Math.floor(currentNumber / currentDivide)

        numbers.push(number * currentDivide)

        currentNumber = currentNumber - number * currentDivide
        currentDivide = currentDivide / 10
    }

    return numbers.filter(value => value !== 0).join(` + `)

}