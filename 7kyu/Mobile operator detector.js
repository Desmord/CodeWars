function detectOperator(a) {
    var op = "no info";

    const num = `${a}`.substring(0, 4)

    switch (num) {
        case `8039`:
            return `Golden Telecom`
        case `8050`:
            return `MTS`
        case `8063`:
            return `Life:)`
        case `8066`:
            return `MTS`
        case `8067`:
            return `Kyivstar`
        case `8068`:
            return `Beeline`
        case `8093`:
            return `Life:)`
        case `8095`:
            return `MTS`
        case `8096`:
            return `Kyivstar`
        case `8097`:
            return `Kyivstar`
        case `8098`:
            return `Kyivstar`
        case `8099`:
            return `MTS`
        default:
            return `no ifo`
    }

}