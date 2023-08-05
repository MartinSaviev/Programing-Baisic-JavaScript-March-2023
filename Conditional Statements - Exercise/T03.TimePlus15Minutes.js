function time(input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);

    let time15 = 15;
    let time = min + time15;

    if (time > 59) {
        time -= 60;
        hour += 1;
    }
    if (hour > 23)
        hour = 0;

    if (time < 10) {
        console.log(`${hour}:0${time}`);
    }
    else {
        console.log(`${hour}:${time}`);
    }
}

time(["23", "00"]);