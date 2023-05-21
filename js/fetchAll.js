// Making a call to fetch the blog posts from the API
async function getPosts() {
  const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
  return await response.json();
}
// Console logging the data to check if it calls right
async function myPosts() {
  const posts = await getPosts();
  console.log(posts);
}
myPosts();

// Creating the HTML for each post that gets called from the API
function createPostsHTML(posts) {
  const container = document.querySelector('.carousel');

  posts.forEach(post => {
    // Create the post container
    const postContainer = document.createElement('div');
    postContainer.classList.add('carousel-item');
    postContainer.id = post.id;
    
    // Create the post title
    const title = document.createElement('h3');
    title.innerText = post.title.rendered;
    postContainer.append(title);
    
    // Create the post content
    const content = document.createElement('div');
    content.innerHTML = post.content.rendered;
    postContainer.append(content);

    // Hide all p tags in the content div on the homepage
    const pTags = content.querySelectorAll('p');
    pTags.forEach(p => {
      p.style.display = 'none';
    });

    // Making a button which links to the different page's individual page
    const readMoreButton = document.createElement('a');
    readMoreButton.classList.add('read-more');
    readMoreButton.innerText = 'Read More';
    readMoreButton.href = `motivation.html?id=${post.id}`;
    postContainer.append(readMoreButton);

    container.append(postContainer);
  });
}

// Fetch the posts and create the carousel
async function setupCarousel() {
  const posts = await getPosts();
  createPostsHTML(posts);

  const carouselContainer = document.querySelector('.carousel');
  const carouselItems = carouselContainer.querySelectorAll('.carousel-item');

  // Set up the carousel state
  let currentSlide = 0;
  const maxSlides = carouselItems.length;

  function showSlide(slideIndex) {
    carouselItems.forEach((item, index) => {
      if (index >= slideIndex && index < slideIndex + 4) {
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
  const prevButton = carouselContainer.querySelector('.buttonLeft');
  const nextButton = carouselContainer.querySelector('.buttonRight');

  prevButton.addEventListener('click', previousSlide);
  nextButton.addEventListener('click', nextSlide);

  // Show the initial slide
  showSlide(currentSlide);
}

setupCarousel();

// Fetch a single post's data from WordPress API
async function getProductById(id) {
  const response = await fetch(`https://www.rebekkanordheim.no/wp-json/wp/v2/posts/${id}`);
  return await response.json();
}

// Create HTML for a single post
function createPostHTML(post) {
  const container = document.getElementById("motivation");

  const postContainer = document.createElement("div");
  postContainer.classList.add("post");
  postContainer.id = post.id;

  const title = document.createElement("h3");
  title.innerText = post.title.rendered;
  postContainer.append(title);

  const content = document.createElement("div");
  content.innerHTML = post.content.rendered;
  postContainer.append(content);

  container.appendChild(postContainer);
}

// Fetch the single post by ID and create its HTML
async function OnePostPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const post = await getProductById(postId);
  createPostHTML(post);
}

OnePostPage();