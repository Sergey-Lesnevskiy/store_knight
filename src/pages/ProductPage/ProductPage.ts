import { Page } from "../../core/templates/page";
import './product.css'

export class ProductPage extends Page {

  static TextObject = {
    MainTitle: `<div class="product">
    <div class="product__image">
      <div class="product__image-big"></div>
      <div class="product__image-thumbnails">
        <div class="product__image-small"></div>
        <div class="product__image-small"></div>
        <div class="product__image-small"></div>
      </div>
    </div>
  
    <div class="product__info">
      <h2 class="product__title">ЩИТ МИНДАЛЕВИДНЫЙ "ЦВЕТЫ" (ЛАП)</h2>
      <p class="product__id">Артикул: 91</p>
      <p class="product__stock">В наличии: <span>12</span></p>
      <div class="product__description">
        <p>Описание:</p>
        <p>Миндалевидный щит с изображением золотых цветов на синем фоне. Стилизация на тему каплевидных (миндалевидных) щитов, использовавшихся в XIII - XIV веках на Востоке и на Руси.</p>
      </div>
      <div class="product__features">
        <p>Характеристики:</p>
        <p>Длина: 87 см.</p>
        <p>Ширина: 61 см.</p>
        <p>Материал - фанера (толщина 8 мм).</p>
      </div>
      <div class="product__additionally">
        <p>Доп:</p>
        <p>В стандартную комплектацию входит кожаная окантовка (кожа 3-4 мм толщиной) по краям щита, оклейка поля щита плотной тканью, рисунок. С внутренней стороны сделана имитация досок и покраска морилкой; </p>
      </div>
      <div class="product__row">
        <div class="product__counts">
          <div class="product__counts-title"><span>Колличество</span> (шт.)</div>
          <div class="product__counts-input">
            <button id="decrement">-</button>
            <input type="text" id="input" readonly>
            <button id="increment">+</button>
          </div>
        </div>
        <button class="product__cart-btn">В корзину</button>
        <span class="product__price">12 870 руб</span>
      </div>
    </div>
  </div>`
  }

  constructor(id: string) {
    super(id);
  }

  render() {
   
    this.container.innerHTML = ProductPage.TextObject.MainTitle;
    return this.container;
  }
}