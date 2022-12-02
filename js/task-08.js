const loginForm = document.querySelector(".login-form");
let arr = [];
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
if (email.value === "" || password.value === "") {
    alert("Fill all the blank inputs.")
}

arr.push(email.value);
arr.push(password.value);

    event.currentTarget.reset();
console.log(arr);
});

