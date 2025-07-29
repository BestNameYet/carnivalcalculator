const screens = [
  'screen-location-confirm',
  'screen-family-packs',
  'screen-discount-bands',
  'screen-full-bands',
  'screen-tickets',
  'screen-cash-entry',
  'screen-change'
];

let currentScreenIndex = 0;

function goToScreen(screenId) {
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === screenId ? 'block' : 'none';
  });
  currentScreenIndex = screens.indexOf(screenId);
}

function goNext() {
  if (currentScreenIndex < screens.length - 1) {
    goToScreen(screens[currentScreenIndex + 1]);
  }
}

function goPrevious() {
  if (currentScreenIndex > 0) {
    goToScreen(screens[currentScreenIndex - 1]);
  }
}

// Hook up navigation buttons
document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('btn-next');
  const prevBtn = document.getElementById('btn-prev');
  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrevious);

  goToScreen(screens[0]); // Initialize on first screen
});