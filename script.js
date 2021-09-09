let inputValue = document.getElementById("name").value;
const button = document.getElementById("myButton");
const myList = document.querySelector("#myList");
button.addEventListener("click", addText);

function addText() {
  inputValue = document.getElementById("name").value;
  if (!inputValue) {
    return alert("Write something!");
  }
  myList.insertAdjacentHTML("beforeend", "<div>" + inputValue + "</div>");
  document.getElementById("name").value = "";
}
