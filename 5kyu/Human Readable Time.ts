export const humanReadable = (seconds:number):string => { 
    let hours: string | number = Math.floor(seconds / 60 / 60);
    let minutes: string | number = Math.floor((seconds - (hours * 60 * 60)) / 60);
    let sec: string | number = (seconds - ((hours * 60 * 60) + (minutes * 60)));
    
    if(`${hours}`.length < 2) hours = `0${hours}`
    if(`${minutes}`.length < 2) minutes = `0${minutes}`
    if(`${sec}`.length < 2) sec = `0${sec}`
    
    return `${hours}:${minutes}:${sec}`
  }