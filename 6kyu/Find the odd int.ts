export const findOdd = (xs: number[]): number => {

    let numbersSet = new Set(xs)
    let numbersCount = Array.from(numbersSet).map(numb => {
        let count = 0;
        xs.forEach(element => {
            if (element === numb) count = count + 1;
        });
        return count
    });

    let oddNumberindex = 0;

    numbersCount.forEach((numb, index) => numb % 2 === 0 ? `` : oddNumberindex = index)

    return 0;
};

