async function getAllPosts() {
  const response = await fetch('https://www.rebekkanordheim.no/wp-json/wp/v2/posts');
  return await response.json();
}

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

allPostsPage();
