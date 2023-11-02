function deleteNth(arr, n) {

    let newArr = []

    arr.forEach(val => {
        let instanceNumber = 0;

        newArr.forEach(newArrVal => {
            if (newArrVal === val) instanceNumber++
        })

        if (instanceNumber < n) newArr.push(val)

    })

    return newArr

}