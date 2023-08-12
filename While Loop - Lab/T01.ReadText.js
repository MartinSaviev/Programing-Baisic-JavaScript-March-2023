function readText(input) {


    let br = 0;
    let text = input[br];

    while (text !== 'Stop') {

        console.log(text);
        br++;
        text = input[br];
    }
}


readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])

                     