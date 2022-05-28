// Displays current date on the page
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

// Sets the current time in hours for reference in later use to detect if a timeBlock is before, during, or after the current time
let curentTime = moment().format("HH");

// Properties of the time blocks used within the day scheduler
let timeBlocks = [
    {
        time: "10",
        id: "10am"
    },
    {
        time: "11",
        id: "11am"
    },
    {
        time: "12",
        id: "12pm" 
    },
    {
        time: "13",
        id: "1pm"
    },
    {
        time: "14",
        id: "2pm"
    },
    {
        time: "15",
        id: "3pm"
    },
    {
        time: "16",
        id: "4pm" 
    },
    {
        time: "24",
        id: "5pm"
    },
];

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    // takes the change from the sibling html description attribute
    var text = $(this).siblings(".description").val(); 
    // takes the change from the parent html id attribute
    var time = $(this).parent().attr("id");
    //sets items in local storage.
    localStorage.setItem(time, text);
})

// Grabs items from local storage for appropriate time block
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

// Assigns noteInput to the jQuery description class
var noteInput = $(".description");

// Checks if the time property of the appropriate time block is lesser than, equal to, or greater than the current time and assigns new ids and classes for style sheet reference
timeBlocks.forEach(function(thisHour) {
if (thisHour.time < moment().format("HH")) {
    $("#"+thisHour.id + " " + ".description").attr ({"class": "col-md-10 description before"})
} else if (thisHour.time === moment().format("HH")) {
    $("#"+thisHour.id + " " + ".description").attr({"class": "col-md-10 description during"})
} else if (thisHour.time > moment().format("HH")) {
    $("#"+thisHour.id  + " " + ".description").attr({"class": "col-md-10 description after"})
}
})
