function solve(input) {

    let packOfDogFood = (input[0]);
    let packOfCatFood = (input[1]);

    let dogFood = 2.50;
    let catFood = 4.00;

    let totalDogFood = dogFood * packOfDogFood;
    let totalCatFood = catFood * packOfCatFood;
    console.log(totalDogFood + totalCatFood);
}
solve(["13", "9"])
