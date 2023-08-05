function time(input) {

    let first = Number(input[0]);
    let secound = Number(input[1]);
    let third = Number(input[2]);

    let sum = first + secound + third;

    let houers = Math.floor(sum / 60);
    let secounds = sum % 60;
    if (secounds < 10) {

        console.log(`${houers}:0${secounds}`) 

    }else{

        console.log(`${houers}:${secounds}`)
    }    
}
time(["35", "45", "44"])
