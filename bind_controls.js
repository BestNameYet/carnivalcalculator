function bindControls() {
  // Family Pack controls
  document.getElementById('btn-family-plus')?.addEventListener('click', incrementFamilyPacks);
  document.getElementById('btn-family-minus')?.addEventListener('click', decrementFamilyPacks);

  // Discount Bands controls
  document.getElementById('btn-discount-plus')?.addEventListener('click', incrementDiscountBands);
  document.getElementById('btn-discount-minus')?.addEventListener('click', decrementDiscountBands);

  // Full Bands controls
  document.getElementById('btn-full-plus')?.addEventListener('click', incrementFullBands);
  document.getElementById('btn-full-minus')?.addEventListener('click', decrementFullBands);

  // Ticket controls
  document.getElementById('btn-tickets-plus-1')?.addEventListener('click', () => addTickets(1));
  document.getElementById('btn-tickets-plus-5')?.addEventListener('click', () => addTickets(5));
  document.getElementById('btn-tickets-minus')?.addEventListener('click', decrementTickets);

  // Cash input controls
  document.getElementById('btn-cash-1')?.addEventListener('click', () => addCash(1.00));
  document.getElementById('btn-cash-5')?.addEventListener('click', () => addCash(5.00));
  document.getElementById('btn-cash-10')?.addEventListener('click', () => addCash(10.00));
  document.getElementById('btn-cash-20')?.addEventListener('click', () => addCash(20.00));
  document.getElementById('btn-cash-0-25')?.addEventListener('click', () => addCash(0.25));
  document.getElementById('btn-cash-0-10')?.addEventListener('click', () => addCash(0.10));
  document.getElementById('btn-cash-0-05')?.addEventListener('click', () => addCash(0.05));
  document.getElementById('btn-clear-cash')?.addEventListener('click', clearCash);
}

document.addEventListener('DOMContentLoaded', () => {
  bindControls();
});