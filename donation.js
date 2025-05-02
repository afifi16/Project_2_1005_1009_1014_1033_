window.onload = function () {
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
};

function validateForm() {
    const fullName = document.getElementById("fname").value.trim();
    const amount = document.getElementById("Amount").value.trim();

    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (amount === "") {
        alert("Please enter the amount.");
        return false;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return false;
    }

    return true;
}
