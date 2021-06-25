function pullDown (){
  const pullDownButton = document.getElementById("manu-icon")
  const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (pullDownParents.getAttribute("style") == "display:block;"){
          pullDownParents.removeAttribute("style","display:block;")
      pullDownParents.removeAttribute("style","display:block;")
    }else{
      pullDownParents.setAttribute("style","display:block;")
    }
  });
  

}

window.addEventListener('load', pullDown);