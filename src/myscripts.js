const arrayOfLeft = ["3.4rem", "-14.2em", "-32rem", "-49.7rem", "-67.5rem"];

function buttonLeft() {
  let element = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--view")
  );

  if (element <= 0) {
    return;
  } else {
    console.log(element);
    document.documentElement.style.setProperty("--view", element - 1);
    console.log(element);

    document.documentElement.style.setProperty(
      "--left",
      arrayOfLeft[element - 1]
    );
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

    console.log(element);

    document.documentElement.style.setProperty(
      "--left",
      arrayOfLeft[element + 1]
    );
  }
}
