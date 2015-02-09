var counter = function() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // add 0's if needed; changed this to a function to make my code more DRY
    var addZeros = function(arr) {
        var newArray = [];
        arr.forEach(function(item) {
            if (item.toString().length < 2) {
                item = "0" + item;
            }
            newArray.push(item);
        });
        return newArray;
    };

    var time = [hours, minutes, seconds];




    // Part 1
    var clock = addZeros(time).join(":");

    $(".clock").text(clock); // at first this wasn't repeating because I had this outside the function




    // Part 2: add a # and take out the :, then put that hex code in the background of the page
    var hexClock = "#" + (addZeros(time).join(""));

    $(".hex-clock").text(hexClock);
    $(".hex-clock-page").css("background-color", hexClock);




    // Part Go Further: switch seconds minutes and hours into base 16 to be a real hex code, then add to background as well
    var hexSeconds = seconds.toString(16).toUpperCase();
    var hexMinutes = minutes.toString(16).toUpperCase();
    var hexHours = hours.toString(16).toUpperCase();

    var hexTime = [hexHours, hexMinutes, hexSeconds];
    var hexCode = addZeros(hexTime).join("");

    $(".hex-code").text(hexCode);
    $(".hex-code-page").css("background-color", ("#" + hexCode));

}


$(function(){

    setInterval(counter, 1000);

});
