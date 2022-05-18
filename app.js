const player = {
    name:"Lucas",
    points: 10,
    fat: true,
}

player.name = "Kang"
console.log(player);
player.sexy = true
console.log(player);

function plus(a,b) {
    console.log(a + b)
}

plus(35,88);

const calculator = {
    add: function(a,b) {
        return (a+b)
    },
    minus: function(a,b) {
        return (a-b)
    },
    divide: function(a,b) {
        return (a/b)
    },
    jegob: function(a,b) {
        return (a**b)
    },
};

const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult,10);
const divideResult = calculator.divide(minusResult,10);

const age = 95;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);