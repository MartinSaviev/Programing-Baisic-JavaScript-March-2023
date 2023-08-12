function histogram(input) {

    let numbers = input[0];

    let p1To200 = 0.00;
    let p2To400 = 0.00;
    let p3To600 = 0.00;
    let p4To800 = 0.00;
    let p5Up800 = 0.00;

    for (let i = 1; i <= numbers; i++) {

        let currentNumber = input[i];

        if (currentNumber < 200) {

            p1To200++;

        } else if (currentNumber < 400) {

            p2To400++;

        } else if (currentNumber < 600) {

            p3To600++;

        } else if (currentNumber < 800) {

            p4To800++;

        } else if (currentNumber >= 800) {

            p5Up800++;
        }

    }

    p1To200 = ((p1To200 / numbers) * 100).toFixed(2);
    p2To400 = ((p2To400 / numbers) * 100).toFixed(2);
    p3To600 = ((p3To600 / numbers) * 100).toFixed(2);
    p4To800 = ((p4To800 / numbers) * 100).toFixed(2);
    p5Up800 = ((p5Up800 / numbers) * 100).toFixed(2);

    console.log(p1To200 + '%');
    console.log(p2To400 + '%');
    console.log(p3To600 + '%');
    console.log(p4To800 + '%');
    console.log(p5Up800 + '%');

}

histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])




