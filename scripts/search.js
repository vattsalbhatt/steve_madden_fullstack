function seachTerm(query) {
  if (query == "handbags") {
    window.location.href = "handbags.html";
  } else if (query == "clothing") {
    window.location.href = "clothing.html";
  } else if (query == "mens") {
    window.location.href = "mens.html";
  } else if (query == "women") {
    window.location.href = "women.html";
  } else if (query == "footwear") {
    window.location.href = "men.html";
  } else {
    window.location.href = "products.html";
  }
}

export default seachTerm;
