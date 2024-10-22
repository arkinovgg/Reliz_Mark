
// Функція пошуку товарів
function searchProducts2(event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки при відправці форми
  
    let query = document.querySelector('#searchForm input').value.toLowerCase();

    let productsList4 = document.querySelector('.products-list-4');
    
    // Очищуємо списки товарів

    productsList4.innerHTML = '';
  
    // Функція для відображення товарів
    function displayProducts(products, productsList) {
        products.forEach(function (product) {
            if (product.title.toLowerCase().includes(query)) {
                productsList.innerHTML += getCardHTML(product);
            }
        });
    }
  
   
  getProducts4().then(function (products) {
    displayProducts(products, productsList4);
  
    let buyButtons = productsList4.querySelectorAll('.cart-btn');
    buyButtons.forEach(function (button) {
        button.addEventListener('click', addToCart);
    });
  });
  }
  
  let searchForm2 = document.querySelector('#searchForm');
  searchForm2.addEventListener('submit', searchProducts2);
  