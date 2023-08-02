function buttonLeft() {
  let element = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--view")
  );

  if (element <= 0) {
    return;
  } else {
    document.documentElement.style.setProperty("--view", element - 1);
  }
}
function buttonRight() {
  let element = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--view")
  );

  if (element >= 4) {
    return;
  } else {
    document.documentElement.style.setProperty("--view", element + 1);
  }
}
