export function duplicateCount(text: string): number {
    let textSet = new Set([...text].map(ch => ch.toLowerCase()))

    return text.length - Array.from(textSet).length
}

