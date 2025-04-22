document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('opacity-0');
      menu.classList.toggle('max-h-0');
      menu.classList.toggle('opacity-100');
      menu.classList.toggle('max-h-96');

    });
  }
});
