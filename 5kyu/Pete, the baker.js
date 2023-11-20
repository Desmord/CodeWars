function cakes(recipe, available) {

    let min;

    for (const [key, value] of Object.entries(recipe)) {

        if (available[`${key}`]) {

            let numberOfCake = Math.floor(available[`${key}`] / recipe[`${key}`])

            if (numberOfCake === 0) return 0

            if (min) {

                if (numberOfCake < min) {
                    min = numberOfCake
                }

            } else {
                min = numberOfCake
            }

        } else {
            min = 0
        }

    }

    return min
}