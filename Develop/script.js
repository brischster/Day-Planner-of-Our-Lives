var saveBtn = $(".save-btn");
var dateEl = $("#currentDay");
// var currentTimeSlot = $(".getID");
// var currentID = document.querySelectorAll("[id^=box]"); making the id an array to try and loop over in the rendertask function
// console.log(currentID);
// 012;
// console.log(timeID);

function currentTime() {
  var now = moment().format("dddd, MMMM, Do YYYY, HH:m:ss a");
  $("#currentDay").html(now);
  setTimeout(currentTime, 1000);
}
$(document).ready(function () {
  currentTime();
});

function clickHandler() {
  var textInput = $(this).parent().siblings("td").children().val();
  var timeID = $(this).parent().siblings("th").attr("id");
  localStorage.setItem(timeID, textInput);
}

saveBtn.on("click", clickHandler);

$("#09").siblings("td").children().val(localStorage.getItem("09"));
$("#10").siblings("td").children().val(localStorage.getItem("10"));
$("#11").siblings("td").children().val(localStorage.getItem("11"));
$("#12").siblings("td").children().val(localStorage.getItem("12"));
$("#13").siblings("td").children().val(localStorage.getItem("13"));
$("#14").siblings("td").children().val(localStorage.getItem("14"));
$("#15").siblings("td").children().val(localStorage.getItem("15"));
$("#16").siblings("td").children().val(localStorage.getItem("16"));
$("#17").siblings("td").children().val(localStorage.getItem("17"));

// function renderTask() {
//   for (var i = 0; i < currentID.length; i++) {
//     $("currentID[i]")
//       .siblings("td")
//       .children()
//       .val(localStorage.getItem("timeID[i]"));
//     console.log(currentID[i]);
//   }
// }

// renderTask();

// if row time less than current time, color grey
// if row time equals current hour, color red
// if row time greater than current hour, color green
