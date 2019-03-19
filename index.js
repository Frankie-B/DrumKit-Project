for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    this.style.color = 'white';
  }); //Event listner for button click with annonymous funciton
}

/* var audio = new Audio('sounds/tom-1.mp3');
    audio.play(); */
