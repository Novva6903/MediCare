document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const confirm_password = document.querySelector(".confirm-password").value;

    if (!validateEmail(email)) {
        return;
    }

    if (!validatePassword(password)) {
        return;
    }

    if (password.localeCompare(confirm_password) != 0) {
        alert("Confirm Password must be same as Password!");
        return;
    }

    alert("You've successfully registered!");
    document.querySelector("form").reset();
})

function validateEmail(email) {
    if(email == ""){
        alert("Please input your email!");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email must contain @!");
        return false;
    }

    if(email.startsWith("@")){
        alert("You cannot use \"@\" at the beginning of your email!")
        return false
    }

    if(!email.endsWith(".com") && !email.endsWith(".ac.id")){
        alert("Your email must end with \".com\" or \".ac.id\"!")
        return false;
    }

    if(email.indexOf("@@") == 0){
        alert("Email mustn't contain double @!");
        return false;
    }
    
    return true;
}

function validatePassword(password) {
    if (password.length < 8) {
        alert("Password must contain at least 8 characters!");
        return false;
    }
    
    if (!password.match(/[A-Z]/g)) {
        alert("Password must contain at least 1 upper case character!");
        return false;
    }

    if (!password.match(/[0-9]/g)) {
        alert("Password must contain at least 1 numeric character!");
        return false;
    }

    return true;
}