export function amIAfraid(day: string, num: number): boolean {

    switch (day) {
        case `Monday`:
            return num === 12 ? true : false;
        case `Tuesday`:
            return num > 95 ? true : false;
        case `Wednesday`:
            return num === 34 ? true : false;
        case `Thursday`:
            return num === 0 ? true : false;
        case `Friday`:
            return num % 2 === 0 ? true : false;
        case `Saturday`:
            return num === 56 ? true : false;
        default:
            return num === 666 || num === -666 ? true : false
    }

}