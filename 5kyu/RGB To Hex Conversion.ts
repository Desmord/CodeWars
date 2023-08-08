export const rgb = (r: number, g: number,b: number): string => {
    const red = r > 255 ? `FF` : r < 0 ? `00` : r.toString(16).length < 2 ? `0${r.toString(16).toUpperCase()}` : r.toString(16).toUpperCase();
    const green = g > 255 ? `FF` : g < 0 ? `00` : g.toString(16).length < 2 ? `0${g.toString(16).toUpperCase()}` : g.toString(16).toUpperCase();
    const blue = b > 255 ? `FF` : b < 0 ? `00` : b.toString(16).length < 2 ? `0${b.toString(16).toUpperCase()}` : b.toString(16).toUpperCase();
  
    return `${red}${green}${blue}`
  }
  