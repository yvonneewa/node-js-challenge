function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("$status").textContent = "keydown event";
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

