export function arrayDiff(a: number[], b: number[]): number[] {

    let arr = a.filter((ele: number) => {

        let isExist = b.some((b: number) => b === ele ? true : false)

        if (isExist) {
            return false
        } else {
            return true
        }

    })

    return arr;
}


function isDuplicate(ch: string, word: string): boolean {

    let regx = new RegExp(ch, `gim`)
    let count = word.match(regx);

    console.log(count)

    return true
}

export function duplicateEncode(word: string) {

    let result = ``;

    isDuplicate(word[0], word)


}