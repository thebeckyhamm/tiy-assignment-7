var secondsCounter = function() {
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

    var clock = [hours, minutes, seconds].join(":");

    $(".clock").text(clock); // at first this wasn't repeating because I had this outside the function

}


$(function(){

    setInterval(secondsCounter, 1000);

});
