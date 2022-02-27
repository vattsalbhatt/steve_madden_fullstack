function sign() {
  let number = document.getElementById("mobile");

  number.addEventListener("input", show);

  let but = document.getElementById("send");

  function show() {
    if (number.value.length > 9) {
      but.style.display = "block";
    }
  }

  let send1 = document.getElementById("send1");
  let mob1 = document.getElementById("mob1");
  let mobile1 = document.getElementById("mobile1");

  but.addEventListener("click", function () {
    alert(`Send OTP TO ${number.value}`);
    but.style.display = "none";
    send1.style.display = "block";
    mob1.style.display = "block";
    mobile1.style.display = "block";
    alert("Your OTP is 1234");
  });

  let h5 = document.getElementById("h5");

  send1.addEventListener("click", function () {
    if (mobile1.value == "1234") {
      alert("Customer Login Sucessfully");
      localStorage.setItem("number", number.value);
      window.location.href = "index.html";
    } else {
      h5.style.display = "block";
    }
  });
}

export default sign;
