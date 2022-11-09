function addListenner(event){
    event.preventDefault
}
window.onload = function () {
    const getButton= document.getElementById('submit');
   getButton.addEventListener('click', addListenner);
  };