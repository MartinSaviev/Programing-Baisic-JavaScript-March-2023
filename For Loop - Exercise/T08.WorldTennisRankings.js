function rankList(input) {

    let numberTour = Number(input[0]);
    let startingPoint = Number(input[1]);

    let inputFinish = [];

    for (let z = 0; z < input.length; z++) {

        inputFinish.push(input[z + 2])
    }

    let win = 0;
    let sum = 0;

    for (let i = 0; i < numberTour; i++) {

        let currentFinish = inputFinish[i];

        if (currentFinish === 'F') {
            sum += 1200;
        } else if (currentFinish === 'W') {
            sum += 2000;
            win++;

        } else {
            sum += 720;
        }
    }

    sum += startingPoint;
    let totalPoint = sum;

    let averagePoint = totalPoint - startingPoint;

    averagePoint /= numberTour;

    let percentageOfTournamentWon = (win / numberTour) * 100;

    console.log(`Final points: ${sum}\nAverage points: ${Math.floor(averagePoint)}\n${percentageOfTournamentWon.toFixed(2)}%`);

}
rankList(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

