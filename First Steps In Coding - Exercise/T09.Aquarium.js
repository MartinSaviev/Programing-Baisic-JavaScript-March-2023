function aqua (input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentege = Number(input[3])/100;

    let aquarium = lenght*width*hight;
    let liters = aquarium/1000;
    let space = liters * percentege;
    let totalLiters  = liters-space;
    
    console.log(totalLiters)

}
aqua(["105 ","77 ","89 ","18.5 "]);