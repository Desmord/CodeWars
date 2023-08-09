export function rot13(str: string): string {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < str.length; i++) {
      const index = input.indexOf(str[i]);
        
      if(typeof output[index] != `undefined`){
          encoded += output[index];
      }else{
          encoded += str.substring(i,i+1)
      }
    }

    return encoded;
}