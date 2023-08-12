function cinema(input) {

    let standard = 0;
    let student = 0;
    let kid = 0;
    let allSeatsCount = 0;

    for (let i = 0; i < input.length; i++) {
    
        let currentInput = input.shift();

        let maxSeatsCurrentMovie = Number(input.shift());

        let checkTicketType = input.shift();
        

        if (checkTicketType === 'Finish') {
            break;

        }

        let counter = 0;

        while (checkTicketType != 'End') {
            

            counter++;

            if (checkTicketType === 'Finish') {
                break;
            }

            if (checkTicketType == 'standard') {

                standard++;

            } else if (checkTicketType == 'student') {

                student++;
            }
            else if (checkTicketType == 'kid') {

                kid++;
            }
            allSeatsCount = standard + student + kid;

            if (maxSeatsCurrentMovie === counter) {
                break;
            }

            checkTicketType = input.shift();
        }

        console.log(`${currentInput} - ${(((counter / maxSeatsCurrentMovie) * 100).toFixed(2))}% full.`);
    }

    console.log(`Total tickets: ${allSeatsCount}`);
    console.log(`${(student / allSeatsCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / allSeatsCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / allSeatsCount * 100).toFixed(2)}% kids tickets.`);
}


cinema(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
