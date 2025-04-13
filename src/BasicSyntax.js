export function romanToInteger(str) {
    let result = 0;
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length; i++) {
        const currentValue = romanSymbols[str[i]];
        const nextValue = romanSymbols[str[i + 1]] || 0;
        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}
