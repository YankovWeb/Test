function solve() {
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const error = document.getElementById('error');

  function validateForm() {
    if (name.value === '' || email.value === '' || message.value === '') {
      error.textContent = 'Please fill out all fields.';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }

  function saveLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value);
  }
  function showWelcome() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const messageText = localStorage.getItem('message');

    const welcome = document.createElement('p');
    welcome.textContent = `Welcome, ${name}! Your email is ${email}. \n Your last message is: ${messageText}`;

    form.parentNode.replaceChild(welcome, form);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => {
      localStorage.clear();
      window.location.reload();
    });

    document.body.appendChild(clearButton);
  }

  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    if (validateForm()) {
      saveLocalStorage();
      showWelcome();
    }
  }
  form.addEventListener('submit', handleSubmit);
}

window.addEventListener('load', solve);
