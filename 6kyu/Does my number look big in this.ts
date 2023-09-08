
export function narcissistic(value: number): boolean {
    let number = [...`${value}`]
        .map((v: string) => Math.pow(parseInt(v), `${value}`.length))
        .reduce((total, v) => total + v, 0)

    return number === value ? true : false
}
