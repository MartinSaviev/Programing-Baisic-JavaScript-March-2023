function weekend(input){

    let dayOfWeek = String(input[0]);
    let day = "";
    switch (dayOfWeek) {
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": 
        day = "Working day";
        break;
        case "Saturday":
        case "Sunday": 
        day = "Weekend";
        break;
        default: day = "Error"; break;
    }
    console.log(day)
}
weekend(["Sunday"]);