export function findDifference(a: [number, number, number], b: [number, number, number]): number {

    let aVolume = a.reduce((total: number, num: number) => total * num, 1)
    let bVolume = b.reduce((total: number, num: number) => total * num, 1)

    return Math.abs(aVolume - bVolume)

}