let drive = document.getElementById("prier");

let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];

let total = 0;
let subtotal = 0;

let Sprice = document.getElementById("Sprice");
let Tprice = document.getElementById("Tprice");

function append(arr) {
  arr.forEach(({ url, name, color, size, Mrp, price, p }) => {
    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("class", "pogo");
    image.src = url;

    div1.append(image);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "divsec");

    let nam = document.createElement("h4");
    nam.textContent = name;

    let colsi = document.createElement("h5");
    colsi.textContent = `${color} / ${size}`;
    colsi.setAttribute("class", "blocker");

    let upc = document.createElement("h5");
    upc.textContent = `U.P.C : N.A`;
    upc.setAttribute("class", "blocker");

    div2.append(nam, colsi, upc);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "divthird");

    let pri = document.createElement("h4");
    pri.textContent = "₹" + p;

    let mrp = document.createElement("h5");

    mrp.textContent = "₹" + p;
    mrp.setAttribute("class", "crosser");

    div3.append(pri, mrp);

    let maindiv = document.createElement("div");
    maindiv.append(div1, div2, div3);

    drive.append(maindiv);

    total += p;
  });

  Sprice.append(total);
  let tpirce = (total * 0.9).toFixed(0);
  Tprice.append(tpirce);

  let app = document.getElementById("app");
  app.value = "FLING15";
}

append(cartitems);

let userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

let firstName = document.getElementById("f");
firstName.value = userInfo.firstName;
let lastName = document.getElementById("l");
lastName.value = userInfo.lastName;
let address = document.getElementById("a");
address.value = userInfo.address;
let appartment = document.getElementById("appar");
appartment.value = userInfo.appartment;
let zip = document.getElementById("zipcode");
zip.value = userInfo.zip;
let Country = document.getElementById("country");
Country.value = userInfo.Country;
let state = document.getElementById("state");
state.value = userInfo.state;
let city = document.getElementById("city");
city.value = userInfo.city;
let num = localStorage.getItem("number") || null;

let phone = document.getElementById("phone");
phone.value = num;

let email = document.getElementById("mail");
email.value = userInfo.email;

function store() {
  //  userInfo ={
  //   firstName : document.getElementById('f').value,
  //   lastName : document.getElementById('l').value,
  //   address : document.getElementById('a').value,
  //   appartment : document.getElementById('appar').value,
  //   zip : document.getElementById('zipcode').value,
  //   Country : document.getElementById("country").value,
  //   state : document.getElementById('state').value,
  //   city : document.getElementById('city').value,
  //   phone : document.getElementById('phone').value,
  //   email : document.getElementById('mail').value,
  // }

  // localStorage.setItem('userInfo',JSON.stringify(userInfo));
  // console.log(userInfo)

  window.location.href = "./Payment.html";
}
