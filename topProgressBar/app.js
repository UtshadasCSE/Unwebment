const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  // Total scrollable height
  const scrollTop = window.scrollY;
  const docmentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Scroll percentage
  const scrollPercentage = (scrollTop / docmentHeight) * 100;

  //   update width
  progressBar.style.width = scrollPercentage + "%";
});
