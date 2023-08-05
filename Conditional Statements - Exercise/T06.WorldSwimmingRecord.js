function worldRecord(input){
    let timeToWin =Number(input[0]);
    let swimDiscance = Number(input[1]);
    let floatsTime = Number(input[2]);

    let swimTime = swimDiscance*floatsTime;
    let slows = Math.floor(swimDiscance/15)
    let slowEvery15m = slows*12.5;
    let totalTime = swimTime+slowEvery15m;


    if (timeToWin<=totalTime){

        console.log(`No, he failed! He was ${(totalTime-timeToWin).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}
     
worldRecord(["55555.67","3017","5.03"]);