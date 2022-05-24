const typewritter = document.querySelector(".type-writter");
const lines = typewritter.querySelectorAll(".line");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
     let i = 0;
     for (let line of lines) {
          let text = line.innerHTML;
          line.classList.add("active");
          line.innerHTML = "";
          for (let letter of text) {
               line.innerHTML += letter != " " ? letter : "&CenterDot;";
               await sleep(50);
          }
          if (i++ < lines.length - 1) line.classList.remove("active");
          line.classList.add("actived");
     }
})();
