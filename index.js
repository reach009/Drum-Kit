// Target all elements that have a class of drum (drum buttons)
// Detecting Button Press

var allDrumButton = document.querySelectorAll(".drum");

for (var i = 0; i < allDrumButton.length; i++) {

  // Add event listener to the button
  allDrumButton[i].addEventListener("click", function() {
    // this.style.color = "white";

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

  });

}

//  Detecting Keyboard Press

document.addEventListener("keypress", function(){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  // Instantiate a drum sound object
  var drumSound = new Audio();

  switch (key) {
    case "w":
      drumSound.src = "sounds/tom-1.mp3";
      break;
    case "a":
      drumSound.src = "sounds/tom-2.mp3";
      break;
    case "s":
      drumSound.src = "sounds/tom-3.mp3";
      break;
    case "d":
      drumSound.src = "sounds/tom-4.mp3";
      break;
    case "j":
      drumSound.src = "sounds/snare.mp3";
      break;
    case "k":
      drumSound.src = "sounds/crash.mp3";
      break;
    case "l":
      drumSound.src = "sounds/kick-bass.mp3";
      break;
    default:
      console.log("invalid drum key!");

  }

  drumSound.play();
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
