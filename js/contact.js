const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(event){
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let errorMessage ="";

  //validating the name field
  if (name.length < 6) {
    errorMessage += "The name must be at least 6 characters long.\n";
  }

  //validating the email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage += "The email adress must be valid, e.g. test1@email.com\n";
  }

  //validating the subject field
  if (subject.length < 16) {
    errorMessage += "The subject must be at least 16 characters long.\n";
  }

  //validating the message field
  if (message.length < 26) {
    errorMessage += "The message must be at least 26 characters long\n";
  }

  //if there us an error message, prevent form submission and display the error message
  if (errorMessage !== "") {
    alert(errorMessage);
  } else {
    //simulate form submission by waiting for a few seconds (replace this with your actual form submission logic)
    await new Promise(resolve => setTimeout(resolve, 3000));

    //display the success message in the submitMessage div
    const submitMessage = document.getElementById('submitMessage');
    submitMessage.textContent = 'Form submitted successfully!';
    submitMessage.style.display = 'block';
    submitMessage.style.color = 'green';
    submitMessage.style.textTransform = 'uppercase';
    submitMessage.style.borderRadius = '10px';
  }
});