function largeNumber(input){

    let firstNum = Number(input[0]);
    let secoundNum = Number(input[1]);

    if (firstNum>=secoundNum) {
        console.log(firstNum)
    }
    else{
        console.log(secoundNum)
    }
}
largeNumber(["-5","5"])