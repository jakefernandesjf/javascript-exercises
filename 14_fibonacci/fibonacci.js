let memo = [];
memo[0] = 0;
memo[1] = 1;
memo[2] = 1;

const fibonacci = function (number) {
    if (number < 0) {
        return "OOPS";
    }
    if (number > memo.length - 1) {
        let oneBack = fibonacci(number - 1);
        let twoBack = fibonacci(number - 2);
        memo[number] = oneBack + twoBack;
    }
    return memo[number];
};

// Do not edit below this line
module.exports = fibonacci;
