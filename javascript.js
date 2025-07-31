 function checkLogin() {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

function generateBill() {
  const customer = document.getElementById("customer").value;
  const amount = document.getElementById("amount").value;

  if (!customer || !amount) {
    alert("Fill all fields");
    return;
  }

  const bill = `
    <h3>Bill for ${customer}</h3>
    <p>Total: ₹${amount}</p>
    <a href="mailto:?subject=Bill for ${customer}&body=Amount: ₹${amount}">📧 Email</a> |
    <a href="https://wa.me/?text=Bill for ${customer}%0AAmount: ₹${amount}">📱 WhatsApp</a>
  `;

  document.getElementById("billResult").innerHTML = bill;
}

function markAsPremium() {
  localStorage.setItem("premium", true);
  alert("You are now a premium member!");
}
