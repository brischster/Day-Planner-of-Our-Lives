var saveBtn = $(".save-btn");

function clickHandler() {
  var textInput = $(this).parent().siblings("td").children().val();
  var timeID = $(this).parent().siblings("th").attr("id");
  localStorage.setItem(timeID, textInput);
}

saveBtn.on("click", clickHandler);

$("#09").siblings("td").children().val(localStorage.getItem("09"));
