const s = ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 400,
  reset: true,
});

s.reveal(".title", { delay: 200, origin: "left" });
s.reveal(".payment-img", { delay: 400, origin: "bottom" });
s.reveal(".texte", { delay: 400, origin: "top" });
