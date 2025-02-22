import { Calc } from 'package1'

export type CalcSubOptions = {
    value1: number
    value2: number
}

export class CalcSub {
    private value1: number
    private calc1: Calc

    constructor(options: CalcSubOptions) {
        this.value1 = options.value1
        this.calc1 = new Calc({ value: options.value2 })
    }

    public calc(): number {
        return this.value1 - this.calc1.calc()
    }
}
