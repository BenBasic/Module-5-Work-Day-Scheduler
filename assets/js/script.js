var schedule = document.querySelector("#schedule");



var test1 = document.getElementById("10am")
console.log(test1)


// Displays current date on the page
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

// Sets the current time in hours for reference in later use to detect if a timeBlock is before, during, or after the current time
let curentTime = moment().format("HH");

// Properties of the time blocks used within the day scheduler
let timeBlocks = [
    {
        order: 0,
        hour: 9,
        amPm: "am",
        time: "09",
        note: ""
    },
    {
        order: 1,
        hour: 10,
        amPm: "am",
        time: "10",
        note: "" 
    },
    {
        order: 2,
        hour: 11,
        amPm: "am",
        time: "11",
        note: "" 
    },
    {
        order: 3,
        hour: 12,
        amPm: "pm",
        time: "12",
        note: "" 
    },
    {
        order: 4,
        hour: 1,
        amPm: "pm",
        time: "13",
        note: "" 
    },
    {
        order: 5,
        hour: 2,
        amPm: "pm",
        time: "14",
        note: "" 
    },
    {
        order: 6,
        hour: 3,
        amPm: "pm",
        time: "15",
        note: "" 
    },
    {
        order: 7,
        hour: 4,
        amPm: "pm",
        time: "16",
        note: "" 
    },
    {
        order: 8,
        hour: 5,
        amPm: "pm",
        time: "24",
        note: "" 
    },

];

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
    //set items in local storage.
    localStorage.setItem(time, text);
})


$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));



var noteInput = $(".description");



timeBlocks.forEach(function(thisHour) {
if (thisHour.time < moment().format("HH")) {
    noteInput.attr ({"class": "description before"})
} else if (thisHour.time === moment().format("HH")) {
    noteInput.attr({"class": "description during"})
} else if (thisHour.time > moment().format("HH")) {
    noteInput.attr({"class": "description after"})
}
})
