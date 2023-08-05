function solve(input){

let yard = (input[0]);
let landscape  = 7.61;

let procentDiscount = 0.18;

let totalCost = yard*landscape;
let discount = totalCost*procentDiscount;
let finalPrice = totalCost-discount;

console.log(`The final price is: ${finalPrice} lv.`)
console.log(`The discount is: ${discount} lv.`)
}
solve(["550"]);