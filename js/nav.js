// JavaScript code to close the navigation menu when clicked outside

  // Get the navigation menu and the hamburger menu checkbox element
  const nav = document.querySelector('nav');
  const hamburgerMenu = document.getElementById('hamburger-menu');

  // Add a click event listener to the document
  document.addEventListener('click', function(event) {
    const target = event.target;

    // Check if the clicked target is outside the navigation menu and hamburger menu checkbox
    if (!nav.contains(target) && target !== hamburgerMenu && hamburgerMenu.checked) {
      // Uncheck the hamburger menu checkbox to hide the navigation menu
      hamburgerMenu.checked = false;
    }
  });