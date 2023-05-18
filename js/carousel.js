// Fetch the posts and create the carousel
async function setupCarousel() {
    const posts = await getPosts();
    createPostHTML(posts);
  
    const carouselContainer = document.querySelector('.carousel');
    const carouselItems = carouselContainer.querySelectorAll('.post');
  
    // Set up the carousel state
    let currentSlide = 0;
    const maxSlides = carouselItems.length;
  
    function showSlide(slideIndex) {
      carouselItems.forEach((item, index) => {
        if (index === slideIndex) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % maxSlides;
      showSlide(currentSlide);
    }
    function previousSlide() {
      currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
      showSlide(currentSlide);
    }
    // Handle button click events
    const prevButton = carouselContainer.querySelector('.buttonRight');
  }
  setupCarousel();
