function vacations(input) {

    let month = String(input[0]);
    let nightCount = Number(input[1]);
    
    let studio = 0;
    let apartment = 0;

    let totalPriceStudio = 0;
    let totalPriceApartment = 0;
    
    if (month === 'May' || month === 'October') {

        studio = 50;
        apartment = 65;

        if (nightCount <= 7) {

            totalPriceStudio = studio * nightCount
            totalPriceApartment = apartment * nightCount;


        } else if (nightCount > 7 && nightCount <=14) {

            totalPriceStudio = (studio * nightCount) * 0.95;
            totalPriceApartment = apartment * nightCount;

        } else if (nightCount > 14) {


            totalPriceStudio = (studio * nightCount) * 0.70;;
            totalPriceApartment = (apartment * nightCount) * 0.90;

        }
        
    }
    else if (month === 'June' || month === 'September') {

        studio = 75.20;
        apartment = 68.70;

        if (nightCount > 14) {

            totalPriceStudio = (studio * nightCount) * 0.80;
            totalPriceApartment = (apartment * nightCount) * 0.90;

        } else {

            totalPriceStudio = studio * nightCount;
            totalPriceApartment = apartment * nightCount;

        }
    }
    else if (month === 'July' || month === 'August') {

        studio = 76.00;
        apartment = 77.00;

        totalPriceStudio = studio * nightCount;
        if (nightCount > 14) {

            totalPriceApartment = (apartment * nightCount) * 0.90;

        }
        else {

            totalPriceApartment = apartment * nightCount;
        }
    }

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);

}
vacations(["May",
    "15"])

