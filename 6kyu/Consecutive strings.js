const longestConsec = (stararr, k) => {

    if (!stararr.length) return ``
    if (k > stararr.length) return ``
    if (k === 0) return ``

    let consecutiveArr = []

    for (let i = 0; i < stararr.length - k + 1; i++) {
        let consec = ``

        for (let j = 0; j < k; j++) {
            consec = consec + stararr[i + j]
        }

        consecutiveArr.push(consec)
    }

    return consecutiveArr.sort((valA, valB) => valB.length - valA.length)[0]
}