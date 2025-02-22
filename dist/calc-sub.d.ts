import type { Calc } from 'package1';
export type CalcSubOptions = {
    value: number;
    calc: Calc;
};
export declare class CalcSub {
    private value;
    private c;
    constructor(options: CalcSubOptions);
    calc(): number;
}
