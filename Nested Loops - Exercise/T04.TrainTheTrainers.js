function trainers(input) {

    let index = 0;
    index++;

    let n = Number(input[0]);
    let sumAllGrades = 0;
    let counter = 0;

    while (input[index] != 'Finish') {

        let presentationName = input[index];
        index++;
        let grade = 0;

        for (let i = 0; i < n; i++) {

            grade += Number(input[index]);
            index++;

            counter++;

        }
        console.log(`${presentationName} - ${(grade / n).toFixed(2)}.`);

        sumAllGrades += grade;


    }

    console.log(`Student's final assessment is ${(sumAllGrades / counter).toFixed(2)}.`);

}


trainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])


