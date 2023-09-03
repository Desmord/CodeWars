export class Kata {
    static disemvowel(str: string): string {
        return [...str].filter((char: string) => char.match(/[aeiouAEIOU]/g) ? false : true).join(``)
    }
}


