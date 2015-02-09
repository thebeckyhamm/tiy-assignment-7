var counter = function() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // add 0's if needed
    if (seconds.toString().length < 2) { 
        seconds = "0" + seconds;
    }
    if (minutes.toString().length < 2) {
        minutes = "0" + minutes;
    }
    if (hours.toString().length < 2) {
        hours = "0" + hours;
    }

    var time = [hours, minutes, seconds];

    // Part 1
    var clock = time.join(":");

    $(".clock").text(clock); // at first this wasn't repeating because I had this outside the function


    // Part 2: add a # and take out the :, then put that hex code in the background of the page
    var hexClock = "#" + ([hours, minutes, seconds].join(""));

    $(".hex-clock").text(hexClock);

    $(".hex-clock-page").css("background-color", hexClock);

    // Part Go Further: switch seconds minutes and hours into base 16 to be a real hex code, then add to background as well
    var hexSeconds = seconds.toString(16).toUpperCase();
    var hexMinutes = minutes.toString(16).toUpperCase();
    var hexHours = hours.toString(16).toUpperCase();

    // add 0's if needed
    if (hexSeconds.toString().length < 2) { 
        hexSeconds = "0" + hexSeconds;
    }
    if (hexMinutes.toString().length < 2) {
        hexMinutes = "0" + hexMinutes;
    }
    if (hexHours.toString().length < 2) {
        hexHours = "0" + hexHours;
    }

    var hexCode = [hexHours, hexMinutes, hexSeconds].join("");

    $(".hex-code").text(hexCode);

    $(".hex-code-page").css("background-color", ("#" + hexCode));

}


$(function(){

    setInterval(counter, 1000);

    //counter();

});
