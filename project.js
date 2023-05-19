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

/************************************************** SHOW PASS ***************************************************/

function showPass() {
  let pass = document.getElementById("password1");
  if (pass.type == "text") {
    pass.type = "password";
  } else {
    pass.type = "text";
  }
}

/************************************************** USER / DATA***************************************************/

let users = [];

function add() {
  let userValue = document.getElementById("username").value;
  let emailValue = document.getElementById("email2").value;
  let passValue1 = document.getElementById("password2").value;
  let passValue2 = document.getElementById("ConfirmPassword").value;
  let agree = document.getElementById("check");

  if (passValue1.length < 8) {
    document.getElementById("s1").innerHTML =
      "Password must contain at least 8 characters";
    return false;
  } else {
    document.getElementById("s1").innerHTML = "";
  }

  if (passValue1 != passValue2) {
    document.getElementById("s2").innerHTML = "Passwords do not match!";
    return false;
  } else {
    document.getElementById("s2").innerHTML = "";
  }

  if (!agree.checked) {
    document.getElementById("s3").innerHTML =
      "Please agree to the terms and conditions";
    return false;
  } else {
    document.getElementById("s3").innerHTML = "";
  }

  let user = {
    email: emailValue,
    password: passValue1,
  };

  users.push(user);

  alert(
    `Welcome, ${userValue}! Thanks for registering with us. We will send a confirmation email to ${emailValue}.`
  );

  console.log(users);
  return false;
}

function login_() {
  let emailValue = document.getElementById("email1").value;
  let pass = document.getElementById("password1").value;

  for (let i = 0; i < users.length; i++) {
    if (emailValue == users[i].email && pass == users[i].password) {
      alert(`Welcome, ${emailValue}!`);
      return true;
    }
  }
  document.getElementById("s4").innerHTML = "email and password do not match";
  return false;
}

function forgot_pass() {
  let emailValue = document.getElementById("email1").value;
  let email = prompt("Enter your email address:");

  while (emailValue != email) {
    alert("Please enter a valid email address.");
    email = prompt("Enter your email address:");
  }

  if (email) {
    const message = `An email has been sent to ${email} with instructions on how to reset your password.`;
    alert(message);
  }

  return false;
}

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

/************************************************** HIDE NAVBAR /SCROLL***************************************************/

let navbar = document.getElementById("navbar");
let end = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > end) {
    navbar.style.top = "-85px";
  } else {
    navbar.style.top = "0";
  }
  end = scrollTop;
});
