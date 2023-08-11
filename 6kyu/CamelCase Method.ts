export const camelCase = (str: string): string =>
  str === `` ? `` : str.toLowerCase().split(` `).map(ele=> `${ele.substring(0,1).toUpperCase()}${ele.substring(1,ele.length)}`).join(``)