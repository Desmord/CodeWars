export function collatz(n: number): number {
    let collatzConjectureLength = 1;
    let currentNumber = n;

    while (currentNumber !== 1) {

        if (currentNumber % 2 === 0) {
            currentNumber = currentNumber / 2;
        } else {
            currentNumber = currentNumber * 3 + 1
        }

        collatzConjectureLength += 1;
    }

    return collatzConjectureLength;
}