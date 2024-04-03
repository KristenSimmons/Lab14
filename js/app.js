'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'jpg'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  let productJSON = JSON.stringify(this.allProducts);
  localStorage.setItem('products', productJSON);
}

AppState.prototype.loadItems = function () {
  let productJSON = localStorage.getItem('products');
  if (productJSON) {
    this.allProducts = JSON.parse(productJSON);
  } else {
    this.instantiateProducts();
  }
}

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `img/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}