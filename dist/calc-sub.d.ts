export type CalcSubOptions = {
    value1: number;
    value2: number;
};
export declare class CalcSub {
    private value1;
    private calc1;
    constructor(options: CalcSubOptions);
    calc(): number;
}
