export default class Factorial {
    Description(): string {
        let digits = this.Calculate();

       return `the number of digits for the factorial ${digits}`;
    }
    Calculate() {
    // factorial of 30 is: 1 * 2 * 3 * 4 * ..
        let value = 0;

        for (let index = 1; index <= this.value; index++) {
            value += Math.log10(index);
        }

        return Math.floor(value) + 1;
    }
    
    value: number;

    constructor(value: number){
        this.value = value;
    }
    
}