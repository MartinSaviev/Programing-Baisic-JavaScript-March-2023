function commissions(input) {

    let sity = String(input[0]);
    let percent = Number(input[1]);

    let commission = 0;

    if (sity === "Sofia") {
        if (percent <= 500) {
            commission = percent * (5 / 100);
        } else if (percent <= 1000) {
            commission = percent * (7 / 100);
        } else if (percent <= 10000) {
            commission = percent * (8 / 100);
        } else if (percent > 10000) {
            commission = percent * (12 / 100);
        }
    } else if (sity === "Varna") {
        if (percent <= 500) {
            commission = percent * (4.5 / 100);
        } else if (percent <= 1000) {
            commission = percent * (7.5 / 100);
        } else if (percent <= 10000) {
            commission = percent * (10 / 100);
        } else if (percent > 10000) {
            commission = percent * (13 / 100);
        }
    } else if (sity === "Plovdiv") {
        if (percent <= 500) {
            commission = percent * (5.5 / 100);
        } else if (percent <= 1000) {
            commission = percent * (8 / 100);
        } else if (percent <= 10000) {
            commission = percent * (12 / 100);
        } else if (percent > 10000) {
            commission = percent * (14.5 / 100);
        }
        
    } if (commission > 0) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");

    }
}
commissions(["Varna","3874.50"]);