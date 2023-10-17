export function binaryArrayToNumber(arr: number[]): number {

    let sum = ``;
    arr.forEach(ele => sum = `${sum}${ele}`)

    let decimal = parseInt(sum, 2)

    return decimal
};