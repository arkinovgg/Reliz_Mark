// const cartBtn = document.getElementById('cartBtn')

// cartBtn.addEventListener('click', function () {
//     window.location.assign('cart.html')
// })

// const mainSite = document.getElementById('mainSite')

// mainSite.addEventListener('click', function () {
//     window.location.assign('index.html')
// })


// Функція пошуку товарів
function searchProducts1(event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки при відправці форми
  
    let query = document.querySelector('#searchForm input').value.toLowerCase();

    let productsList5 = document.querySelector('.products-list-5');
    
    // Очищуємо списки товарів

    productsList5.innerHTML = '';
  
    // Функція для відображення товарів
    function displayProducts(products, productsList) {
        products.forEach(function (product) {
            if (product.title.toLowerCase().includes(query)) {
                productsList.innerHTML += getCardHTML(product);
            }
        });
    }
  
   
  getProducts5().then(function (products) {
    displayProducts(products, productsList5);
  
    let buyButtons = productsList5.querySelectorAll('.cart-btn');
    buyButtons.forEach(function (button) {
        button.addEventListener('click', addToCart);
    });
  });
  }
  
  let searchForm1 = document.querySelector('#searchForm');
  searchForm1.addEventListener('submit', searchProducts1);
  