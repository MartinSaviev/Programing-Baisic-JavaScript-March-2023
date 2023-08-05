function necessaryLiterature(input){

    numberPage = Number(input[0]);
    pagePerHouer = Number(input[1]);
    numberOfDays = Number(input[2]);

    totalReadingTime = numberPage/pagePerHouer;
    requiredHouersPerDay = totalReadingTime/numberOfDays;

    console.log(requiredHouersPerDay);
}
necessaryLiterature(["212 ","20 ","2 "]);