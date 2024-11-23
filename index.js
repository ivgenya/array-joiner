function joinArray(array, separator) {
    if (!Array.isArray(array)) {
        throw new Error("First argument must be an array.");
    }

    if (typeof separator !== 'string') {
        throw new Error("Second argument must be a string.");
    }

    return array.join(separator);
}

module.exports = joinArray;
