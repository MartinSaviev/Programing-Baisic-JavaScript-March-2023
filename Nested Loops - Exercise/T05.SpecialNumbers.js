function specialNumbers(input) {

    let num = Number(input[0]);
    let printResult = ''

    for (let i = 1111; i <= 9999; i++) {

        let currNum = i.toString();
        let counter = 0;
        for (let z = 0; z < currNum.length; z++) {

            
            let number = Number(currNum[z])

            if (num % number === 0) {

                counter++;
            
            }
            if (counter === 4) {

                printResult += currNum + ' ';
                  
            }
            
        }
       
    }
    
    console.log(printResult);

}

specialNumbers((["3"]))