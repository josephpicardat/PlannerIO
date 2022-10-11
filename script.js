$(document).ready(function () { 
    // Global Variables
    var timeDisplay = $('#currentDay');
    var description = $('.description');
    var saveButton = $('.saveBtn');

    // handle displaying the time
    var today = moment().format('dddd, MMMM Do');
    timeDisplay.text(today);

    // Creates moment varaible
    var now = moment();

    // determines the colors for the day
    for (let i = 0; i < 9; i++) {
        // determines if it is in the morning or noon
        if(now.format("a") === "am" && now.format("h") >= 9 && now.format("h") != 12 || now.format("a") === "pm" && now.format("h") == 12) {
            if (i + 9 < now.format("h")) {
                description[i].style.backgroundColor = "lightgrey";
            } else if (i + 9 == now.format("h")) {
                description[i].style.backgroundColor = "Tomato";
            } else if (i + 9 > now.format("h")) {
                description[i].style.backgroundColor = "MediumSpringGreen";
            } else {
                console.log(Error);
            }
        // determines if it is in the afternoon excluding noon
        } else if (now.format("a") === "pm" && now.format("h") <= 5) {
            if (i - 3 < now.format("h")) {
                description[i].style.backgroundColor = "lightgrey";
            } else if (i - 3 == now.format("h")) {
                description[i].style.backgroundColor = "Tomato";
            } else if (i - 3 > now.format("h")) {
                description[i].style.backgroundColor = "MediumSpringGreen";
            } else {
                console.log(Error);
            }
        } else {
            if(now.format("a") === 'am') {
                description[i].style.backgroundColor = "green"}
            else if (now.format("a") === 'pm') {
                description[i].style.backgroundColor = "lightgrey"}
            else {
                console.log(Error);      
            }
        }
    }

    // save button that saves description as well as displaying the save notification
    saveButton.on('click', function () {
        console.log("inside function");
        var description = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, description);

        $('.check').addClass('visible');

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
        $('.check').removeClass('visible');
        }, 5000);
    });

    // Get data from local storage and displays it on screen
    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));

});