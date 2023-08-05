function lunchBreak(input) {

    let serial = input[0];
    let episodeTime = Number(input[1]);
    let rest = Number(input[2]);

    let lunchTime = rest / 8;
    let leisureTime = rest / 4;
    let timeLeft = rest - lunchTime - leisureTime;



    if (episodeTime <= timeLeft) {
        let freeTime = Math.ceil(timeLeft - episodeTime);
        console.log(`You have enough time to watch ${serial} and left with ${freeTime} minutes free time.`);

    } else {
        let freeTime = Math.ceil(episodeTime - timeLeft);
        console.log(`You don't have enough time to watch ${serial}, you need ${freeTime} more minutes.`);

    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
