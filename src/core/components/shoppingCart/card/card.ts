import { Component } from '../../../templates/components';
import { products } from '../../../../json';

export class Card extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderRemove(): HTMLElement {
    const remove = document.createElement('div');
    remove.classList.add('shopping-cart__remove-card');

    const p = document.createElement('p');
    p.innerText = 'Очистить корзину';

    remove.append(p);
    return remove;
  }

  renderPageHeader(): DocumentFragment {
    let arrCart: string[] | undefined = [];
    const items = localStorage.getItem('card');

    if (arrCart) {
      arrCart = items?.split(',');
    }
    const fragment = new DocumentFragment();
    arrCart?.forEach((button) => {
      const cardHTML = document.createElement('div');
      cardHTML.classList.add('shopping-cart__card');
      cardHTML.innerHTML = `
                 <div class="shopping-cart__img">
                 <img src=${products[Number(button) - 1].thumbnail} alt="">
                 </div>
                 <div class="shopping-cart__info">
                     <div class="shopping-cart__info-description">
                         <h2 class="shopping-cart__info-title">${products[Number(button) - 1].title}</h2>
                         <p class="shopping-cart__info-article"> Артикул: (ГК)${products[Number(button) - 1].id}</p>
                         <p class="shopping-cart__info-text">
                         ${products[Number(button) - 1].description}
                         </p>
                     </div>

                     <button class="shopping-cart__info-trash" data-delete=${products[Number(button) - 1].id} >
                         <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                             <path
                                 d="M1.40002 5.39999H20.6M8.60002 17.4V10.2M13.4 17.4V10.2M15.8 22.2H6.20002C4.87454 22.2 3.80002 21.1255 3.80002 19.8V6.59999C3.80002 5.93725 4.33728 5.39999 5.00002 5.39999H17C17.6628 5.39999 18.2 5.93725 18.2 6.59999V19.8C18.2 21.1255 17.1255 22.2 15.8 22.2ZM8.60002 5.39999H13.4C14.0628 5.39999 14.6 4.86273 14.6 4.19999V2.99999C14.6 2.33725 14.0628 1.79999 13.4 1.79999H8.60002C7.93728 1.79999 7.40002 2.33725 7.40002 2.99999V4.19999C7.40002 4.86273 7.93728 5.39999 8.60002 5.39999Z"
                                 stroke="black" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" />
                         </svg>
                     </button>

                     <div class="shopping-cart__price-wrapper">

                       <div class="shopping-cart__counts">
                         <div class="shopping-cart__counts-title"><span>Колличество</span> (шт.)</div>
                         <div class="shopping-cart__counts-input">
                           <button id="decrement">-</button>
                           <input type="text" id="input" readonly value='1'>
                           <button id="increment">+</button>
                         </div>
                       </div>

                         <div class="shopping-cart__price-calc">
                             <span class="shopping-cart__price-calc-total-product">1</span>
                             <span class="shopping-cart__price-calc-multiplier">x</span>
                             <span class="shopping-cart__price-calc-total-money">${
                               products[Number(button) - 1].price
                             }</span>
                             <span class="shopping-cart__price-calc-currency">руб</span>
                         </div>
                         <div class="shopping-cart__price-total">
                             <span class="shopping-cart__price-">${products[Number(button) - 1].price}</span>
                             <span class="shopping-cart__price-calc-currency-bold">руб</span>
                         </div>
                     </div>
                 </div>
             </div>
`;

      fragment.append(cardHTML);
    });
    return fragment;
  }

  render(): HTMLElement {
    const containerCard = new DocumentFragment();
    containerCard.append(this.renderRemove());
    containerCard.append(this.renderPageHeader());
    this.container.append(containerCard);
    return this.container;
  }
}
