function garden(input) {

    let = flowers = String(input[0]);
    let = flowersCount = Number(input[1]);
    let = budget = Number(input[2]);

    let totalSum = 0;

    if (flowers === 'Roses') {
        totalSum = flowersCount * 5;

        if (flowersCount > 80) {

            let discount = totalSum * 0.10;
            totalSum -= discount;
        }

    } else if (flowers === 'Dahlias') {
        totalSum = flowersCount * 3.80;

        if (flowersCount > 90) {

            let discount = totalSum * 0.15;
            totalSum -= discount;
        }

    } else if (flowers === 'Tulips') {
        totalSum = flowersCount * 2.80;

        if (flowersCount > 80) {

            let discount = totalSum * 0.15;
            totalSum -= discount;
        }

    } else if (flowers === 'Narcissus') {
        totalSum = flowersCount * 3.00;

        if (flowersCount < 120) {

            let discount = totalSum * 0.15;
            totalSum += discount;
        }

    } else if (flowers === 'Gladiolus') {
        totalSum = flowersCount * 2.50;

        if (flowersCount < 80) {

            let discount = totalSum * 0.20;
            totalSum += discount;
        }
    }

    if (budget >= totalSum) {

        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - totalSum).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}

garden(["Tulips",
"88",
"260"])
