function footer() {
  return `
    <div id="footer">
      <hr class="h1foot" />
      <div id="opfoot">
        <div>
          <ul class= 'ulfoot' >
            <li class="fufoot">
              <div class="span1 fufoot">
                Customer Service<i id="arrow1" class="fas fa-chevron-right"></i>
              </div>
              <ul class="fi1foot">
                <li>FAQ</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Return Policy</li>
                <li>Shipping Policy</li>
                <li>Shoe Size Chart</li>
                <li>Cleaning & Care</li>
                <li>Contact Us</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul class='ulfoot'>
            <li class="fufoot">
              <div class="span1 fufoot">
                About The Company<i
                  id="arrow2"
                  class="fas fa-chevron-right"
                ></i>
              </div>
              <ul class="fi2foot">
                <li>About Steve Madden</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul class= 'ulfoot'>
            <li class="fufoot">
              <div class="span1 fufoot">
                SITE TERMS <i id="arrow3" class="fas fa-chevron-right"></i>
              </div>
              <ul class="fi3foot">
                <li>Site Map</li>
                <li>Privacy Policy</li>
                <li>Shoe Glossary</li>
                <li>Terms & Conditions</li>
                <li>Shoe Care</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <i id="loc" class="fas fa-map-marker-alt"></i>
          <div class="th">Store Locater</div>
        </div>
        <div>
          <input id="inputfoot" type="text" placeholder="Email Address" />
          <button id="go">GO</button>
          <hr class="hfoot" />
          <i id="fac" class="fab fa-facebook"></i>
          <i id="inst" class="fab fa-instagram-square"></i>
          <i id="you" class="fab fa-youtube-square"></i>
        </div>
        <div>
          <hr class="hfoot" />
          <div id="la">
            <div>
              022 48905183
              <span id="brac"
                >(MONDAY TO FRIDAY - 10:00 AM TO 5:00 PM IST)</span
              >
            </div>
            <div class="th1">support@stevemadden.in</div>
          </div>
        </div>
      </div>
    </div>`;
}

function tr() {
  let f1 = document.querySelector(".fi1foot");
  let a1 = document.getElementById("arrow1");
  let k1 = 0;

  a1.addEventListener("click", function () {
    if (k1 % 2 === 0) {
      f1.style.display = "block";
      k1++;
    } else {
      f1.style.display = "none";
      k1++;
    }
  });

  let a2 = document.getElementById("arrow2");
  let f2 = document.querySelector(".fi2foot");
  let k2 = 0;

  a2.addEventListener("click", function () {
    if (k2 % 2 === 0) {
      f2.style.display = "block";
      k2++;
    } else {
      f2.style.display = "none";
      k2++;
    }
  });

  let a3 = document.getElementById("arrow3");
  let f3 = document.querySelector(".fi3foot");
  let k3 = 0;

  a3.addEventListener("click", function () {
    if (k3 % 2 === 0) {
      f3.style.display = "block";
      k3++;
    } else {
      f3.style.display = "none";
      k3++;
    }
  });

  function myFunction(x) {
    if (x.matches) {
      f1.style.display = "block";
      f2.style.display = "block";
      f3.style.display = "block";
    } else {
      f1.style.display = "none";
      f2.style.display = "none";
      f3.style.display = "none";
    }
  }

  var x = window.matchMedia("(min-width:769px)");
  myFunction(x);
  x.addListener(myFunction);
}

export { footer, tr};
