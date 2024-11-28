document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
  
    errorMessage.textContent = '';
    successMessage.textContent = '';
  
    let valid = true;
  
    const namePattern = /^[A-Za-zА-Яа-яЁё]{2,}$/;
    if (!namePattern.test(name)) {
      valid = false;
      errorMessage.textContent += 'Имя должно содержать минимум 2 символа и только буквы.\n';
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      valid = false;
      errorMessage.textContent += 'Некорректный email.\n';
    }
  
    if (password.length < 6) {
      valid = false;
      errorMessage.textContent += 'Пароль должен содержать не менее 6 символов.\n';
    }
  
    if (valid) {
      successMessage.textContent = 'Регистрация прошла успешно!';
    }
  });
  