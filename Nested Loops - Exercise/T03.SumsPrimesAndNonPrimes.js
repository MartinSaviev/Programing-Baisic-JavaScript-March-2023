function primeOrNoPrime(input) {

    let sumPrime = 0;
    let sumNonPrime = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'stop') {
            break;
        }
        let isValidNumber = true;

        let num = Number(input[i]);

        if (num < 0) {

            console.log('Number is negative.');
            continue;
        }

        for (let z = 2; z < num; z++) {

            if (num % z == 0) {

                sumNonPrime += num
                isValidNumber = false;
                break;

            }
        }

        if (isValidNumber === true) {
            sumPrime += num;

        }
    }

    
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
    
}

primeOrNoPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);


