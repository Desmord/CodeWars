snail = function (array) {

    if (array[0].length === 0) return []
    if (array[0].length === 1) return array[0]

    let currentLength = array[0].length;

    let snali = [...array[0]];
    let x = array[0].length - 1;
    let y = 1;

    let direction = `down`

    while (currentLength > 0) {

        if (direction === `down`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                y = y + 1
            }
            y = y - 1
            direction = `left`
        } else if (direction === `left`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                x = x - 1
            }
            x = x + 1
            direction = `top`
        } else if (direction === `top`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                y = y - 1
            }
            y = y + 1
            direction = `right`
        } else {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                x = x + 1
            }
            x = x - 1
            direction = `down`
        }


        if (direction === `down`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                y = y + 1
            }
            y = y - 1
            direction = `left`
        } else if (direction === `left`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                x = x - 1
            }
            x = x + 1
            direction = `top`
        } else if (direction === `top`) {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                y = y - 1
            }
            y = y + 1
            direction = `right`
        } else {
            for (let i = 1; i < currentLength; i++) {
                snali.push(array[x][y])
                x = x + 1
            }
            x = x - 1
            direction = `down`
        }


        // tutaj drugi raz wykonac albo petle

        currentLength = currentLength - 1
    }

    console.log(`Wynik`, snali)
    console.log(`---------------------------------------`)

    return []
}