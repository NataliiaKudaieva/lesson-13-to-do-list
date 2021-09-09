function addText() {
  let inputValue = document.getElementById("name").value;
  if (!inputValue) {
    return alert("Write something!");
  }
  document
    .querySelector("#myList")
    .insertAdjacentHTML("beforeend", "<div>" + inputValue + 
    "</div>");
  document.getElementById("name").value = "";
}

const button = document.getElementById("myButton");
button.addEventListener("click", addText);
