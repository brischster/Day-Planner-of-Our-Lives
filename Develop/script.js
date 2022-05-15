var saveBtn = $(".saveBtn");
var dateEl = $("#currentDay");
var columnEl = $(".colorByTime");
var currentID = $(".getId");
// console.log(currentID);
// console.log(currentID[2].id);
// var hours = moment().format("H");
// console.log(hours);
// console.log(hours === currentID[2].id);

// var currentTimeSlot = $(".getID");
// var currentID = document.querySelectorAll("[id^=box]"); making the id an array to try and loop over in the rendertask function
// console.log(currentID);
// 012;
// console.log(timeID);

function init() {
  function colorRows() {
    //   var rowColor =
    var hours = moment().format("H");
    // for (var i = 0; i < currentID.length - 1; i++) {
    //   //   console.log(currentID[i]);
    if (currentID[0].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime09").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    }
    if (currentID[0].id < hours) {
      $("#byTime09").css({ background: "#d3d3d3", color: "white" });
    }
    if (currentID[0].id > hours) {
      $("#byTime09").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[1].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime10").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    }
    if (currentID[1].id < hours) {
      $("#byTime10").css({ background: "#d3d3d3", color: "white" });
    }
    if (currentID[1].id > hours) {
      $("#byTime10").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[2].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime11").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    }
    if (currentID[2].id < hours) {
      $("#byTime11").css({ background: "#d3d3d3", color: "white" });
    }
    if (currentID[2].id > hours) {
      $("#byTime11").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[3].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime12").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[3].id < hours) {
      $("#byTime12").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime12").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[4].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime13").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[4].id < hours) {
      $("#byTime13").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime13").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[5].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime14").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[5].id < hours) {
      $("#byTime14").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime14").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[6].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime15").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[6].id < hours) {
      $("#byTime15").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime15").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[7].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime16").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[7].id < hours) {
      $("#byTime16").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime16").css({ background: "#77dd77", color: "white" });
    }
    if (currentID[8].id === hours) {
      //     console.log(currentID[i].id === hours);
      $("#byTime17").css({ background: "#ff6961", color: "white" }); // I need to tell it which specific column to be changing the color on (something to do with columnEL)
    } else if (currentID[8].id < hours) {
      $("#byTime17").css({ background: "#d3d3d3", color: "white" });
    } else {
      $("#byTime17").css({ background: "#77dd77", color: "white" });
    }
    //   if (currentID[i].id < hours) {
    //     console.log(currentID[i].id < hours);
    //     $(".colorByTime").css({ background: "#d3d3d3", color: "white" });
    //   }
    //   if (currentID[i].id > hours) {
    //     $(".colorByTime").css({ background: "#77dd77", color: "white" });
    //   }
    // }
  }
  colorRows();
  setInterval(colorRows, 60000);
}
init();

function currentTime() {
  var now = moment().format("dddd, MMMM, Do YYYY, H:m:ss a");
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
