let pop = document.getElementById("popup");
function openPop() {
  pop.classList.add("open-pop");
}

function closePop() {
  pop.classList.remove("open-pop");
}

function form_() {
  let phone_num = document.getElementById("phone").value;
  let numb_days = document.getElementById("days").value;
  let pay_met = document.getElementById("payment").value;

  let phonePattern = /^\+212\d{8}$/;
  let phoneTest = phonePattern.test(phone_num);
  let daysTest = numb_days > 0;
  let payTest = pay_met !== "";

  if (phoneTest && daysTest && payTest) {
    openPop();
    return false;
  } else {
    if (!phoneTest) {
      document.getElementById("s1").innerHTML = "Phone number not valid!";
    } else {
      document.getElementById("s1").innerHTML = "";
    }

    if (!daysTest) {
      document.getElementById("s2").innerHTML = "Number of days not valid!";
    } else {
      document.getElementById("s2").innerHTML = "";
    }

    if (!payTest) {
      document.getElementById("s3").innerHTML =
        "Please choose a payment method.";
    } else {
      document.getElementById("s3").innerHTML = "";
    }
    return false;
  }
}

const s = ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 400,
  reset: true,
});

s.reveal(".form", { delay: 400, origin: "top" });
