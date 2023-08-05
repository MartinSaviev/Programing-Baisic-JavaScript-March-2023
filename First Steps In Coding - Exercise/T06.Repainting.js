function Refinishing(input) {

    let nylonMeter = 1.50;
    let paintLitar = 14.50;
    let diluentLitar = 5.00;
    let bags = 0.40;
    let extraNylonMetar = 2.00;

    let nylonCount = Number(input[0]);
    let paintCount = Number(input[1]);
    let diluentCount = Number(input[2]);
    let houers = Number(input[3]);
    let tenPercentPaint = paintCount * 0.10;

    let totalPriceNylon = (nylonCount + extraNylonMetar) * nylonMeter;
    let totalPricePaint = (paintCount + tenPercentPaint) * paintLitar;
    let totalPriceDiluent = diluentCount * diluentLitar;

    let priceAllMatiral = bags + totalPriceNylon + totalPricePaint + totalPriceDiluent;
    let master = (priceAllMatiral * 0.30)*houers;
    let masterPrice = (priceAllMatiral + master);

    console.log(masterPrice);

}

Refinishing(["10", "11 ", "4 ", "8"]);