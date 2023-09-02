export function findMissingLetter(array: string[]): string {
    let current = array[0].charCodeAt(0);
    let lookingCharNumber = 0;

    array.every(char => {

        if (current !== char.charCodeAt(0)) {
            lookingCharNumber = char.charCodeAt(0) - 1
            return false
        } else {
            current = current + 1;
            return true
        }

    })

    return String.fromCharCode(lookingCharNumber)

}


export function removeChar(str: string): string {

    let arr = [...str];

    arr.shift();
    arr.pop();

    // if (str)
    //     arr = [...str].shift().pop();

    console.log(arr)
    return ``
}