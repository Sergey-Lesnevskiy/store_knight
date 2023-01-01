import { Component } from '../../../core/templates/components';
import { products } from '../../../json';

export class ProductCard extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderProductCard() {
    // const currentPageHTML = document.querySelector(`.product`);

    //     if (currentPageHTML) {
    //       currentPageHTML.innerHTML = '';
    //     }

    const items: number = Number(localStorage.getItem('cardProduct'));
    this.container.innerHTML = `
    <div class="product">
        <div class="product__image">
          <div class="product__image-big">
          <img src=${products[items - 1].thumbnail} alt="">
          </div>
          <div class="product__image-thumbnails">
            <div class="product__image-small">
            <img src=${products[items - 1].images[0]} alt=""></div>
            <div class="product__image-small">
            <img src=${products[items - 1].images[1]} alt=""></div>
            <div class="product__image-small">
            <img src=${products[items - 1].images[0]} alt=""></div>
          </div>
        </div>

        <div class="product__info">
          <h2 class="product__title">${products[items - 1].title} (ЛАП)</h2>
          <p class="product__id">Артикул: ${products[items - 1].id}</p>
          <p class="product__stock">В наличии: <span>${products[items - 1].stock}</span></p>
          <div class="product__description">
            <p>Описание:</p>
            <p>${products[items - 1].description}</p>
          </div>
          <div class="product__features">
            <p>Характеристики:</p>
            <p>Длина: 87 см.</p>
            <p>Ширина: 61 см.</p>
            <p>Материал - фанера (толщина 8 мм).</p>
          </div>
          <div class="product__additionally">
            <p>Доп:</p>
            <p>${products[items - 1].description}</p>
          </div>
          <div class="product__row">
            <div class="product__counts">
              <div class="product__counts-title"><span>Колличество</span> (шт.)</div>
              <div class="product__counts-input">
                <button id="decrement">-</button>
                <input type="text" id="input"value='1' readonly>
                <button id="increment">+</button>
              </div>
            </div>
            <button class="product__cart-btn">В корзину</button>
            <span class="product__price">${products[items - 1].price} руб</span>
          </div>
        </div>
      </div>
    `;
    return this.container;
  }

  render() {
    this.renderProductCard();
    return this.container;
  }
}
