/************************************************** SCROLL **************************************************/

const navMenu = document.querySelector("#nav-menu");

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
  }
});

const s = ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 400,
  reset: true,
});

s.reveal(".title", { delay: 200, origin: "top" });
s.reveal(".ferrari-img", { delay: 400, origin: "top" });
s.reveal(".heading", { delay: 400, origin: "top" });
s.reveal(".ride", { delay: 400, origin: "top" });
s.reveal(".services", { delay: 400, origin: "top" });
s.reveal(".about", { delay: 400, origin: "top" });
s.reveal(".reviews", { delay: 400, origin: "top" });
s.reveal(".newsletter", { delay: 400, origin: "bottom" });

/************************************************** DARK MODE **************************************************/
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox" ]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

/************************************************** LOGIN/REGISTER FORM **************************************************/

const box = document.querySelector(".box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const login = document.querySelector(".btn.sign-in");
const close = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  box.classList.add("active");
});

loginLink.addEventListener("click", () => {
  box.classList.remove("active");
});

login.addEventListener("click", () => {
  box.classList.add("active-btn");
  window.scrollTo(0, 0);
});

close.addEventListener("click", () => {
  box.classList.remove("active-btn");
});
/************************************************** NEWSLETTER **************************************************/

const form = document.getElementById("newsletter-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email1 = form.querySelector('input[type="email"]').value;
  // Send email to the user's email address
  // ...
  // Display a popup message
  alert(`An email has been sent to ${email1}`);
  form.reset(); // clear the form
});
/************************************************** REGISTER **************************************************/
const reg = document.getElementById("reg");
reg.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const email2 = document.querySelector("#email2").value;
  const password = document.querySelector("#password2").value;
  const confirmPassword = document.querySelector("#ConfirmPassword").value;
  const agreeCheckbox = document.querySelector("#forgot2");

  console.log("password: ", password);
  console.log("confirmPassword: ", confirmPassword);

  if (password.trim() !== confirmPassword.trim()) {
    alert("Password and confirm password do not match. Please try again.");
    return;
  }

  if (!agreeCheckbox.checked) {
    alert("Please agree to the terms & conditions before registering.");
    return;
  }

  alert(
    `Welcome, ${username}! Thanks for registering with us. We'll send a confirmation email to ${email2}.`
  );
  event.target.reset();
});

/************************************************** LOGIN**************************************************/

const log = document.getElementById("log");

log.addEventListener("submit", (event) => {
  event.preventDefault();

  const email3 = document.querySelector("#email1").value;
  const password3 = document.querySelector("#password1").value;

  const message = `Welcome, ${email3}!`;
  alert(message);
});

const forgotPasswordLink = document.querySelector('a[href="/password-reset"]');
const emailInput = document.getElementById("email1");

forgotPasswordLink.addEventListener("click", function (event) {
  event.preventDefault();

  let email = prompt("Enter your email address:");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  while (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    email = prompt("Enter your email address:");
  }

  if (email) {
    const message = `An email has been sent to ${email} with instructions on how to reset your password.`;
    alert(message);
  }
});

/************************************************** SCROLL PROGRESS ***************************************************/
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ff7f50 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
