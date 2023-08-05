function deposit(input){

    let depositAmount = Number(input[0]);
    let term = Number(input[1]);
    let rate = Number(input[2]);

    let interest = depositAmount*rate/100;
    let interestForOneMonth = interest/12;
    let totalAmount = Number(depositAmount+term*interestForOneMonth);
    
    console.log(totalAmount);
}

deposit(["2350 ","6 ","7"]);
