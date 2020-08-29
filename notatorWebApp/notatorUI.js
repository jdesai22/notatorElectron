let url = document.getElementById("idUrl");
let article = document.getElementById("idArticle");

document.getElementById("url").addEventListener("click", function () {
    url.style.backgroundColor = "#40404e";
    article.style.backgroundColor = "#2e2e3a";
})

document.getElementById("article").addEventListener("click", function () {
    article.style.backgroundColor = "#40404e";
    url.style.backgroundColor = "#2e2e3a";
})