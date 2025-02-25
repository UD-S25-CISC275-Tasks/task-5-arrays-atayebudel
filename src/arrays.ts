/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else if (numbers.length === 2) {
        return [numbers[0], numbers[1]];
    } else if (numbers.length > 2) {
        return [numbers[0], numbers[numbers.length - 1]];
    }

    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else {
        return numbers.map((new_num: number) => new_num * 3);
    }
    //return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const conversion = numbers.map((conv: string): number => Number(conv) || 0);
    //return [];
    return conversion;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((amount: string): string => amount.replace("$", ""));
    //return [];
    return stringsToIntegers(amounts);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((new_message) => {
            if (new_message.endsWith("!")) {
                let upper_message = new_message.toUpperCase();
                return upper_message;
            } else if (new_message.endsWith("?")) {
                return "";
            }
            return new_message;
        })
        .filter((new_message) => new_message.length > 0);
    //return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let wording = words.filter((word) => word.length < 4);
    let count = wording.length;
    // return 0;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //let ifColors =

    //return false;

    if (colors.every((colors) => colors === "red")) {
        return true;
    } else if (colors.every((colors) => colors === "blue")) {
        return true;
    } else if (colors.every((colors) => colors === "green")) {
        return true;
    } else if (
        colors.every(
            (colors) =>
                colors === "red" || colors === "green" || colors === "blue",
        )
    ) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const new_sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        return new_sum.toString() + "=" + addends.join("+");
    }
    //return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let neg_value = values.findIndex((x) => x < 0);
    let slicing = neg_value === -1 ? values.length : neg_value;

    let sum = values
        .slice(0, slicing)
        .reduce((total, current) => total + current, 0);

    let new_value = [...values];

    if (neg_value !== -1) {
        new_value.splice(neg_value + 1, 0, sum);
    } else {
        new_value.splice(new_value.length, 0, sum);
    }
    return new_value;
}
