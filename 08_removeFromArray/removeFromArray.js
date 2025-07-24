const removeFromArray = function (array, ...removed) {
    return array.filter(x => !removed.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
