// validate function checks if the form is filled out correctly
function validate() {
    // Validate Full Name
    if (document.myForm.name.value == "") {
        alert("Please provide your name!");
        document.myForm.name.focus();
        return false;
    }

    // Validate Email Address
    if (document.myForm.Email.value == "") {
        alert("Please provide your Email address!");
        document.myForm.Email.focus();
        return false;
    }

    var emailID = document.myForm.Email.value;
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please provide a correct email address!");
        document.myForm.Email.focus();
        return false;
    }

    // Validate Subject
    if (document.myForm.subject.value == "") {
        alert("Please provide your subject!");
        document.myForm.subject.focus();
        return false;
    }

    // Validate Message
    if (document.myForm.message.value == "") {
        alert("Please provide your message!");
        document.myForm.message.focus();
        return false;
    }

    // Show the success response if all fields are valid
    showResponse();
    return false; // Prevent form submission
}

// Define showResponse function outside validate()
function showResponse() {
    // Hide the form and show the success message
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("response").style.display = "block";
}
