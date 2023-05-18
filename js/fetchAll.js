//making a call to fetch the blog posts from the API
async function getPosts() {
    const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
    return await response.json();
  }
  
  //console logging the data to check if it calls right
  async function myPosts() {
    const posts = await getPosts();
    console.log(posts);
  }
  myPosts();

//creating the HTML for each post that gets called from the API
function createPostsHTML(posts) {
  const container = document.querySelector('.carousel-home');

  posts.forEach(post => {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.id = post.id;

    const title = document.createElement('h3');
    title.innerText = post.title.rendered;
    postContainer.append(title);

    const content = document.createElement('div');
    content.innerHTML = post.content.rendered;
    postContainer.append(content);

// hide all p tags in the content div on the homepage
const pTags = content.querySelectorAll('p');
pTags.forEach(p => {
    p.style.display = 'none';
});

//making a button which links to the different oages individual page
    const readMoreButton = document.createElement('a');
    readMoreButton.classList.add('read-more');
    readMoreButton.innerText = 'Read More';
    readMoreButton.href = `motivation.html?id=${post.id}`;
    postContainer.append(readMoreButton);

    container.append(postContainer);
  });
}

async function allPostsPage() {
  const posts = await getPosts();
  createPostsHTML(posts);
}
allPostsPage();

//Create JavaScript functionality to fetch a single product’s data from WordPress API
async function getProductById(id) {
  const response = await fetch(`https://www.rebekkanordheim.no/wp-json/wp/v2/posts/${id}`);
  return await response.json();
}

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

container.append(postContainer);
}

async function OnePostPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const post = await getProductById(postId);
  createPostHTML(post);
}  

OnePostPage();