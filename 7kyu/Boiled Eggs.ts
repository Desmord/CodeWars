export function cookingTime(eggs: number): number {
    let time = Math.ceil(eggs / 8) * 5

    return time
  }