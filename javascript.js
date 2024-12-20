document.getElementById('carBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const carModel = document.getElementById('carModel').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const location = document.getElementById('location').value;

    // Form validation (basic)
    if (!name || !email || !carModel || !pickupDate || !returnDate || !location) {
        alert('Please fill in all fields.');
        return;
    }

    // Display confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('customerName').textContent = name;
    document.getElementById('carModelConfirm').textContent = carModel;
    document.getElementById('pickupDateConfirm').textContent = pickupDate;
    document.getElementById('locationConfirm').textContent = location;

    // Clear the form
    document.getElementById('carBookingForm').reset();

    // Show floating message
    showFloatingMessage();
});

// Function to show and hide the floating "Car Booked" message
function showFloatingMessage() {
    const floatingMessage = document.getElementById('floatingMessage');
    floatingMessage.classList.add('show');

    // Hide the floating message after 3 seconds
    setTimeout(function() {
        floatingMessage.classList.remove('show');
    }, 3000);
}
