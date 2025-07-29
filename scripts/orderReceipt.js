export function renderOrderReceipt(state) {
  const receipt = document.getElementById('order-receipt');
  if (!receipt) return;

  const familyTotal = state.familyPacks * PRICES.familyPack;
  const discountTotal = state.discountBands * PRICES.discountBand;
  const fullTotal = state.fullBands * PRICES.fullBand;
  const ticketTotal = state.tickets * PRICES.ticket;

  const subtotal = familyTotal + discountTotal + fullTotal + ticketTotal;
  const taxAmount = subtotal * (state.taxRate || 0);
  const total = subtotal + taxAmount;

  receipt.innerHTML = `
    <div class="receipt">
      <h3>Order Receipt</h3>
      <ul>
        <li>Family Packs: $${familyTotal.toFixed(2)}</li>
        <li>Discount Bands: $${discountTotal.toFixed(2)}</li>
        <li>Full Bands: $${fullTotal.toFixed(2)}</li>
        <li>Ride Tickets: $${ticketTotal.toFixed(2)}</li>
        <li><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</li>
        <li><strong>Tax (${(state.taxRate * 100).toFixed(2)}%):</strong> $${taxAmount.toFixed(2)}</li>
        <li><strong>Total:</strong> $${total.toFixed(2)}</li>
      </ul>
    </div>
  `;
}