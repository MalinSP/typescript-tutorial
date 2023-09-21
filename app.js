function add(n1, n2, showResult) {
    // console.log(typeof)
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
add(number1, number2, printResult);
