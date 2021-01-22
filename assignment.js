// https://github.com/rkrashu/assignment.js.git



// kitometer to meter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(10);
console.log(result);




// budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}
var totalbudget = budgetCalculator(5, 3, 2);
console.log(totalbudget);



// hotel cost

function hotelCost(day) {
    if (day <= 10) {
        var first10Days = day * 100;
        var total = first10Days;
    }
    else if (day <= 20) {
        var first10Days = 10 * 100;
        var second10Days = (day - 10) * 80;
        var total = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var thirdPart = (day - 20) * 50;
        var total = first10Days + second10Days + thirdPart;
    }
    return total;
}
var totalCost = hotelCost(21);
console.log(totalCost);


// Mega Friend

function megaFriend(name) {
    var largestName = "";
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}
var output = megaFriend(["lia", "tariqul", "bappi", "tumpa", "hasan", "salauddin"]);
console.log(output);
