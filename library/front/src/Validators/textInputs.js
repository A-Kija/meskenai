
export const validate = (value, input, errors, rules) => {
    for (let i = 0; i < rules.length; i++) {
        let result = rules[i](value);
        if (result !== true) {
            errors.set(input, input + ': ' + result);
            return false;
        }
    }
    return true;
}


export const isDate = value => {
    if (value instanceof Date) {
        return true;
    }
    return 'Not a date';
}

export const isNotEmpty = value => {
    if (value) {
        return true;
    }
    return 'Empty value';
}

export const isString = value => {
    if (typeof value === 'string') {
        return true;
    }
    return 'Not a string';
}