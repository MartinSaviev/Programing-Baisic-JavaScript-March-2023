function coins(input) {
    let coin = Math.round(Number(input[0]) * 100);

    let counter = 0;

    while (coin !== 0) {

        if (coin >= 200) {

            coin -= 200;

        } else if (coin >= 100) {

            coin -= 100;

        } else if (coin >= 50) {

            coin -= 50;

        } else if (coin >= 20) {

            coin -= 20;

        } else if (coin >= 10) {
            
            coin -= 10;

        } else if (coin >= 5) {

            coin -= 5;

        } else if (coin >= 2) {

            coin -= 2;

        } else if (coin >= 1) {

            coin -= 1;
        }

        counter++;
    }

    console.log(counter);

}
coins(["2.73"])