import type { Calc } from 'package1'

export type CalcSubOptions = {
    value: number
    calc: Calc
}

export class CalcSub {
    private value: number
    private c: Calc

    constructor(options: CalcSubOptions) {
        this.c = options.calc
        this.value = options. value
    }

    public calc(): number {
        return this.c.calc() - this.value
    }
}
