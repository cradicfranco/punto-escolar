(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const heroImage = document.querySelector('[data-hero-image]');
  if (heroImage) {
    const useLocalFallback = () => {
      if (heroImage.dataset.localFallback === 'true') return;
      heroImage.dataset.localFallback = 'true';
      heroImage.src = 'assets/capa-pexels.jpg';
    };
    heroImage.addEventListener('error', useLocalFallback, { once: true });
    if (heroImage.complete && heroImage.naturalWidth === 0) useLocalFallback();
  }

  const grid = document.querySelector('[data-product-grid]');
  const products = Array.isArray(window.catalogoEscolar) ? window.catalogoEscolar : [];
  if (!grid || products.length === 0) return;

  const buttons = [...document.querySelectorAll('[data-category]')];
  const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', minimumFractionDigits: 2
  }).format(price);

  function showProducts(category = 'Todas') {
    grid.replaceChildren();
    const filtered = category === 'Todas'
      ? products
      : products.filter((product) => product.categoria === category);

    filtered.forEach((product, index) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.dataset.category = product.categoria;

      const visual = document.createElement('div');
      visual.className = 'product-visual';
      visual.style.setProperty('--product-bg', product.fondo);
      visual.setAttribute('aria-label', `Ilustración de ${product.nombre}`);

      const number = document.createElement('span');
      number.className = 'product-number';
      number.textContent = `PE / ${String(index + 1).padStart(2, '0')}`;
      const emoji = document.createElement('span');
      emoji.className = 'product-emoji';
      emoji.setAttribute('aria-hidden', 'true');
      emoji.textContent = product.icono;
      const categoryTag = document.createElement('span');
      categoryTag.className = 'product-category-tag';
      categoryTag.textContent = product.categoria;
      visual.append(number, emoji, categoryTag);

      const info = document.createElement('div');
      info.className = 'product-info';
      const brand = document.createElement('span');
      brand.className = 'product-brand';
      brand.textContent = product.marca;
      const title = document.createElement('h3');
      title.textContent = product.nombre;
      const description = document.createElement('p');
      description.className = 'product-description';
      description.textContent = product.detalle;
      const priceRow = document.createElement('div');
      priceRow.className = 'product-price-row';
      const price = document.createElement('strong');
      price.className = 'product-price';
      price.textContent = formatPrice(product.precio);
      const currency = document.createElement('span');
      currency.className = 'product-currency';
      currency.textContent = 'USD';
      priceRow.append(price, currency);
      info.append(brand, title, description, priceRow);
      card.append(visual, info);
      grid.append(card);
    });

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'catalog-note';
      empty.textContent = 'No hay artículos de esta categoría por ahora.';
      grid.append(empty);
    }
  }

  function activateCategory(category) {
    buttons.forEach((button) => {
      const selected = button.dataset.category === category;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    showProducts(category);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => activateCategory(button.dataset.category));
  });

  const categoryFromHash = {
    cuadernos: 'Cuadernos',
    escritura: 'Escritura',
    arte: 'Arte',
    accesorios: 'Accesorios'
  }[window.location.hash.slice(1).toLowerCase()];
  activateCategory(categoryFromHash || 'Todas');
  if (categoryFromHash) {
    requestAnimationFrame(() => grid.scrollIntoView({ block: 'start' }));
  }
})();
