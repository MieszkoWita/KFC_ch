const posts = [
  "posts/2025-09-02-pierwszy-post.txt",
  "posts/2025-09-05-drugi-post.txt"
];

async function loadPosts() {
  const container = document.getElementById("posts");

  for (let file of posts) {
    try {
      const response = await fetch(file);
      const text = await response.text();

      const div = document.createElement("div");
      div.className = "message";
      div.textContent = text;

      container.appendChild(div);
    } catch (e) {
      console.error("Błąd wczytywania posta:", file, e);
    }
  }
}

loadPosts();
