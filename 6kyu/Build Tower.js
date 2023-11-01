function towerBuilder(nFloors) {
    let tower = []
    let numberOfStart = 1;

    for (let i = 1; i < nFloors; i++) {
        numberOfStart = numberOfStart + 2
    }

    for (let i = 0; i < nFloors; i++) {
        let level = ``
        level = level.padStart(i, ` `)
        level = level.padEnd(numberOfStart - i, `*`)
        level = level = level.padEnd(numberOfStart, ` `)
        tower.push(level)
    }

    return tower.reverse()
}