export class Kata {
    static dnaStrand(dna: string) {

        let compDNA = [...dna].map(ch => {
            switch (ch) {
                case `A`:
                    return `T`
                case `T`:
                    return `A`;
                case `C`:
                    return `G`
                default:
                    return `C`
            }
        }).join(``)

        return compDNA

    }
}