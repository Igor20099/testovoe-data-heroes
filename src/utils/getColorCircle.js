export function getColorCircle(status) {
  if (status === "Alive") {
    return "circle-green";
  } else if (status === "Dead") {
    return "circle-red";
  } else {
    return "circle-grey";
  }
}
