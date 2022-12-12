// Add your JavaScript code here
        // Validate the form fields
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent the form from being submitted
          const name = document.querySelector('#name').value;
          const email = document.querySelector('#email').value;
          const date = document.querySelector('#date').value;
          const phone = document.querySelector('#phone').value;
          const time = document.querySelector('#time').value;
          if (!name || !email || !date || !phone || !time) {
            alert('Please fill out all the form fields.');
          } else {
            // Save the form data to local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone)
            localStorage.setItem('date', date);
            localStorage.setItem('time', time);
            // Display a confirmation message
            alert('Your booking has been confirmed. Thank you for using our service!');
          }
        });