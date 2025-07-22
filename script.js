// script.js

document.addEventListener('DOMContentLoaded', () => {
  const btnStart = document.querySelector('.btn-start');
  const introScreen = document.querySelector('.intro-screen');
  const menuScreen = document.querySelector('.menu-screen');
  const clickSound = document.getElementById('click-sound');

  function playClickSound() {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  }

  btnStart.addEventListener('click', () => {
    playClickSound();

    introScreen.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    introScreen.style.opacity = '0';
    introScreen.style.transform = 'translateY(-40px)';

    setTimeout(() => {
      introScreen.classList.add('hidden');

      menuScreen.classList.remove('hidden');
      menuScreen.style.opacity = '0';
      menuScreen.style.transform = 'translateY(20px)';
      menuScreen.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

      // Trigger reflow for animation
      void menuScreen.offsetWidth;

      menuScreen.style.opacity = '1';
      menuScreen.style.transform = 'translateY(0)';
    }, 650);
  });

  const destButtons = document.querySelectorAll('.dest-btn');
  destButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound();
      const link = btn.getAttribute('data-link');
      if (link) {
        setTimeout(() => {
          window.location.href = link;
        }, 200);
      }
    });
  });
});
