const form = document.getElementById('login');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
  const Username = form.elements.Username.value;
  const Password = form.elements.Password.value;

  // Send the user data to the server
  
  const sendData = ({Username,Password}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({Username,Password}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('/login', options)
    .then(res => res.json())
    .then(sendData => console.log({Username,Password}))
    .catch(err => console.error(err));
    };
});
