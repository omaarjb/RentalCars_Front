let pop = document.getElementById("popup");

function openPop() {
  pop.classList.add("open-pop");
  return false;
}

function closePop() {
  pop.classList.remove("open-pop");
}

const s = ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 400,
  reset: true,
});

s.reveal(".form", { delay: 400, origin: "top" });
