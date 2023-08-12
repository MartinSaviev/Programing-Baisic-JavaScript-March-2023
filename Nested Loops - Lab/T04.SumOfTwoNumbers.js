function sumNumbers(input) {

    let startNum = Number(input.shift());
    let endNum = Number(input.shift());
    let magicNum = Number(input.shift());


    let counter = 0;
    let isValid = true;

    for (let i = startNum; i <= endNum; i++) {

      

       for (let z = startNum; z <= endNum; z++) {

        counter++;

        if ((i + z)=== magicNum) {

            console.log(`Combination N:${counter} (${i} + ${z} = ${magicNum})`);


            isValid = false;
           return;
            
        }
        
       }
       

    }

    if (isValid) {

        console.log(`${counter} combinations - neither equals ${magicNum}`);
        
    }


}

sumNumbers(["88", 
"888", 
"2000"])






