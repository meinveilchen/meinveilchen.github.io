async function loadPosts() {
  try {
    const res = await fetch("./posts/posts.json");
    const posts = await res.json();

    const container = document.querySelector(".posts");

    posts.forEach(post => {
      const article = document.createElement("div");
      article.classList.add("post");

      article.innerHTML = `
        <h2 class="post-title"><a href="${post.url}">${post.title}</a></h2>
        <p class="post-info"><strong>${post.date}</strong> – ${post.byline} – ${post.source}</p>
        <p class="post-desc">${post.description}</p>
      `;

      container.appendChild(article);
    });
  } catch (err) {
    console.error("Failed to load posts:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadPosts);


const audio = document.getElementById('bg-music');

// MUSIC
function startAudio() {
    if (audio && audio.paused) {
        audio.volume = 0.3; 
        
        audio.play().then(() => {
            events.forEach(event => window.removeEventListener(event, startAudio));
        }).catch(error => {
            console.log("Autoplay waiting for user interaction:", error);
        });
    }
}

const events = ['click', 'scroll', 'keydown', 'touchstart', 'mousemove'];

events.forEach(event => {
    window.addEventListener(event, startAudio, { once: true });
});
