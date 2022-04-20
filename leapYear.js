function leapYear(y){
    var year = y
    if ( year % 4 !== 0 ){
        return `year ${year} is NOT leap year`;
    }
    if ( year % 4 == 0 || year % 100 !== 0 && year % 400 == 0){
        return `year ${year} is leap year by 2nd condition`
    }
}

// resource: https://time-and-calendar.com/leap-years/

console.log("Enter year");
process.stdin.once('data', (year) => {
    var isLeapYear = leapYear(year)
    console.log(isLeapYear);
    process.exit();
});