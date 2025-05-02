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
    const Ic = document.getElementById("Ic").value.trim();
    const contact = document.getElementById("Contact").value.trim();

    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (Ic === "") {
        alert("Please enter the amount.");
        return false;
    }

    if (isNaN(Ic) || Number(Ic) <= 0) {
        alert("Please enter a valid amount.");
        return false;
    }

    if (contact === "") {
        alert("Please enter your contact number.");
        return false;
    }

    return true;
}
