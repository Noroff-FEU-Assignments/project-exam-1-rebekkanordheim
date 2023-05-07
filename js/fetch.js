async function getPosts() {
    const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
    return await response.json();
  }
  
  async function myPosts() {
    const posts = await getPosts();
    console.log(posts);
  }
  
  myPosts();

  async function getPostById(id) {
    const response = await fetch(`https://www.rebekkanordheim.no/wp-json/wp/v2/posts/${id}`);
    return await response.json();
  }
  
  function createPostHTML(post) {
    const container = document.querySelector(".container2");
            
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
  
  async function onePostPage() {
    const postId = 50; // Replace with the ID of the post you want to fetch
    const post = await getPostById(postId);
    createPostHTML(post);
  }
  
  onePostPage();

  async function getPosts() {
    const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
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
    content.innerHTML = post.excerpt.rendered;
    postContainer.append(content);
    
    const thumbnail = document.createElement("img");
    thumbnail.src = post.jetpack_featured_media_url;
    thumbnail.alt = post.title.rendered;
    postContainer.append(thumbnail);
            
    container.append(postContainer);
  }
  
  async function postPage() {
    const posts = await getPosts();
    createPostsHTML(posts);
  }
  
  function createPostsHTML(posts) {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      createPostHTML(post);
    }
  }

  postPage();