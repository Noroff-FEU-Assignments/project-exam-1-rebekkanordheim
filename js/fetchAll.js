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
  
// fetching all the available posts
  async function getAllPosts() {
  const response = await fetch('https://www.rebekkanordheim.no/wp-json/wp/v2/posts');
  return await response.json();
}

//creating the HTML for each post that gets called from the API
function createPostsHTML(posts) {
  const container = document.querySelector('.container');

  posts.forEach(post => {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.id = post.id;

    const title = document.createElement('h2');
    title.innerText = post.title.rendered;
    postContainer.append(title);

    const content = document.createElement('div');
    content.innerHTML = post.content.rendered;
    postContainer.append(content);

    container.append(postContainer);
  });
}

async function allPostsPage() {
  const posts = await getAllPosts();
  createPostsHTML(posts);
}
//calling the function to run the function
allPostsPage();