document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const fullName = document.getElementById("fullName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const amount = document.getElementById("amount").value;

    // Basic validation checks for card details can be added here

    // Display confirmation
    const confirmationMessage = `
        Thank you, ${fullName}! Your payment of $${amount} was successful.
        Card ending in ${cardNumber.slice(-4)} has been charged.
        Payment Date: ${new Date().toLocaleDateString()}
    `;
    document.getElementById("confirmationMessage").textContent = confirmationMessage;

    // Hide form and show confirmation
    document.querySelector(".payment-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});
