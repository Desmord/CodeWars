function isPangram(string){
    let regex = /([a-z])(?!.*\1)/g;
    return (string.toLowerCase().match(regex) || []).length === 26;
}