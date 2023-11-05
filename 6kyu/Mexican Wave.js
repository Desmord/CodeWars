function wave(str) {

    if (str === ``) return []

    let wave = [];
    let strArry = str.split(``)

    for (let i = 0; i < strArry.length; i++) {

        if (strArry[i] === ` `) {
            wave.push(``)
        } else {
            let begining = str.substring(0, i)
            let upperCase = str.substring(i, i + 1).toUpperCase()
            let ending = str.substring(i + 1, strArry.length)

            wave.push(`${begining}${upperCase}${ending}`)
        }

    }

    return wave.filter(ele => ele === `` ? false : true)
}