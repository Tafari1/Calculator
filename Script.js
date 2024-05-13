let C = document.getElementById("clear");
let equal = document.getElementById("equal");

function appendToDisplay(input) {
  inputField.value += input;
}

// Clears the field
C.addEventListener("click", function () {
  let inputField = document.getElementById("inputField");
  inputField.value = " ";
});

equal.addEventListener("click", function () {
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = "Error";
  }
});
