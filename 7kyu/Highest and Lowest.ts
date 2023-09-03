export class Kata {
    static highAndLow(numbers: string): string {
        let numbersN = numbers.split(` `).map(ele=>parseInt(ele))
        return `${Math.max(...numbersN)} ${Math.min(...numbersN)}`
    }
}