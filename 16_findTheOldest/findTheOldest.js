/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
*/
const currYear = new Date().getFullYear();

const findTheOldest = function (people) {
    return people.reduce(
        (eldest, curr) => {
            let eldestAge = getAge(eldest);
            let currAge = getAge(curr);
            if (currAge > eldestAge) {
                return curr;
            } else {
                return eldest;
            }
        }
    )
};

function getAge(person) {
    let oldestYear =
        (Number.isInteger(person.yearOfDeath))
            ? person.yearOfDeath
            : currYear;
    return oldestYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
