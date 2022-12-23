import { Page } from "../../core/templates/page";
import '../../components/shoppingCart/shoppingCart'
import { Card } from "../../core/components/shoppingCart/card/card";

export class CartPage extends Page {
  private containerCard: HTMLElement | null = document.querySelector('.shopping-cart__container')
  static TextObject = {
    MainTitle: ` <div class='shopping-cart'>
    <div class="shopping-cart__container">
        <div class="shopping-cart__products">
            <div class="shopping-cart__remove-card">
                <p>Очистить корзину</p>
            </div>

            <div class="shopping-cart__card">
                <div class="shopping-cart__img"></div>
                <div class="shopping-cart__info">
                    <div class="shopping-cart__info-description">
                        <h2 class="shopping-cart__info-title">Пулены высокие (ОСОК)</h2>
                        <p class="shopping-cart__info-article"> Артикул: (ГК)3021</p>
                        <p class="shopping-cart__info-text">
                            Исторический макет европейских средневековых высоких "пулен". Предназначены для
                            исторической реконструкции, ролевых игр живого действия (LARP) и театров.
                        </p>
                    </div>

                    <button class="shopping-cart__info-trash">
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
                          <input type="text" id="input" readonly>
                          <button id="increment">+</button>
                        </div>
                      </div>

                        <div class="shopping-cart__price-calc">
                            <span class="shopping-cart__price-calc-total-product">2</span>
                            <span class="shopping-cart__price-calc-multiplier">x</span>
                            <span class="shopping-cart__price-calc-total-money">5280</span>
                            <span class="shopping-cart__price-calc-currency">руб</span>
                        </div>
                        <div class="shopping-cart__price-total">
                            <span class="shopping-cart__price-">10 560</span>
                            <span class="shopping-cart__price-calc-currency-bold">руб</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shopping-cart__card">
                <div class="shopping-cart__img"></div>
                <div class="shopping-cart__info">
                    <div class="shopping-cart__info-description">
                        <h2 class="shopping-cart__info-title">Пулены высокие (ОСОК)</h2>
                        <p class="shopping-cart__info-article"> Артикул: (ГК)3021</p>
                        <p class="shopping-cart__info-text">
                            Исторический макет европейских средневековых высоких "пулен". Предназначены для
                            исторической реконструкции, ролевых игр живого действия (LARP) и театров.
                        </p>
                    </div>

                    <button class="shopping-cart__info-trash">
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
                          <input type="text" id="input" readonly>
                          <button id="increment">+</button>
                        </div>
                      </div>

                        <div class="shopping-cart__price-calc">
                            <span class="shopping-cart__price-calc-total-product">2</span>
                            <span class="shopping-cart__price-calc-multiplier">x</span>
                            <span class="shopping-cart__price-calc-total-money">5280</span>
                            <span class="shopping-cart__price-calc-currency">руб</span>
                        </div>
                        <div class="shopping-cart__price-total">
                            <span class="shopping-cart__price-">10 560</span>
                            <span class="shopping-cart__price-calc-currency-bold">руб</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shopping-cart__score">
            <div class="shopping-cart__all-scope-wrapper">
                <div class="shopping-cart__all-scope-title">Все товары:</div>
                <div class="shopping-cart__all-scope-number">37 830</div>
            </div>
            <div class="shopping-cart__promo-wrapper">
                <div class="shopping-cart__promo-title">Промо-код:</div>
                <div class="shopping-cart__promo-number">-1 830</div>
            </div>
            <div class="shopping-cart__total-wrapper">
                <div class="shopping-cart__total-title">Итого:</div>
                <div class="shopping-cart__total-number">37 830 руб</div>
            </div>
            <div class="shopping-cart__promo-input-wrapper">
                <div class="shopping-cart__promo-input-title">Промо-код:</div>
                <label for="promo"></label>
                <input type="text" id="promo" class="shopping-cart__promo-input">
            </div>
            <button class="shopping-cart__button">Оформить заказ</button>
        </div>
    </div>
  </div>`
  }
  protected card: Card;

  constructor(id: string) {
    super(id);
    this.card = new Card('card', 'card')
  }


  render() {

    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);

    this.container.append(title);
    // this.containerCard?.append(this.card.render());
    return this.container;
  }
}