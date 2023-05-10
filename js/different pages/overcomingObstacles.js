async function getPosts() {
    const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
    return await response.json();
  }
  
  async function myPosts() {
    const posts = await getPosts();
    console.log(posts);
  }
  
  myPosts();

  //Create JavaScript functionality to fetch a single product’s data from WordPress API
  async function getProductById(id) {
    const response = await fetch(`https://www.rebekkanordheim.no/wp-json/wp/v2/posts/${id}`);
    return await response.json();
  }
  
  function createPostHTML(post) {
    const container = document.querySelector(".container");
          
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.id = post.id;
  
    const title = document.createElement("h2");
    title.innerText = post.title.rendered;
    postContainer.append(title);
  
    const content = document.createElement("div");
  content.innerHTML = post.content.rendered;
  postContainer.append(content);

  container.append(postContainer);
}

async function OnePostPage() {
  const postId = 44;
  const post = await getProductById(postId);
  createPostHTML(post);
}

OnePostPage();