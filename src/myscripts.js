const arrayOfLeft = ["3.4rem", "-14.2em", "-32rem", "-49.7rem", "-67.5rem"];
const arrayOfLeftTablet = [
  "6.67rem",
  "-27.86em",
  "-62.8rem",
  "-97.53em",
  "-132.47rem",
];
const arrayOfLeftDesktop = [
  "3.4rem",
  "-14.2em",
  "-32rem",
  "-49.7rem",
  "-67.5rem",
];
const arrayValues = [3.4, -14.2, -32, -49.7, -67.5];
const tabletValue = 1.9625;

function buttonLeft() {
  let element = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--view")
  );

  if (element <= 0) {
    return;
  } else {
    if (window.innerWidth < 768) {
      console.log(element);
      document.documentElement.style.setProperty("--view", element - 1);
      console.log(element);

      document.documentElement.style.setProperty(
        "--left",
        arrayValues[element - 1] + "em"
      );
    } else if (window.innerHeight < 1440) {
      document.documentElement.style.setProperty("--view", element - 1);

      document.documentElement.style.setProperty(
        "--leftTablet",
        arrayValues[element - 1] * tabletValue + "em"
      );
    } else {
    }
  }
}
function buttonRight() {
  let element = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--view")
  );

  if (element >= 4) {
    return;
  } else {
    if (window.innerWidth < 768) {
      document.documentElement.style.setProperty("--view", element + 1);

      console.log(element);

      document.documentElement.style.setProperty(
        "--left",
        arrayValues[element + 1] * tabletValue + "em"
      );
    } else if (window.innerHeight < 1440) {
      document.documentElement.style.setProperty("--view", element + 1);

      document.documentElement.style.setProperty(
        "--leftTablet",
        arrayValues[element + 1] * tabletValue + "em"
      );
    } else {
    }
  }
}
