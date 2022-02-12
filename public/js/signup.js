const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup')
  const password = document.querySelector('#password-input-signup')
  console.log(username.value);
  console.log(password.value);

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username:username.value, password:password.value
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('success')
    document.location.replace('/dashboard');
  } else {
    alert('Failed');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
