// let user;

// user=JSON.parse(localStorage.getItem("user"));
//   console.log(user);
//   if(user==undefined){
//     alert("Please Login First");
//     window.location.href="login.html";
// }

document.querySelector("#check_delivery").addEventListener("click", info);
function info(event) {
  document.querySelector("#days").textContent =
    "Expected delivery on Sun, 6 Mar - Tue, 8 Mar";
}
var size = [5, 6, 7, 8, 9];
var x = 0;
var arr = [];

document.querySelector(".pro_size").addEventListener("click", size_info);
function size_info(event) {
  var a = (document.querySelector("#size_show").textContent = size[0]);
  // console.log(a);
  arr.push(a);
}

document.querySelector(".pro_size1").addEventListener("click", size_info1);
function size_info1(event) {
  var b = (document.querySelector("#size_show").textContent = size[1]);

  // console.log(b);
}
document.querySelector(".pro_size2").addEventListener("click", size_info2);
function size_info2(event) {
  document.querySelector("#size_show").textContent = size[2];
}
document.querySelector(".pro_size3").addEventListener("click", size_info3);
function size_info3(event) {
  document.querySelector("#size_show").textContent = size[3];
}
document.querySelector(".pro_size4").addEventListener("click", size_info4);
function size_info4(event) {
  document.querySelector("#size_show").textContent = size[4];
  console.log(size_show);
}
// console.log(x);
document.querySelector("#cart").addEventListener("click", addItem);
var ProductList = JSON.parse(localStorage.getItem("ProductList")) || [];
function addItem(event) {
  // var name = document.getElementById("product_name").value;
}
// console.log(arr[arr.length-1]);

// function show(demo){
//   var name=document.createElement("p")
//   name.innerHTML=demo.name
// }

var cartlist = JSON.parse(localStorage.getItem("cartitems")) || [];
// console.log(cartlist);

var lastindex = cartlist.length - 1;
console.log(cartlist[lastindex]);
// console.log(lastindex);

var id = (document.querySelector("#pro_id").textContent =
  cartlist[lastindex]._id);
// console.log(id);

var name = (document.querySelector("#product_name").textContent =
  cartlist[lastindex].name);
// console.log(name);

var mrp = (document.querySelector(".mrp").textContent =
  cartlist[lastindex].Mrp);
// // console.log(mrp);

var price = (document.querySelector(".price").textContent =
  cartlist[lastindex].price);
// // console.log(price);
var color = (document.querySelector("#product_color").textContent =
  cartlist[lastindex].color);
// // console.log(color);

var image = (document.getElementById("middel_img").src =
  cartlist[lastindex].url);
var image1 = (document.getElementById("middel_img1").src =
  cartlist[lastindex].url_2);
var image2 = (document.getElementById("middel_img2").src =
  cartlist[lastindex].url_3);
var image3 = (document.getElementById("middel_img3").src =
  cartlist[lastindex].url_4);

var side_image = (document.getElementById("side_img").src =
  cartlist[lastindex].url);
var side_image1 = (document.getElementById("side_img1").src =
  cartlist[lastindex].url_2);
var side_image2 = (document.getElementById("side_img2").src =
  cartlist[lastindex].url_3);
var side_image3 = (document.getElementById("side_img3").src =
  cartlist[lastindex].url_4);

async function prodetails() {
  try {
    let res = await fetch(`https://steve-madden.herokuapp.com/products/${id}`);

    data = await res.json();
    // getAll(data);

    console.log(data);

    showdata(data);
    // console.log(data);
  } catch (e) {
    console.log("e: " + e);
  }
}
prodetails();

function showdata(product) {
  let div = document.createElement("div");
  let price_div = document.createElement("div");
  price_div.setAttribute("class", "price");
  // price_div.textContent=product.
  console.log(product.price);

  let mrp = document.createElement("p");
  mrp.textContent = product.Mrp;
  console.log(product.Mrp);
  // mrp.setAttribute("id", "mrp")

  let name = document.createElement("p");
  name.innerHTML = product.name;

  // name.setAttribute("id", "name");
  pricediv.append(mrp, price);
  div.append(name, price_div);

  document.getElementById("cont1").append(div);
}
//product Quantity local storage
var count = localStorage.getItem("counter") || 1; // initially when page refreshes
if (count < 1) {
  count = 1;
}
document.querySelector("#disable").innerHTML = count;
document.getElementById("inc").addEventListener("click", incFun);

function incFun() {
  // console.log("inside inc");
  count++;
  localStorage.setItem("counter", count);
  document.querySelector("#disable").innerHTML = count;
}

document.getElementById("dec").addEventListener("click", decFun);

function decFun(event) {
  // console.log("inside dec");
  count--;
  localStorage.setItem("counter", count);
  document.querySelector("#disable").textContent = count;
}

// console.log(1 || 0);

// or is nothing but addition

// console.log(false || true);

// console.log(localStorage.getItem("counter") || 0);

//local Storage

var cartItems = {};
var items = [];
cartItems.items = items;
var item = {
  name: name,
  price: price,
  size: arr.length,
};

cartItems.items.push(item);

document.querySelector("#product_details").addEventListener("click", infom);
function infom(event) {
  // document.querySelector("#details").textContent="Groove in style in these black color denim material casual shoes. Perfect for everyday occasions, this pair of black casual shoes will enhance your style and take it to a new level. It features a slip-on fastening and a high-quality denim canvas material which makes it durable and easy to maintain, and the sole is of PVC. It can be worn with a wide variety of clothes; thus, making it all the more desirable."
  var x = document.getElementById("details");
  if (x.innerHTML === "") {
    x.innerHTML =
      "Groove in style in these black color denim material casual shoes. Perfect for everyday occasions, this pair of black casual shoes will enhance your style and take it to a new level. It features a slip-on fastening and a high-quality denim canvas material which makes it durable and easy to maintain, and the sole is of PVC. It can be worn with a wide variety of clothes; thus, making it all the more desirable.";
  } else {
    x.innerHTML = "";
  }
}

document.querySelector("#shipping_return").addEventListener("click", infom1);
function infom1(event) {
  // document.querySelector("#return").textContent="RETURNS : Steve Madden follows a '30 day no questions' asked return policy Every return should contain the original packaging. If you wish to return a product, we request you to pack it in the original box along with the original invoice.FREE SHIPPING : Most items are available to ship in 1 - 2 business days unless otherwise noted For further details Click here to view our full Shipping Policy .."
  var x = document.getElementById("return");
  if (x.innerHTML === "") {
    x.innerHTML =
      "RETURNS : Steve Madden follows a '30 day no questions' asked return policy Every return should contain the original packaging. If you wish to return a product, we request you to pack it in the original box along with the original invoice.FREE SHIPPING : Most items are available to ship in 1 - 2 business days unless otherwise noted For further details Click here to view our full Shipping Policy ..";
  } else {
    x.innerHTML = "";
  }
}

// document.querySelector("#cart").addEventListener("click",function(){

//   async function prodetails() {
//     try {
//       let res = await fetch(`https://steve-madden.herokuapp.com/products/${id}`);

//       data = await res.json();
//       // getAll(data);

//       console.log(data);

//       showdata(data);
//       // console.log(data);
//     } catch (e) {
//       console.log("e: " + e);
//     }
//   }
//   prodetails();
//   localStorage.setItem('productsInCart', JSON.stringify(data));
//   window.location.href="CartIn.html"
// })

document.querySelector("#cart").addEventListener("click", function () {
  // user=(localStorage.getItem("user")) || 1;
  // console.log(user);
  // if(!JSON.parse(localStorage.getItem("user"))){

  //   alert("Please Login First");
  //   window.location.href="login.html";
  // }
  //  console.log("sahi hai");
  //  if((localStorage.getItem("user"))==undefined){
  //    alert("Please Log In");
  //    window.location.href="login.html";
  //  }

  async function prodetails() {
    try {
      let res = await fetch(
        `https://steve-madden.herokuapp.com/products/${id}`
      );

      data = await res.json();
      // getAll(data);
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      console.log(data);
      let cartdata = {
        color: data.color,
        p: data.p,
        url: data.url,
        size: data.size,
        name: data.name,
        quantity: 1,
        user_id: user._id,
      };
      cartdata = JSON.stringify(cartdata);
      console.log("cartdata", cartdata);

      let collect = await fetch(
        "https://steve-madden.herokuapp.com/cartsdata",
        {
          method: "POST",
          body: cartdata,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Product Added Suceesfuly");
      showdata(data);
      // console.log(data);
    } catch (e) {
      console.log("e: " + e.message);
    }
  }
  prodetails();
  localStorage.setItem("productsInCart", JSON.stringify(data));
});
