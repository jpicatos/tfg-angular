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

export const addCreditListener = () => {
  var container = document.querySelector('.mat-sidenav-content')
  var infoContainer = document.querySelector('.info')
  var toolBar = document.querySelector('.mat-toolbar')
  var changeHeight = 0;
  if(infoContainer && toolBar){
    changeHeight = infoContainer.getBoundingClientRect().height + toolBar.getBoundingClientRect().height
  }
  
  function checkPosition(event) {
    var cred = document.querySelector('.cred-select')
    if(cred.getBoundingClientRect().top < changeHeight){
      var credTop = document.querySelector('.cred-select-top')
      credTop.classList.add('is-visible');
    }
    else{
      var credTop = document.querySelector('.cred-select-top')
      credTop.classList.remove('is-visible');
    }
  }
  container.addEventListener('scroll', checkPosition)
}