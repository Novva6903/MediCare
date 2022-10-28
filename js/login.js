document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    if (email == "") {
        alert("Please input your email!");
        return;
    }

    if (password == "") {
        alert("Please input your password");
        return;
    }

    document.querySelector("form").reset();
})