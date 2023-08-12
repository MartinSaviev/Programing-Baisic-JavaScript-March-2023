
function climb(input) {

    let groups = Number(input[0]);
    let numberPeople = input;

    let sumPeople = 0;

    let groupMusala = 0;          
    let groupMontBlanc = 0;      
    let groupKilimanjaro = 0;    
    let groupK2 = 0;            
    let groupEverest = 0;         


    for (let i = 0; i < groups; i++) {

        sumPeople += Number(numberPeople[i + 1]);

        let people = Number(numberPeople[i + 1]);

        if (people <= 5) {

            groupMusala += people;

        } else if (people <= 12) {

            groupMontBlanc += people;

        } else if (people <= 25) {

            groupKilimanjaro += people;

        } else if (people <= 40) {

            groupK2 += people;

        } else {

            groupEverest += people;
        }

    }

    let percentMusala = groupMusala / sumPeople * 100;
    let percentMontBlanc = groupMontBlanc / sumPeople * 100;
    let percentKilimanjaro = groupKilimanjaro / sumPeople * 100;
    let percentK2 = groupK2 / sumPeople * 100;
    let percentEverest = groupEverest / sumPeople * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontBlanc.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
    
}

climb(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])