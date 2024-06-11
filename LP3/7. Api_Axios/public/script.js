document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        const feed = document.getElementById('postsFeed');
        data.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          
          const postContent = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
          
          postElement.innerHTML = postContent;
          feed.appendChild(postElement);
        });
      })
      .catch(error => console.error('Erro ao obter os posts do JSONPlaceholder:', error));
  });
  