const moveZeros = (arr) => {

    let newArry = []
    let numberOfZero = 0;

    arr.forEach(element => {
        if (element === 0) {
            numberOfZero += 1
        } else {
            newArry.push(element)
        }

    });

    for (let i = 0; i < numberOfZero; i++) {
        newArry.push(0)
    }

    return newArry
}

