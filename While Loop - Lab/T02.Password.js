function password(input) {

    let name = input[0]
    let pass = input[1];

    let br = 2;
    let enterPassword = input[br]

    while (pass != enterPassword) {

        br++;
        enterPassword = input[br]

    }
    console.log(`Welcome ${name}!`);
    
}


password(["Gosho",
    "secret",
    "secret"])

