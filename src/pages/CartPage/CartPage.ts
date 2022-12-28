import { Page } from '../../core/templates/page';
import '../../components/shoppingCart/shoppingCart';
import { Card } from '../../core/components/shoppingCart/card/card';
import { CardScope } from '../../core/components/shoppingCart/scope/Scope';
import { Header } from '../../core/components/header/Header';
import '../../components/modalConfirm/modalOrder';

export class CartPage extends Page {
  protected header: Header;
  protected card: Card;
  protected cardScope: CardScope;

  constructor(id: string) {
    super(id);
    this.card = new Card('div', 'card');
    this.cardScope = new CardScope('div', 'shopping-cart__products');
    this.header = new Header('header', 'header');
  }

  listeningDeleteOneCard() {
    const deleteCard = document.querySelectorAll('.shopping-cart__info-trash');

    for (let i = 0; i < deleteCard.length; i++) {
      deleteCard[i].addEventListener('click', (e) => {
        const el = e.currentTarget as HTMLElement;
        const lock = localStorage.getItem('card');
        const arr: string[] | undefined = lock?.split(',');

        const arr2: string[] = [];
        arr?.forEach((item) => {
          if (item !== el.getAttribute('data-delete')) {
            if (item) {
              arr2?.push(item);
            }
          }
        });
        const str = arr2?.join(',');
        localStorage.removeItem('card');
        if (str) {
          localStorage.setItem('card', str);
        }

        const currentPageHTML = document.querySelector(`.card`);

        if (currentPageHTML) {
          currentPageHTML.innerHTML = '';
          currentPageHTML.replaceWith(this.card.render());
          this.listeningDeleteOneCard();
        }

        const CurrntScopeHTML = document.querySelector(`.shopping-cart__products`);

        if (CurrntScopeHTML) {
          CurrntScopeHTML.innerHTML = '';
          CurrntScopeHTML.replaceWith(this.cardScope.render());
        }

        const headerHTML = document.querySelector(`.header`);

        if (headerHTML) {
          headerHTML.innerHTML = '';
          headerHTML.replaceWith(this.header.render());
        }
      });
    }
  }
  //modal
  listeningOpenModal() {
    const modal = document.querySelector('.shopping-cart__button');
    if (modal) {
      modal.addEventListener('click', () => {
        document.querySelector('.modal')?.classList.add('modal--show');
        document.querySelector('body')?.classList.add('lock');
        this.listeningCloseModal();
      });
    }
  }
  listeningCloseModal() {
    const crose = document.querySelector('.modal__btn-close');
    if (crose) {
      crose.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.modal')?.classList.remove('modal--show');
        document.querySelector('body')?.classList.remove('lock');
      });
    }
  }
  //modal
  render() {
    const containerCard = document.createElement('div');
    containerCard.className = 'shopping-cart';
    const containerCard2 = document.createElement('div');
    containerCard2.className = 'shopping-cart__container';

    containerCard2.append(this.card.render());
    containerCard2.append(this.cardScope.render());

    containerCard.append(containerCard2);
    this.container.append(containerCard);

    return this.container;
  }
}
