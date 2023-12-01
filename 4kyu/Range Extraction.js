function solution(list) {
    let result = ``
    let range = [list[0]]

    for (let i = 1; i < list.length + 1; i++) {

        if (list[i] - range[range.length - 1] === Math.abs(1)) {
            range.push(list[i])
        } else {
            if (range.length === 1) {
                result = result + `${range[0]},`
            } else if (range.length === 2) {
                result = result + `${range[0]},` + `${range[1]},`
            } else {
                result = result + `${range[0]}-${range[range.length - 1]},`
            }
            range = []
            range[0] = list[i]

        }

    }

    return result.slice(0,-1)
}