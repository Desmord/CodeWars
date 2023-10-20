const isReducible = (ele1: string, ele2: string): boolean => {

    if (
        ele1 === `NORTH` && ele2 === `SOUTH` ||
        ele1 === `SOUTH` && ele2 === `NORTH` ||
        ele1 === `WEST` && ele2 === `EAST` ||
        ele1 === `EAST` && ele2 === `WEST`
    ) {
        return true
    } else {
        return false
    }

}

export function dirReduc(arr: string[]): string[] {

    let currentArr = [...arr];
    let isSimplified = true;

    while (isSimplified) {
        let indexToDelete = 0;
        let isChange = false;

        for (let i = 0; i < currentArr.length - 1; i++) {
            const deleteElement = isReducible(currentArr[i], currentArr[i + 1])

            if (deleteElement) {
                isChange = true;
                indexToDelete = i;
            }

        }

        if (isChange) {
            currentArr.splice(indexToDelete, 2)
        } else {
            isSimplified = false;
        }

    }


    return currentArr
}