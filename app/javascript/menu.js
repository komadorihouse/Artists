function pullDown (){
  const btn = document.getElementById("manu-icon")
  const nav = document.querySelector("nav")

  btn.addEventListener('click',(e) => {
    e.preventDefault();
    nav.classList.toggle('open-menu');
  });
  

}

window.addEventListener('load', pullDown);