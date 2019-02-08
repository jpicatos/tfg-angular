export const fetchDay = (val: string) => {
  switch (val) {
    case 'L':
      return "Lunes";
      break;
    case 'M':
      return "Martes";
      break;
    case 'X':
      return "Miércoles";
      break;
    case 'J':
      return "Jueves";
      break;
    case 'V':
      return "Viernes";
      break;
    default:
      break;
  }
  return;
}

export const minimiceLeft = () => {
  console.log("Minimice Left");
  var minimizable = document.getElementById('minimizable-container');
  if (isMinimiceLeft()) {
    minimizable.classList.remove("left-minimiced");
  }
  else {
    if (isMinimiceRight()) {
      minimizable.classList.remove("right-minimiced");
    }
    minimizable.classList.add("left-minimiced");
  }
}
export const minimiceRight = () => {
  console.log("Minimice Left");
  var minimizable = document.getElementById('minimizable-container');
  if (isMinimiceRight()) {
    minimizable.classList.remove("right-minimiced");
  }
  else {
    if (isMinimiceLeft()) {
      minimizable.classList.remove("left-minimiced");
    }
    minimizable.classList.add("right-minimiced");
  }
}

export const isMinimiceRight = () => {
  return document.getElementById('minimizable-container').classList.contains("right-minimiced")
}

export const isMinimiceLeft = () => {
  return document.getElementById('minimizable-container').classList.contains("left-minimiced")
}