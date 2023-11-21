function twoSum(numbers, target) {

    console.log(`--------------`)
    console.log(target)
    console.log(numbers)

    let result = [0, 1]

    numbers.forEach((number1, index1) => {

        numbers.forEach((number2, index2) => {

            if (
                (number1 !== number2) &&
                number1 + number2 === target
            ) {
                result[0] = index1
                result[1] = index2
            }

        })

    });



    //    indeksy z tablicy
    return result;
}