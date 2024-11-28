document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    errorMessage.textContent = '';
    successMessage.textContent = '';

    if (!name) {
        errorMessage.textContent = "Имя не может быть пустым.";
        return;
    }

    if (name.length < 2) {
        errorMessage.textContent = "Имя должно содержать не менее 2 символов.";
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Некорректный email.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Пароль должен содержать не менее 6 символов.";
        return;
    }

    successMessage.textContent = "Регистрация прошла успешно!";
});
