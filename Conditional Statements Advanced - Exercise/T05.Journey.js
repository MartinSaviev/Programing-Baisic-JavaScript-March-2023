function rest(input) {

    let budget = Number(input[0]);
    let season = String(input[1]);

    let price = 0;
    let place = "";
    let country = "";

    if (budget <= 100) {
        country = 'Bulgaria';

        if (season === 'summer') {
            place = 'Camp';
            price = budget * 0.3;
        } else if (season === 'winter') {
            place = 'Hotel';
            price = budget * 0.7;
        }

    } else if (budget <= 1000) {
        country = 'Balkans'

        if (season === 'summer') {
            place = 'Camp';
            price = budget * 0.4;
        } else if (season === 'winter') {
            place = 'Hotel';
            price = budget * 0.8;
        }
    } else {
        country = 'Europe'

        if (season === 'summer') {
            place = 'Hotel';
            price = budget * 0.9;
        } else if (season === 'winter') {
            place = 'Hotel';
            price = budget * 0.9;
        }
    }

    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${price.toFixed(2)}`);

}

rest(["1500", "summer"])