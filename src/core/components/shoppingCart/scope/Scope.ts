import { Component } from "../../../templates/components";

//   <div class="shopping-cart__remove-card">
// <p>Очистить корзину</p>
// </div>

export class CardScope extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

  renderPage1(){
    const scope = document.createElement('div')
    scope.classList.add('shopping-cart__score')
    scope.innerHTML = `

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


`
this.container.append(scope)
  }



//  renderPageHeader(){
//        const pageHeader = document.createElement('div');
//     pageHeader.innerHTML = `


//            <div class="shopping-cart__products">

//            <div class="shopping-cart__score">
//                <div class="shopping-cart__all-scope-wrapper">
//                    <div class="shopping-cart__all-scope-title">Все товары:</div>
//                    <div class="shopping-cart__all-scope-number">37830</div>
//                </div>
//                <div class="shopping-cart__promo-wrapper">
//                    <div class="shopping-cart__promo-title">Промо-код:</div>
//                    <div class="shopping-cart__promo-number">-1830</div>
//                </div>
//                <div class="shopping-cart__total-wrapper">
//                    <div class="shopping-cart__total-title">Все товары:</div>
//                    <div class="shopping-cart__total-number">37830 руб</div>
//                </div>
//                <div class="shopping-cart__promo-input-wrapper">
//                    <div class="shopping-cart__promo-input-title">Промо-код</div>
//                    <label for="promo"></label>
//                    <input type="text" placeholder="rsschool" id="promo" class="shopping-cart__promo-input">
//                </div>
//                <button class="shopping-cart__button">Оформить заказ</button>
//            </div>

// `

//    this.container.append(pageHeader)
// }


  render (){
 this.renderPage1()

    return  this.container;
  }
}