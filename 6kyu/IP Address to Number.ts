export const ipToNum = (ip: string): number => parseInt(ip
    .split(`.`).map((number:string)=>parseInt(number)
    .toString(2))
    .map((n:string)=> n.length < 8 ?  n.padStart( 8, '0'): n )
    .join(``),2)


export const numToIp = (x: number): string =>{
let xBinary = x.toString(2)

if(xBinary.length < 32){
xBinary = xBinary.padStart( 32, '0')
}

let numbers = [];

for(let i =0;i<32;i = i+8){
numbers.push(xBinary.slice(i,i+8))
}

numbers = numbers.map((n:string)=> `${parseInt(n,2)}`)

return numbers.join(`.`)
}