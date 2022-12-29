import { Component } from '../../../templates/components';
import { products } from '../../../../json';

export class MainCard extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  stars(rating: number) {
    switch (rating) {
      case 1:
        return '⭐';
        break;
      case 2:
        return '⭐';
        break;
      case 3:
        return '⭐⭐';
        break;
      case 4:
        return '⭐⭐';
        break;
      case 5:
        return '⭐⭐⭐';
        break;
      case 6:
        return '⭐⭐⭐';
        break;
      case 7:
        return '⭐⭐⭐⭐';
        break;
      case 8:
        return '⭐⭐⭐⭐';
        break;
      case 9:
        return '⭐⭐⭐⭐⭐';
        break;
      case 10:
        return '⭐⭐⭐⭐⭐';
        break;
    }
  }
  renderCart() {
    const items = localStorage.getItem('filterItems');
    let arr: string[] = [];
    if (items) {
      arr = items?.split(',');
    } else {
      products.forEach((el) => {
        arr.push(String(el.id));
      });
      localStorage.setItem('filterItems', arr.join(','));
    }

    const fragment = new DocumentFragment();

    arr?.forEach((button) => {
      const star = this.stars(Math.round(products[Number(button) - 1].rating));

      const cardHTML = document.createElement('div');
      cardHTML.classList.add('store__item', 'item');
      cardHTML.innerHTML = `
        <a class="item__link" href="#">
          <div class="item__img">
            <img src='${products[Number(button) - 1].thumbnail}' alt="">
          </div>
          <div class="item__title">${products[Number(button) - 1].title}</div>
          <div class="item__stock">В наличии: <span>${products[Number(button) - 1].stock}</span></div>
          <div class="item__rating">${star}</div>
          <div class="item__price">${products[Number(button) - 1].price} руб</div>
        </a>
        <button class="item__btn btn" data-card=${products[Number(button) - 1].id}>В корзину</button>
`;
      fragment.append(cardHTML);
    });
    this.container.append(fragment);
  }

  render() {
    this.renderCart();
    return this.container;
  }
}
