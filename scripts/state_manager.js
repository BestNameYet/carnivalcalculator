// Global application state object
const state = {
  taxRate: 0,
  location: null,
  familyPacks: 0,
  discountBands: 0,
  fullBands: 0,
  tickets: 0,
  cashReceived: 0.00
};

// Simple setters
function setLocation(location, taxRate) {
  state.location = location;
  state.taxRate = taxRate;
  localStorage.setItem('selectedLocation', JSON.stringify({ location, taxRate }));
}

function setFamilyPacks(count) {
  state.familyPacks = count;
}

function setDiscountBands(count) {
  state.discountBands = count;
}

function setFullBands(count) {
  state.fullBands = count;
}

function setTickets(count) {
  state.tickets = count;
}

function addCash(amount) {
  state.cashReceived += amount;
}

function clearCash() {
  state.cashReceived = 0;
}

// Load location from storage if present
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('selectedLocation');
  if (saved) {
    const data = JSON.parse(saved);
    state.location = data.location;
    state.taxRate = data.taxRate;
  }
});