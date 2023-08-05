function materials(input){

let pensPriceOnCount = 5.80;
let markersPriceOnCount = 7.20;
let preparationPriceOnCount = 1.20;

let packetsPens = input[0];
let pakeetsMarkers = input[1];
let preparation = input[2];
let pecentegeDecrease = input[3]/100;

let packetsPensPrice = pensPriceOnCount*packetsPens;
let packetsMarkerPrice = markersPriceOnCount*pakeetsMarkers;
let preparationPrice = preparationPriceOnCount*preparation;

let allMaterialsPrice = packetsPensPrice+packetsMarkerPrice+preparationPrice;
let discount = allMaterialsPrice*pecentegeDecrease;
let totalPrice = allMaterialsPrice-discount;
console.log(totalPrice);

}
materials(["4","2 ","5 "," 13 "]);