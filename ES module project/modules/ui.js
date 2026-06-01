export function renderProducts(products, containerElement) {
  containerElement.innerHTML = products.map(product => `
    <div class="border p-4 rounded shadow">
      <img src="${product.image}" class="h-40 mx-auto">
      <h2 class="font-bold">${product.title}</h2>
      <button class="bg-blue-500 text-white p-2 mt-2 rounded add-btn" data-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `).join('');
}