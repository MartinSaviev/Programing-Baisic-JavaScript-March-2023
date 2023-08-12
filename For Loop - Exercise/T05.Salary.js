function salary(input) {

    let numberTabs = Number(input[0]);
    let salary = Number(input[1]);
    let enterWeb = String(input[2]);

    let allWebSite = [];

    for (let z = 0; z < numberTabs.length; z++) {

        allWebSite.push(enterWeb);

        enterWeb = input[z + 3]
    }

    let sum = salary;

    for (let i = 0; i < allWebSite.length; i++) {

        let currentSite = allWebSite[i];

        if (currentSite === 'Facebook') {

            sum -= 150;

        } else if (currentSite === 'Instagram') {

            sum -= 100;

        } else if (currentSite === 'Reddit') {

            sum -= 100;

        }
        if (sum <= 0) {

            console.log("You have lost your salary.");

            return;
        }

    }
    if (sum > 0) {
        console.log(sum);

    }

}

salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])
