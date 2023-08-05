function bonusPoint(input) {

    let num = Number(input[0]);
    let bonus = 0;

    if (num <= 100) {
        bonus += 5;

    } else if (num > 100 && num <= 1000) {
        let percent = num * 0.20;
        bonus += percent;
    } else {
        let percent = num *0.10;
        bonus+=percent;
    }

    if (num % 2 == 0) {
        bonus += 1
    } if (num % 10 == 5) {
        bonus += 2;
    }
    let totalPrice = num + bonus;
    console.log(bonus);
    console.log(totalPrice);
}
bonusPoint(["15875"]);