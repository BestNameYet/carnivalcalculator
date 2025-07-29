export function renderOrderTracker(state) {
  const tracker = document.getElementById('order-tracker');
  if (!tracker) return;

  tracker.innerHTML = `
    <div class="order-summary">
      <h3>Order So Far:</h3>
      <ul>
        <li>🎟️ Family Packs: ${state.familyPacks}</li>
        <li>🎟️ Discounted Bands: ${state.discountBands}</li>
        <li>🎟️ Full-Price Bands: ${state.fullBands}</li>
        <li>🎟️ Ride Tickets: ${state.tickets}</li>
      </ul>
    </div>
  `;
}