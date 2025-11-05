// Get elements from the DOM
const phoneInput = document.getElementById('phone');
const otpSection = document.getElementById('otpSection');
const otpInput = document.getElementById('otp');
const getOtpBtn = document.getElementById('getOtpBtn');
const loginBtn = document.getElementById('loginBtn');

// Event listener for 'Get OTP' button
getOtpBtn.addEventListener('click', function() {
    const phone = phoneInput.value;

    // Check if phone number is 10 digits
    if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
        // Show OTP input section and the login button
        otpSection.style.display = 'block';
        loginBtn.style.display = 'inline-block';
        getOtpBtn.style.display = 'none'; // Hide 'Get OTP' button
    } else {
        alert("Please enter a valid 10-digit phone number.");
    }
});

// Event listener for 'Login' button
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const otp = otpInput.value;

    // Basic validation for 4-digit OTP
    if (otp.length === 4 && /^[0-9]+$/.test(otp)) {
        // Redirect to another HTML page after successful login
        window.location.href = "landing.html"; // Replace with your actual next page
    } else {
        alert("Please enter a valid 4-digit OTP.");
    }
});