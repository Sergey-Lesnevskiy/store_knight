import { Component } from '../../../templates/components';
import { products } from '../../../../json';
import { MainCard } from '../mainCard/mainCard';

//<div class="shopping-cart__img" style="background-image: url('https://thumb.cloud.mail.ru/weblink/thumb/xw1/PuyU/pkmfmKmEd)">

export class AsideFilters extends Component {
  protected mainCard: MainCard;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.mainCard = new MainCard('section', 'store');
  }

  renderCart() {
    const cardHTML = document.createElement('aside');
    cardHTML.classList.add('filters');
    cardHTML.innerHTML = `
    <div class="filters__header">
      <h2 class="filters__title">Фильтры</h2>
      <button class="filters__btn">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 12.8H27.2C28.0836 12.8 28.8 13.5164 28.8 14.4L28.7999 26.8C28.7999 27.9046 27.9045 28.8 26.7999 28.8L14.4 28.8C13.5163 28.8 12.8 28.0837 12.8 27.2V24M16 3.20001L6.39995 3.20001C4.63264 3.20001 3.19995 4.6327 3.19995 6.40001L3.19995 16C3.19995 17.7673 4.63264 19.2 6.39995 19.2L16 19.2C17.7673 19.2 19.2 17.7673 19.2 16L19.2 6.40001C19.2 4.6327 17.7673 3.20001 16 3.20001Z"
            stroke="#FFFEF8" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
      <button class="filters__btn"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5254 11.4745L16 16M16 16L11.4745 20.5254M16 16L20.5254 20.5254M16 16L11.4745 11.4745M28.7999 7.99995L28.7999 24.0001C28.7999 26.6511 26.6509 28.8001 23.9999 28.8001H7.99995C5.34898 28.8001 3.19995 26.6511 3.19995 24.0001V7.99995C3.19995 5.34898 5.34898 3.19995 7.99995 3.19995H23.9999C26.6509 3.19995 28.7999 5.34898 28.7999 7.99995Z"
            stroke="#FFFEF8" stroke-width="2" stroke-linecap="round" />
        </svg></button>
    </div>

    <div class="filters__body">
      <!-- Search -->
      <div class="search-filter">
        <input class="search-filter__input" type="text" name="text" placeholder="Search product" value="">
      </div>
      <!-- Type -->
      <div class="type-filter">
        <h3 class="type-filter__title">Тип:</h3>
        <ul class="type-filter__list">
          <li class="type-filter__item">Выберите категорию</li>
        </ul>
      </div>
      <!-- Sales -->
      <div class="sale-filter">
        <h3 class="sale-filter__title">Скидки:</h3>
        <ul class="sale-filter__list">
          <li class="sale-filter__item">
            <input type="checkbox" id="sale">
            <label for="sale">Товары со скидкой</label>
          </li>
        </ul>
      </div>
      <!-- In stock -->
      <div class="stock-filter">
        <h3 class="stock-filter__title">В наличии:</h3>
        <div class="stock-filter__slider">
          <input class="stock-filter__input" type="number" value="1" min="0" max="34"/>
          <input class="stock-filter__range" type="range" value="1" min="0" max="34">
        </div>
      </div>
      <!-- Price -->
      <div class="price-filter">
        <h3 class="price-filter__title">Цена:</h3>
        <div class="price-filter__slider">
          <div class="price-filter__input-group">
            <input class="price-filter__input" type="number" value="1" min="0" max="999999"/>
            <input class="price-filter__input" type="number" value="999999" min="0" max="999999"/>
          </div>

          <div class="price-filter__range-group">
            <input class="price-filter__range range-min" type="range" value="1" min="0" max="999999">
            <input class="price-filter__range range-max" type="range" value="999999" min="0" max="999999">
          </div>
        </div>
      </div>

    </div>

`;
    this.container.append(cardHTML);
  }
  renderCart2() {
    //  const pageHeader = document.createElement('div');
    //  const fragment = new DocumentFragment();
    const cardHTML = document.createElement('div');
    cardHTML.classList.add('page__right-side');

    const section = document.createElement('section');
    section.classList.add('sort');
    section.innerHTML = `
      <div class="sort__by">
        <label for="sort-by__title">Сортировать по:</label>
        <select name="sort-by" id="sort-by">
          <option disabled selected="selected" value="">Сортировать по</option>
          <option value="price">По цене</option>
          <option value="title">По алфавиту</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>

      <div class="sort__info">
        <p>Товаров <span>9</span> из <span>31</span></p>
      </div>

      <div class="sort__view">
        <button class="sort__view-btn">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26 18H6C5.44772 18 5 18.4477 5 19V24C5 24.5523 5.44772 25 6 25H26C26.5523 25 27 24.5523 27 24V19C27 18.4477 26.5523 18 26 18Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M26 7H6C5.44772 7 5 7.44772 5 8V13C5 13.5523 5.44772 14 6 14H26C26.5523 14 27 13.5523 27 13V8C27 7.44772 26.5523 7 26 7Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="sort__view-btn sort__view-btn--active">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6H6V14H14V6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M26 6H18V14H26V6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M14 18H6V26H14V18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M26 18H18V26H26V18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="sort__view-counts">
          <label for="sort-view">Сортировать по:</label>
          <select name="select" id="sort-view">

            <option value="price">9</option>
            <option value="alphabet">18</option>
            <option value="rating">36</option>
          </select>
        </div>
      </div>
  `;
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');
    pagination.innerHTML = `

    <div class="pagination">
      <button class="pagination__btn pagination__btn--active">1</button>
      <button class="pagination__btn">2</button>
      <button class="pagination__btn">3</button>
      <button class="pagination__btn">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6 9.59999L24 16L17.6 22.4M8 9.59999L14.4 16L8 22.4" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
`;

    const pagination2 = document.createElement('div');
    pagination2.classList.add('pagination');
    pagination2.innerHTML = `
      <div class="pagination">
        <button class="pagination__btn pagination__btn--active">1</button>
        <button class="pagination__btn">2</button>
        <button class="pagination__btn">3</button>
        <button class="pagination__btn">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 9.59999L24 16L17.6 22.4M8 9.59999L14.4 16L8 22.4" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

`;

    cardHTML.append(section);
    cardHTML.append(pagination);
    cardHTML.append(this.mainCard.render());
    cardHTML.append(pagination2);

    this.container.append(cardHTML);
  }

  render() {
    this.renderCart();
    this.renderCart2();

    return this.container;
  }
}
