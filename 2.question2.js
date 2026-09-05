function getDayType(day){
    switch(day.toLowerCase()){
        case "friday":
            case "saturday":
                return "Weekend";
        case "sunday":
        case "monday":
        case "Tuesday":
        case "wednesday":
        case "Thursday":
            return "working day";
        default:
            return "Invalid day";
    }
}


console.log(getDayType("friday"));