function shop(input) {

    let product = String(input[0]);
    let city = String(input[1]);
    let productCout = Number(input[2]);

    let totalPrice = 0;

    if (product === 'coffee') {
        if (city === 'Sofia') {
            totalPrice = productCout * 0.50;
        }
        else if (city === 'Plovdiv') {
            totalPrice = productCout * 0.40;
        }
        else if (city === 'Varna') {
            totalPrice = productCout * 0.45;
        }

    }
    else if (product === 'water') {
        if (city === 'Sofia') {
            totalPrice = productCout * 0.80;
        }
        else if (city === 'Plovdiv') {
            totalPrice = productCout * 0.70;
        }
        else if (city === 'Varna') {
            totalPrice = productCout * 0.70;
        }
    }
    else if (product === 'beer') {
        if (city === 'Sofia') {
            totalPrice = productCout * 1.20;
        }
        else if (city === 'Plovdiv') {
            totalPrice = productCout * 1.15;
        }
        else if (city === 'Varna') {
            totalPrice = productCout * 1.10;
        }
    }
    else if (product === 'sweets') {
        if (city === 'Sofia') {
            totalPrice = productCout * 1.45;
        }
        else if (city === 'Plovdiv') {
            totalPrice = productCout * 1.30;
        }
        else if (city === 'Varna') {
            totalPrice = productCout * 1.35;
        }
    }
    else if (product === 'peanuts') {
        if (city === 'Sofia') {
            totalPrice = productCout * 1.60;
        }
        else if (city === 'Plovdiv') {
            totalPrice = productCout * 1.50;
        }
        else if (city === 'Varna') {
            totalPrice = productCout * 1.55;
        }
    }

    console.log(totalPrice);
}
shop(["peanuts",
"Plovdiv",
"1"])





