const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let errorMessage ="";

  //validating the name field
  if (name.length < 6) {
    errorMessage += "The name must be at least 6 characters long."
  }

  //validating the email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage += "The email adress must be valid, e.g. test1@email.com";
  }

  //validating the subject field
  if (subject.length < 16) {
    errorMessage += "The subject must be at least 16 characters long";
  }

  //validating the message field
  if (message.length < 26) {
    errorMessage += "The message must be at least 26 characters long";
  }

  //if there is an errormessage appearing, prevent the form from submitting and tisplay this error message to let the user kno
  if (errorMessage !== "") {
    event.preventDefault();
    alert(errorMessage);
  }
});


/* In this code, we first get the values of the input fields by their IDs and trim any leading or trailing whitespace from the input.

Then, we validate each input field using if statements and regular expressions. If an input field does not meet the requirements, we append an error message to a string variable called errorMessage.

Finally, we check if the errorMessage is not empty. If it is not, we prevent the form submission and display an alert with the error message.

You can add this JavaScript code to the bottom of your HTML file, just before the closing </body> tag. */
