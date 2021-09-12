const button = document.getElementById("myButton");
const myList = document.querySelector("#myList");
const getOnDoneButton = document.getElementById("onDoneButton");
const getOnRemoveButton = document.getElementById("onRemoveButton");
const onDoneButtonTemplate =
  "<button onclick='onDone()' id='onDoneButton'>Done</button>";
const onRemoveButtonTemplate =
  "<button onclick='onRemove()' id='onRemoveButton'>Remove</button>";

button.addEventListener("click", addText);
// onDoneButton.addEventListener("click", function (event) {
//   console.log("change color");
//   const getlistItem = document.querySelector(".listItem");
//   console.log(getlistItem);
//   console.log(event);
//   getlistItem.style.color = "#32CD32"; // forecolor
// });

function addText() {
  let inputValue = document.getElementById("name").value;
  if (!inputValue) {
    return alert("Write something!");
  }
  myList.insertAdjacentHTML(
    "beforeend",
    "<div class='listItem'>" +
      inputValue +
      "</div>" +
      onDoneButtonTemplate +
      onRemoveButtonTemplate
  );
  document.getElementById("name").value = "";
  onDone(document.getElementById("onDoneButton"));
}

function onDone(button) {
  console.log(button);
  button.addEventListener("click", function(event) {
    const getlistItem = document.querySelector(".listItem");
    console.log(getlistItem);
    console.log(event);
    getlistItem.style.color = "#32CD32";
  });
}

function onRemove(event) {
  // var element = document.getElementById("myElementID");
  console.log("deleted");
  element.parentNode.removeChild(element);
}
