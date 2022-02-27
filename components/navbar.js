function navbar2() {
  return `  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="./index.html">
      <span id="navbarName">STEVE MADDEN</span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="./index.html"
            >Home<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cartIN.html">My Cart</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="women.html">WOMEN</a>
            <a class="dropdown-item" href="mens.html">MEN</a>
            <a class="dropdown-item" href="clothing.html">CLOTHING</a>
            <a class="dropdown-item" href="mens.html">SHOES</a>
            <a class="dropdown-item" href="handbags.html">HANDBAGS</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="products.html">WHAT'S NEW</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
            >Login</a
          >
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          id = "searchQuery2"
          type="text"
          placeholder="handbags..."
          aria-label="Search"
        />
       
      </div>
    </div>
  </nav>
`;
}

function navbar1() {
  return ` <div id="Steve-Navbar">
  <div id="steve-signin">
    <p><a href="./login.html">Sign In</a></p>
    <p>or</p>
    <p><a href="./registration.html">Join Now</a></p>
  </div>
  <div id="steven-name">
      <h1><a href="./index.html">STEVE MADDEN</a></h1>
  </div>
  <div id="steven-search">
      <p ><i class="fas fa-search fa-2x" style="color: #6c6c6c;"></i></p>
     <input type="text" id="steven-search-box" placeholder="handbags">
     <p > <i onclick="window.location.href='cartIN.html'" class="fas fa-shopping-bag fa-2x"> </i></p>
  </div>
</div>
<div id="steve-menu-parent">

<div id="steve-navbar-menu">
    <ul>
        <li>What's New
        <div id="steve-navbar-menu-whats">
            <ul>
                <li style="color: black">Dummy</li>
                <li ><a style="color:white" href="./women.html">Women</a></li>
                <li><a style="color:white" id="check1" href="./mens.html">Mens</a></li>
                <li><a style="color:white" href="./handbags.html">HandBags</a></li>
                <li><a style="color:white" href="./products.html">ShowAll</a></li>
            </ul>
            <img id="steve-navbar-menu-whats-img" src="https://stevemadden.gumlet.io/category/1623215523whats-New.jpg?dpr=1.0&q=70&w=240">
        </div></li>
        <li>Men
            <div id="steve-navbar-menu-whats">
                <ul>
                    <li style="color: black">Dummy</li>
                    <li><a style="color:white" href="./products.html">What's New</a></li>
                    <li><a style="color:white" href="./mens.html">Shirts</a></li>
                    <li><a style="color:white" href="./mens.html">Sneakes</a></li>
                    <li><a style="color:white" href="#./mens.html">Boots</a></li>
                    <li><a style="color:white" href="./mens.html">Sandals</a></li>
                </ul>
                <img id="steve-navbar-menu-men-img" src="https://stevemadden.gumlet.io/category/1623215616men.jpg?dpr=1.0&q=70&w=240">
            </div></li>
        <li><a href="#">Women</a>
            <div id="steve-navbar-menu-whats">
                <ul>
                   <li style="color: black">Dummy</li>
                    <li><a style="color:white"  href="./products.html">What's New</a></li>
                    <li><a style="color:white" href="./women.html">Heels</a></li>
                    <li><a style="color:white" href="./women.html">Sandels</a></li>
                    <li><a style="color:white" href="./women.html">Heels</a></li>
                    <li><a style="color:white" href="./women.html">Loafers</a></li>
                </ul>
                <img id="steve-navbar-menu-women-img" src=" https://stevemadden.gumlet.io/category/1623215559women.jpg?dpr=1.0&q=70&w=240">

            </div></li>
        <li><a href="#">HandBags</a>
            <div id="steve-navbar-menu-whats">
                <ul>
                    <li style="color: black">Dummy</li>
                    <li><a style="color:white" href="./products.html">What's New</a></li>
                    <li><a style="color:white" href="./handbags.html">Handbags</a></li>
                    <li><a style="color:white" href="./handbags.html">CrossBody</a></li>
                </ul>
                <img id="steve-navbar-menu-handbags-img" src=" https://stevemadden.gumlet.io/category/1623215660handbag.jpg?w=240&dpr=1.0">
            </div></li>
        <li><a href="#">Clothing</a>
            <div id="steve-navbar-menu-whats">
                <ul>
                    <li style="color: black">Dummy</li>
                    <li><a style="color:white" href="./clothing.html">TopWear</a></li>
                    <li><a style="color:white" href="./clothing.html">Bottom</a></li>
                    <li><a style="color:white" href="./clothing.html">All Clothing</a></li>
                </ul>
                <img id="steve-navbar-menu-clothing-img" src="https://stevemadden.gumlet.io/category/1623215687sale-banner.jpg?dpr=1.0&q=70&w=240">
            </div></li>
    </ul>
</div> 
</div>`;
}
export { navbar2, navbar1 };
