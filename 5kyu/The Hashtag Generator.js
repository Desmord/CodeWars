function generateHashtag(str) {

    let hash = str.split(` `)
        .map(val => `${val.substring(0, 1).toUpperCase()}${val.substring(1, val.length)}`)
        .filter(val => val === `` || val === ` ` ? false : true)
        .join(``)

    return (`#${hash}`.length > 140 || hash.length === 0) ? false : true
    
}
