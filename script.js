const text = ["Graphic Designer", "Photographer", "Creative Thinker"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  if (index >= text.length) {
    index = 0;
  }
  currentText = text[index];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 100);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 150);
    }
  }
}

type();
