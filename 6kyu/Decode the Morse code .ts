import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {

    let words = morseCode.split(`   `);
    let chars = words.map((word: string) => {
        return word.split(` `).map((morseWord: string) => MORSE_CODE[morseWord]).join(``)
    })

    let sentence = chars.join(` `)

    return sentence.trim()
}