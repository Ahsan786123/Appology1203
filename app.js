document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const questionSection = document.getElementById('question-section');
  const gallerySection = document.getElementById('gallery-section');

  yesBtn?.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
  });

  function moveNoButton() {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.textContent = 'No😁';
  }

  if (window.matchMedia("(hover: hover)").matches) {
    // Laptop/desktop
    noBtn?.addEventListener('mouseover', moveNoButton);
  } else {
    // Mobile
    noBtn?.addEventListener('click', moveNoButton);
  }
});
