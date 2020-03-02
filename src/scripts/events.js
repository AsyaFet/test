function validateField(val) {
  console.log("Validate function", val);
  {
    const name = "Asya";
    if (val == name) {
      console.log("Valid");
    } else {
      console.log("Not Valid");
    }
  }
}

function buttonClick() {
  console.log("a");
}

function showTodaysDate() {
  alert(Date());
}

function divClick() {
  alert("Hi, I`m a block");
}

function pictureAction() {
  alert("Look at me again!");
}

function onPageLoad() {
  alert("Page is loaded");
}

window.validateField = validateField;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.divClick = divClick;
window.pictureAction = pictureAction;
window.onPageLoad = onPageLoad;
//validateFunction();
