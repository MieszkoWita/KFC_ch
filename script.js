function captchaPassed() {
  sessionStorage.setItem("captchaOk", "true");

  document.getElementById("captcha-container").style.display = "none";
  document.getElementById("content").style.display = "block";
}

window.onload = function() {
  if (sessionStorage.getItem("captchaOk") === "true") {
    document.getElementById("captcha-container").style.display = "none";
    document.getElementById("content").style.display = "block";
  }
};

async function loadPosts() {
  const container = document.getElementById("posts");

  const res = await fetch("posts.json");
  const files = await res.json();

  for (let file of files) {
    try {
      const response = await fetch(file);
      const text = await response.text();

      const lines = text.split("\n");
      const title = lines[0];
      const content = lines.slice(1).join("\n");

      const div = document.createElement("div");
      div.className = "message";
      div.innerHTML = `
        <h2 class="post-title">${title}</h2>
        <p>${content}</p>
      `;

      container.appendChild(div);
    } catch (e) {
      console.error("Błąd wczytywania posta:", file, e);
    }
  }
}

loadPosts();
