function count(string) {

    if (string === ``) return {}

    let stringArr = string.split(``)
    let returnObject = {}

    stringArr.forEach(val => {

        if (returnObject[`${val}`]) {
            returnObject[`${val}`] = returnObject[`${val}`] + 1

        } else {
            returnObject[`${val}`] = 1;
        }

    })


    return returnObject;
}