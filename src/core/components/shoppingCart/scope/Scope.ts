import { Component } from "../../../templates/components";
import {products}  from '../../../../json'


export class CardScope extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

  countThePrice(){
    const id: string |null=  localStorage.getItem('card')
    if(!id){
      return 0
     }

   let arr:string [] |undefined =[]
   arr = id?.split(',')
   
   let count :number = 0
   arr?.forEach(item=>{
    count = count + products[Number(item)-1].price
   })
    return count;
  }
  countDiscount(){
   const id: string | null=  localStorage.getItem('card')
   if(!id){
    return 0
   }
   let arr:string [] |undefined =[]
   arr = id?.split(',')
   
   let count :number = 0
   arr?.forEach(item=>{
    count = count + products[Number(item)-1].discountPercentage
   })
    return count;
  }


  renderPage1(){
    const allScope = this.countThePrice()
    const discount = this.countDiscount()

    const scope = document.createElement('div')
    scope.classList.add('shopping-cart__score')
    scope.innerHTML = `

                 <div class="shopping-cart__all-scope-wrapper">
                     <div class="shopping-cart__all-scope-title">Все товары:</div>
                     <div class="shopping-cart__all-scope-number">${allScope} </div>
                 </div>
                 <div class="shopping-cart__promo-wrapper">
                     <div class="shopping-cart__promo-title">Промо-код:</div>
                     <div class="shopping-cart__promo-number">-${discount}</div>
                 </div>
                 <div class="shopping-cart__total-wrapper">
                     <div class="shopping-cart__total-title">Итого:</div>
                     <div class="shopping-cart__total-number">${allScope - discount} руб</div>
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

  render (){
 this.renderPage1()

    return  this.container;
  }
}