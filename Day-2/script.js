let products = []
const cartArray = [];

const product_list = document.getElementById("product_list");
const cart_list = document.getElementById("cart_list");
const calculate = document.getElementById("calculate");
const calculatedResult = document.getElementById("calculatedResult");

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();

    products = data;

    products.forEach((product) => {
      product.quantity = 0
    })
    renderProducts();
  }
  catch (e) {
    console.log(e);
  }
}

const renderProducts = () => {
  for (let i = 0; i < products.length; i++) {
    const listElement = document.createElement("li");

    listElement.innerHTML = `<p>${products[i].title}</p>
        <p>${products[i].price}</p>
        <button>Add to cart</button>
        <img src=${products[i].image} width="50" height="50"/>`;

    const btn = listElement.querySelector("button");
    btn.addEventListener("click", () => {
      moveToCart(products[i].id);
    });
    btn.addEventListener("click", () => {
      let colors = ["#28a745", "#007bff", "#ffc107", "#17a2b8", "#6f42c1"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      btn.style.backgroundColor = randomColor;
    });

    product_list.appendChild(listElement);
  }
}

const moveToCart = (num) => {
  let currentProduct;

  for (let j = 0; j < products.length; j++) {
    if (products[j].id == num) {
      currentProduct = products[j];
      break;
    }
  }

  let flag = false;

  for (let i = 0; i < cartArray.length; i++) {
    if (currentProduct.id == cartArray[i].id) {
      cartArray[i].quantity++;
      flag = true;
      break;
    }
  }
  if (!flag) {
    currentProduct.quantity = 1;
    cartArray.push(currentProduct);
  }
  console.log(cartArray);
  renderCart();
};

const renderCart = () => {
  cart_list.innerHTML = "";

  for (let i = 0; i < cartArray.length; i++) {
    const cartElement = document.createElement("li");

    cartElement.innerHTML = `<p>${cartArray[i].title}</p>
        <p>${cartArray[i].price}</p>
        <p>${cartArray[i].quantity}</p>
        <img src=${cartArray[i].image} width="50" height="50"/>`;

    cart_list.appendChild(cartElement);
  }
};


calculate.addEventListener("click", () => {
  const result = calculateDiscount();
  printResult(result);
});

calculateDiscount = () => {
  let total = 0;
  let discount1 = 0;
  let discount2 = 0;
  let grandtotal = 0;
  let totalQuantity = 0;

  for (let i = 0; i < cartArray.length; i++) {
    totalQuantity = cartArray[i].quantity + totalQuantity;
    const sum = cartArray[i].quantity * cartArray[i].price;
    total = total + sum;
  }
  console.log(total);

  if (totalQuantity > 10) {
    discount1 = 0.1 * total;
  }
  console.log(discount1);

  let totalAfterDiscount1 = total - discount1;

  if (total > 500) {
    discount2 = 0.05 * totalAfterDiscount1;
  }
  console.log(discount2);

  grandtotal = total - discount1 - discount2;
  console.log(grandtotal);

  return { total, discount1, discount2, grandtotal };
};

const printResult = ({ total, discount1, discount2, grandtotal }) => {
  const resultElement = document.createElement("li");

  calculatedResult.innerHTML = "";

  resultElement.innerHTML = `<p><strong>Total Price: </strong>${total.toFixed(2)}</p>
    <p><strong>Quantity Discount: </strong>${discount1.toFixed(2)}</p>
    <p><strong>Bulk Discount: </strong>${discount2.toFixed(2)}</p>
    <p><strong>Final Price: </strong>${grandtotal.toFixed(2)}</p>`;

  calculatedResult.appendChild(resultElement);
};

fetchProducts();