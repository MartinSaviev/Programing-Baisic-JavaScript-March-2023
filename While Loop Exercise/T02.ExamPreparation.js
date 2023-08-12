function exam(input) {

    let unsatisfactoryNumber = Number(input[0]);

    let index = 1;

    let taskName = input[index];
    let evaluation = Number(input[index + 1]);

    let sumGrades = 0;
    let counter = 0;
    let pourGrades = 0;
    let averageGrades = 0;
    let isValid = true;

    while (taskName !== 'Enough') {

        sumGrades += evaluation;
        counter++;

        if (evaluation <= 4) {

            pourGrades++;
            if (pourGrades === unsatisfactoryNumber) {

                console.log(`You need a break, ${unsatisfactoryNumber} poor grades.`);
                isValid = false;
                break;

            }
        }

        index += 2;
        taskName = input[index];
        evaluation = Number(input[index + 1]);

    }

    averageGrades = sumGrades / counter;

    if (isValid) {

        taskName = input[index - 2]

        console.log(`Average score: ${averageGrades.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${taskName}`);

    }
}
exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

