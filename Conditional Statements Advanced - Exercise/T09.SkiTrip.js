function holiday(input) {

    let days = Number(input[0]);
    let typeRoom = String(input[1]);
    let evaluation = String(input[2]);

    // example: 11 days = 10 nights

    let sum = 0;

    switch (typeRoom) {

        case 'room for one person':

            if (days < 10 || (days >= 10 && days <= 15) || days > 15) {
                sum = (days - 1) * 18;
            }
            break;

        case 'apartment':

            if(days<10){

                sum = (days - 1) * 25;
                sum = sum * 0.70;

            }else if (days >= 10 && days <= 15){

                sum = (days - 1) * 25;
                sum = sum * 0.65;

            }else {

                sum = (days - 1) * 25;
                sum = sum * 0.50;

            }

            break;
        case 'president apartment':

            if(days<10){

                sum = (days - 1) * 35;
                sum = sum * 0.90;

            }else if (days >= 10 && days <= 15){

                sum = (days - 1) * 35;
                sum = sum * 0.85;

            }else {

                sum = (days - 1) * 35;
                sum = sum * 0.80;

            }

            break;
    }
    if (evaluation==='positive') {
        
        sum = sum + (sum * 0.25);

    } else {
        sum = sum - (sum * 0.10);
    }

    console.log(sum.toFixed(2));

}

holiday(["12",
"president apartment",
"negative"])

