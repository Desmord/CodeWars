function comp(array1, array2) {

    if (!array1 || !array2) return false
    if (array1.length !== array2.length) return false

    let array2SQRT = array2.map(value => Math.sqrt(value))
    let array1Sorted = array1.sort((value1, value2) => value1 - value2)
    let array2SQRTSorted = array2SQRT.sort((value1, value2) => value1 - value2)

    let isArraysTheSame = true;

    for (let i = 0; i < array1Sorted.length; i++) {
        if (array1Sorted[i] !== array2SQRTSorted[i]) isArraysTheSame = false
    }

    return isArraysTheSame
}