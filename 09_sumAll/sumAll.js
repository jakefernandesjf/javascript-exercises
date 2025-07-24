const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (a > b) {
        return sumAll(b, a);
    }

    let totalSum = 0;
    for (let i = a; i <= b; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
