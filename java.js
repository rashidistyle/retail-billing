 function generateBill() {
  const customer = document.getElementById("customer").value;
  const amount = document.getElementById("amount").value;

  if (!customer || !amount) {
    alert("Fill all fields");
    return;
  }

  const billText = `🧾 Bill for ${customer}\nAmount: ₹${amount}`;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(billText)}`;

  const bill = `
    <div id="billToPrint">
      <h3>🧾 Bill for ${customer}</h3>
      <p><strong>Amount:</strong> ₹${amount}</p>
    </div>
    <br>
    <a href="${whatsappURL}" target="_blank">
      <button>📱 Share on WhatsApp</button>
    </a>
    <button onclick="printBill()">🖨️ Print Bill</button>
  `;

  document.getElementById("billResult").innerHTML = bill;
}

