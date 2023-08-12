function completion(input) {

    let name = input[0];
    let index = 1;

    let grades = input[index];

    let counter = 0;
    let torn = 0;
    let sumGrades = 0;

    while (12 > counter) {

        let currGrades = Number(grades);

        sumGrades += currGrades;

        if (currGrades < 4.00) {
            torn++
            if (torn > 1) {
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }

        }

        counter++;
        index++;
        grades = input[index];

    }
    if (counter >= 12) {

        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`);


    }

}

completion(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])





