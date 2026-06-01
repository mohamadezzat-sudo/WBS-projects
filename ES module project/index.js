import { fetchProducts } from './modules/network.js';
import { renderProducts } from './modules/ui.js';
import { addToCart } from './modules/storage.js';

const container = document.getElementById('product-container');

async function init() {
  const products = await fetchProducts();
  renderProducts(products, container);

  // Event delegation for Add buttons
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn')) {
      const id = e.target.dataset.id;
      const product = products.find(p => p.id == id);
      addToCart(product);
    }
  });
}

init();