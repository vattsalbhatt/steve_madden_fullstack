

let cartitems = JSON.parse(localStorage.getItem("cartitems")) || [];
document.querySelector(".pay").addEventListener("click", () => {
  let pay = document.querySelector("#paybtn");
  pay.style.display = "block";
  document.querySelector(".pay").style.border = "1px solid black";
});

document.querySelector("#pay1").addEventListener("click", () => {
  let cash = document.querySelector("#cashbtn");
  cash.style.display = "block";
  document.querySelector("#pay1").style.border = "1px solid black";
});

document.querySelector("#cashbtn").addEventListener("click", () => {
  window.location.href = "success.html";
});
document.querySelector("#paybtn").addEventListener("click", () => {
  // window.location.href = "card.html";
  //Calcuting the total
  let cartTotal = 0;
  for (let i = 0; i < cartitems.length; i++) {
    // console.log(cartitems[i].p);
    cartTotal = cartitems[i].p + cartTotal;
  }

  cartTotal = cartTotal * 100;

  if (cartTotal == 0) {
    alert("CheckOut total must be more than 0");
  }
  console.log(cartTotal);

  var orderId;

  async function generateOrderId() {
    try {
      const res = await fetch(
        "https://steve-madden.herokuapp.com/create/orderId",
        {
          method: "POST",
          body: JSON.stringify({ amount: cartTotal }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let response = await res.json();
      // console.log(response);
      orderId = response.orderId;
      console.log(orderId);
      // document.getElementById("button").style.display = "block";
      $("button").show();
    } catch (e) {
      console.log("generateOrderId" + e);
    }
  }

  generateOrderId();
  // $(document).ready(function () {
  //   var settings = {
  //     url: "http://localhost:7896/create/orderId",
  //     method: "POST",
  //     timeout: 0,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify({
  //       amount: cartTotal,
  //     }),
  //   };

  //   //creates new orderId everytime
  //   $.ajax(settings).done(function (response) {
  //     orderId = response.orderId;
  //     console.log(orderId);
  //     $("button").show();
  //   });
  // });
  // document.getElementById("paybtn").onclick =
  const saveFn = function (e) {
    var options = {
      key: "rzp_test_VsoO9BEK2erzgZ", // Enter the Key ID generated from the Dashboard
      amount: cartTotal, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Steve Madden Masai Project",
      description: "Test Transaction",
      image: "https://logowik.com/content/uploads/images/steve-madden4870.jpg",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the previous step
      handler: function (response) {
        // response = JSON.stringify(response);
        console.log("hello response" + response);
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        async function saveOrder(response) {
          try {
            const res = await fetch(
              "https://steve-madden.herokuapp.com/saveOrderDetails",
              {
                method: "POST",
                body: JSON.stringify(response),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            let saveDetail = await res.json();
            console.log(saveDetail);
            window.location.href = "success.html";
          } catch (e) {
            console.log("saveOrderErr" + e);
          }
        }
        saveOrder();

        // var settings = {
        //   url: "http://localhost:7896/api/payment/verify",
        //   method: "POST",
        //   timeout: 0,
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: JSON.stringify({ response }),
        // };

        // $.ajax(settings).done(function (response) {
        //   console.log(JSON.stringify(response));
        // });
        const settings = async (response) => {
          try {
            const res = await fetch(
              "https://steve-madden.herokuapp.com/api/payment/verify",
              {
                method: "POST",
                body: JSON.stringify(response),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            let verifyDetail = await res.json();
            console.log(verifyDetail);
            // $.ajax(settings).done(function (response) {
            //     console.log(JSON.stringify(response));
            //   });
          } catch (e) {
            console.log("saveOrderErr" + e);
          }
        };
        settings();
      },

      theme: {
        color: "#343434",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    // e.preventDefault();
  };

  saveFn();
});

let drive = document.getElementById("prier");

let mat = document.getElementById("detail");

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
    pri.textContent = "₹"+p;

    let mrp = document.createElement("h5");

    mrp.textContent = "₹"+p;
    mrp.setAttribute("class", "crosser");

    div3.append(pri, mrp);

    let maindiv = document.createElement("div");
    maindiv.append(div1, div2, div3);

    drive.append(maindiv);
  });
}

console.log(cartitems);

append(cartitems);