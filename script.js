document.addEventListener("DOMContentLoaded", () => {
  const text = ["Data Analyst"];
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
        setTimeout(type, 80);
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
      } else {
        setTimeout(type, 120);
      }
    }
  }

  type();
});
