function oscars(input) {

    let nameActor = String(input[0]);
    let points = Number(input[1]);
    let n = input;

    let actor = '';
    let point = 0;

    for (let i = 3; i < n.length; i += 2) {

        actor = input[i];
        point = Number(input[i + 1]);

        let sum = points + ((actor.length * point) / 2);
        points = sum;

        if (points >= 1250.5) {

            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
            
        }
    }

    if (points < 1250.5) {

        let totalSum = 1250.5 - points;
        console.log(`Sorry, ${nameActor} you need ${totalSum.toFixed(1)} more!`);

    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
