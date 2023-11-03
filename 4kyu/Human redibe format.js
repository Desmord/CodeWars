function formatDuration(seconds) {

    if (seconds === 0) return `now`

    const years = Math.floor(seconds / 60 / 60 / 24 / 365)
    const yearsInSeconds = years * 60 * 60 * 24 * 365;
    const days = Math.floor((seconds - yearsInSeconds) / 60 / 60 / 24);
    const daysInSeconds = days * 24 * 60 * 60;
    const hours = Math.floor((seconds - yearsInSeconds - daysInSeconds) / 60 / 60)
    const hoursInSeconds = hours * 60 * 60;
    const minutes = Math.floor((seconds - yearsInSeconds - daysInSeconds - hoursInSeconds) / 60)
    const minutesInSeconds = minutes * 60;
    const secondsLeft = Math.floor((seconds - yearsInSeconds - daysInSeconds - hoursInSeconds - minutesInSeconds))

    let returnString = [];

    if (years) {
        if (years > 1) {
            returnString.push(`${years} years`)
        } else {
            returnString.push(`${years} year`)
        }
    }

    if (days) {
        if (days > 1) {
            returnString.push(`${days} days`)
        } else {
            returnString.push(`${days} day`)
        }
    }

    if (hours) {
        if (hours > 1) {
            returnString.push(`${hours} hours`)
        } else {
            returnString.push(`${hours} hour`)
        }
    }

    if (minutes) {
        if (minutes > 1) {
            returnString.push(`${minutes} minutes`)
        } else {
            returnString.push(`${minutes} minute`)
        }
    }

    if (secondsLeft) {
        if (secondsLeft > 1) {
            returnString.push(`${secondsLeft} seconds`)
        } else {
            returnString.push(`${secondsLeft} second`)
        }
    }

    let returnStringWithComa = [];

    for (let i = 0; i < returnString.length; i++) {
        returnStringWithComa.push(returnString[i])
        returnStringWithComa.push(`, `)
    }

    returnStringWithComa.pop()
    returnStringWithComa[returnStringWithComa.length - 2] = ` and `
  
    return returnStringWithComa.join(``)
}
