const texts = ["⚡Cyber Warrior⚡", "Surviving the digital battlefield"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 80; // Kecepatan ketik

function typeEffect() {
    const textElement = document.getElementById("animated-text");

    if (!isDeleting) {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
    } else {
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
    }

    textElement.innerHTML = currentText;

    if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => isDeleting = true, 1200);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);