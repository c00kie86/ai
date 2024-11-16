async function loadTemplate() {
  try {
    const res = await fetch("article.html");
    const article = await res.text();

    const template = document.getElementById("article");
    template.innerHTML = article;

    document.body.insertAdjacentHTML("afterbegin", template.innerHTML);
    template.remove();

  } catch (err) {
    console.error(err);
  }
}

window.addEventListener("load", loadTemplate);
