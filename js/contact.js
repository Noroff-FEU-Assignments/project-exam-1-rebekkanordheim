/* const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let errorMessage = "";

  // Validate the name field
  if (name.length < 6) {
    errorMessage += "Name must be at least 6 characters long.\n";
  }

  // Validate the email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage += "Email address must be valid.\n";
  }

  // Validate the subject field
  if (subject.length < 16) {
    errorMessage += "Subject must be at least 16 characters long.\n";
  }

  // Validate the message field
  if (message.length < 26) {
    errorMessage += "Message must be at least 26 characters long.\n";
  }

  // If there is an error message, prevent form submission and display the error message
  if (errorMessage !== "") {
    event.preventDefault();
    alert(errorMessage);
  }
}); */

/* In this code, we first get the values of the input fields by their IDs and trim any leading or trailing whitespace from the input.

Then, we validate each input field using if statements and regular expressions. If an input field does not meet the requirements, we append an error message to a string variable called errorMessage.

Finally, we check if the errorMessage is not empty. If it is not, we prevent the form submission and display an alert with the error message.

You can add this JavaScript code to the bottom of your HTML file, just before the closing </body> tag. */
