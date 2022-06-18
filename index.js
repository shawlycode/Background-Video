const btn = document.querySelector(".btn");
const video = document.querySelector(".bg-video");
const bi = document.querySelector(".bi");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    bi.classList.add("bi-pause");
    bi.classList.remove("bi-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    bi.classList.add("bi-play");
    bi.classList.remove("bi-pause");
  }
});
