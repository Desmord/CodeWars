export function findEvenIndex(arr: number[]): number {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;

    for (let i = 1; i < arr.length - 1; i++) {

        for (let j = 0; j < i; j++) {
            leftSum = leftSum + arr[j]
        }

        for (let j = i + 1; j < arr.length; j++) {
            rightSum = rightSum + arr[j]
        }

        if (leftSum === rightSum)
            index = i;

        leftSum = 0;
        rightSum = 0;

    }

    if (index === 0) return -1
    return index

}