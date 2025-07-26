function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
    }
    function handleEmail() {
    const emailInput = document.querySelector('.email-input');
    if (validateEmail(emailInput.value)) {
    console.log("Valid email");
    alert("Valid Email");
    } else {
    console.log("Invalid email");
    alert("Invalid Email");
    }
    }