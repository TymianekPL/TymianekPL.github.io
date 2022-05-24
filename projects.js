const urls = document.querySelectorAll("[data-url]");
urls.forEach(url => {
     url.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = url.dataset.url;
     });
});