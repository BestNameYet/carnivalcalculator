export function renderChangeSummary(state) {
  const summary = document.getElementById('change-summary');
  if (!summary) return;

  const familyTotal = state.familyPacks * PRICES.familyPack;
  const discountTotal = state.discountBands * PRICES.discountBand;
  const fullTotal = state.fullBands * PRICES.fullBand;
  const ticketTotal = state.tickets * PRICES.ticket;

  const subtotal = familyTotal + discountTotal + fullTotal + ticketTotal;
  const taxAmount = subtotal * (state.taxRate || 0);
  const total = subtotal + taxAmount;
  const changeDue = state.cashReceived - total;

  summary.innerHTML = `
    <div class="change-summary">
      <h3>Transaction Overview</h3>
      <ul>
        <li><strong>Cost of Order:</strong> $${total.toFixed(2)}</li>
        <li><strong>Cash Received:</strong> $${state.cashReceived.toFixed(2)}</li>
        <li><strong>Change Due:</strong> $${changeDue.toFixed(2)}</li>
      </ul>
    </div>
  `;
}