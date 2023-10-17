
function Form() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const emailRegex = /^[a-z0-9]+@gmail\.com$/;
    if (!email.match(emailRegex)) {
        error.textContent = "Invalid email address";
        error.style.display = "block"; 
        return false;
    }

    if (password.length <=8) {
        error.textContent = "Password must be at least 8 characters long";
        error.style.display = "block"; 
        return false;
    }

    if (!/[a-z]/.test(password)) {
        error.textContent = "Password must include at least one lowercase letter";
        error.style.display = "block"; 
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        error.textContent = "Password must include at least one uppercase letter";
        error.style.display = "block"; 
        return false;
    }
    
    if (!/[\W_]/.test(password)) {
        error.textContent = "Password must include at least one special character";
        error.style.display = "block"; 
        return false;
    }

    if (!/\d/.test(password)) {
        error.textContent = "Password must include at least one digit";
        error.style.display = "block"; 
        return false;
    }
    error.style.display = "none"; 
    return true;
}
