window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader")
  preloader.style.opacity = "0"
  preloader.style.visibility = "hidden"
  setTimeout(() => {
    preloader.remove()
  }, 500)
  const header = document.querySelector(".header")
  setTimeout(() => {
    header.classList.add("visible")
  }, 200)
})
