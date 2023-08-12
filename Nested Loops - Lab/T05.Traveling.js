function traveling(input) {
 
    let destination = input.shift();
    let moneyByJourney = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        
        if (destination === 'End') 
        {   input = array;
            return;
        }

        let saveMoney = 0;

        while (moneyByJourney > saveMoney) {

            let currSum = Number(input.shift());
            saveMoney += currSum;

        }

        console.log(`Going to ${destination}!`);
        destination = input.shift();

     

        moneyByJourney = Number(input.shift());


    }

}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

