export const foldArray = (array: number[], runs: number): number[] => {
    let currentFlod = array;

    for (let i = 0; i < runs; i++) {

        const max = ((currentFlod.length - 1) / 2);
        let newCurrentFlod: number[] = []

        for (let j = 0; j < max; j++) {
            newCurrentFlod.push(currentFlod[j] + currentFlod[currentFlod.length - j - 1])
        }

        if (currentFlod.length % 2 !== 0) {
            newCurrentFlod.push(currentFlod[Math.floor(currentFlod.length / 2)])
        }

        currentFlod = newCurrentFlod
    }

    return currentFlod;
}