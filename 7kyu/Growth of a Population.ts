export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {

    let yearsNumber = 0;
    let population = p0;
    let percentNumber = percent / 100;

    while (p0 < p) {
        population = parseInt((population + population * percentNumber + aug).toFixed(0));
        yearsNumber = yearsNumber + 1;

        console.log(population)
        console.log(yearsNumber)
    }

    console.log(yearsNumber)
    console.log(population)


    return 0
}