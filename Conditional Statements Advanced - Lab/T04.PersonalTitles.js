function gender(input) {

    let age = Number(input[0]);
    let sex = String(input[1]);

    let prtintSex = '';

    if (age >= 16 && sex === 'm') {
        prtintSex = 'Mr.';
    } else if (age < 16 && sex === 'm') {
        prtintSex = 'Master';
    } else if (age >= 16 && sex === 'f') {
        prtintSex = 'Ms.';
    } else if (age < 16 && sex === 'f') {
        prtintSex = 'Miss';
    }
    console.log(prtintSex);
    
}
gender(["13.5",
"m"])


