import { renderOrderTracker } from './orderTracker.js';
import { renderOrderReceipt } from './orderReceipt.js';
import { renderChangeSummary } from './changeSummary.js';

// Button actions and state modifiers
function updateAllTrackers() {
  renderOrderTracker(state);
  renderOrderReceipt(state);
  renderChangeSummary(state);
}

// Family Packs
function incrementFamilyPacks() {
  state.familyPacks++;
  updateAllTrackers();
}

function decrementFamilyPacks() {
  if (state.familyPacks > 0) state.familyPacks--;
  updateAllTrackers();
}

// Discount Bands
function incrementDiscountBands() {
  state.discountBands++;
  updateAllTrackers();
}

function decrementDiscountBands() {
  if (state.discountBands > 0) state.discountBands--;
  updateAllTrackers();
}

// Full Price Bands
function incrementFullBands() {
  state.fullBands++;
  updateAllTrackers();
}

function decrementFullBands() {
  if (state.fullBands > 0) state.fullBands--;
  updateAllTrackers();
}

// Tickets
function incrementTickets() {
  state.tickets++;
  updateAllTrackers();
}

function decrementTickets() {
  if (state.tickets > 0) state.tickets--;
  updateAllTrackers();
}

function addTickets(n) {
  state.tickets += n;
  updateAllTrackers();
}

// Cash
function addCash(amount) {
  state.cashReceived += amount;
  updateAllTrackers();
}

function clearCash() {
  state.cashReceived = 0;
  updateAllTrackers();
}

// Expose for global usage (for inline buttons)
window.incrementFamilyPacks = incrementFamilyPacks;
window.decrementFamilyPacks = decrementFamilyPacks;
window.incrementDiscountBands = incrementDiscountBands;
window.decrementDiscountBands = decrementDiscountBands;
window.incrementFullBands = incrementFullBands;
window.decrementFullBands = decrementFullBands;
window.incrementTickets = incrementTickets;
window.decrementTickets = decrementTickets;
window.addTickets = addTickets;
window.addCash = addCash;
window.clearCash = clearCash;

function selectLocation(name, taxRate) {
  setLocation(name, taxRate);
  alert(`Location set to ${name} with tax rate ${taxRate * 100}%`);
  goNext();
}
