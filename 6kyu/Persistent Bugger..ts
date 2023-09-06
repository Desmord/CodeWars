export function persistence(num: number): number {
    let pres = num;
    let presCount = 0;

    while (`${pres}`.length > 1) {

        pres = [...`${pres}`].reduce((total, num: string) => {
            return total * parseInt(num)
        }, 1)
        presCount ++;

    }

    return presCount
}