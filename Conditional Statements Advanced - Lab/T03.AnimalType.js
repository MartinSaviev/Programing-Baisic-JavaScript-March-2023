function animal(input){

    let animal = input[0];

    let tipe = "";

    switch (animal) {
        case "dog":
            tipe = "mammal"
            break;
        case "crocodile":
        case  "tortoise":
        case "snake":
            tipe = "reptile";
            break;
        default:
            tipe = "unknown";
            break;
    }
    console.log(tipe)
}
animal(["snake"]);