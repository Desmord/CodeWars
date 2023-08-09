export class Vector {
    a: number;
    b: number;
    c: number

    constructor(components: number[]) {
        this.a = components[0];
        this.b = components[1];
        this.c = components[2]
    }

    add = function (componentsB: number[]): number[] {
        if (componentsB.length !== 3) throw `error`
        return [this.a + componentsB[0], this.b + componentsB[1], this.c + componentsB[2]]
    }

    subtract = function (componentsB: number[]): number[] {
        if (componentsB.length !== 3) throw `error`
        return [this.a - componentsB[0], this.b - componentsB[1], this.c - componentsB[2]]
    }

    dot = function (componentsB: number[]) {
        if (componentsB.length !== 3) throw `error`
        return (this.a * componentsB[0]) + (this.b * componentsB[1]) + (this.c * componentsB[2])
    }

    norm = function (componentsB: number[]) {
        if (componentsB.length !== 3) throw `error`
        return Math.sqrt(this.a ^ 2 + this.b ^ 2 + this.c ^ 2)
    }


};