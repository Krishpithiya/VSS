document.getElementById("vehicleBookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const pickupTime = document.getElementById("pickupTime").value;
    const dropoffDate = document.getElementById("dropoffDate").value;
    const dropoffTime = document.getElementById("dropoffTime").value;

    // Display confirmation
    const confirmationMessage = `
        Thank you, ${name}! Your booking for a ${vehicleType} is confirmed.
        Pickup: ${pickupDate} at ${pickupTime}
        Dropoff: ${dropoffDate} at ${dropoffTime}
    `;
    document.getElementById("confirmationMessage").textContent = confirmationMessage;

    // Hide form and show confirmation
    document.querySelector(".booking-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});
