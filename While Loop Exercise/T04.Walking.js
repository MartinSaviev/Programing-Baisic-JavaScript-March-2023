function steps(input) {

    let index = 0;
    let steps = input[index];

    let sumSteps = 0;

    while (steps !== 'Going home') {

        sumSteps += Number(input[index]);
        if (sumSteps >= 10000) {

            break;

        }

        index++;;

        steps = input[index];

    }

    if (steps === 'Going home') {

        sumSteps += Number(input[index + 1]);
    }

    if (sumSteps > 10000) {

        console.log('Goal reached! Good job!');
        console.log(`${sumSteps - 10000} steps over the goal!`);

    } else if (sumSteps === 10000) {

        console.log('Goal reached! Good job!');

    } else if (sumSteps < 10000) {

        console.log(`${10000 - sumSteps} more steps to reach goal.`);

    }
}