
import { Component } from "../../../templates/components";
import {products}  from '../../../../json'

 const Button =[
  1,2,3,4,
 ]
export class Card extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

renderPageButtons(){
       const pageButtons = document.createElement('div');
       
  Button.forEach((button) => {
    const buttonHTML = document.createElement('div');
    buttonHTML.innerHTML = `   
    <div class="shopping-cart__card">
    <div class="shopping-cart__img"></div>
    <div class="shopping-cart__description">
        <div class="shopping-cart__description-conteiner">
            <div class="shopping-cart__description-wrapper">
                <p class="shopping-cart__description-title">${products[button].title}</p>
                <p class="shopping-cart__description-article"> Артикул: ${products[button].id}</p>
                <p class="shopping-cart__description-subtitle">
                ${products[button].description}
                </p>
                <div class="shopping-cart__description-quantity">Колличество (шт.)</div>
            </div>
            <div class="shopping-cart__description-trash">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.40002 5.39999H20.6M8.60002 17.4V10.2M13.4 17.4V10.2M15.8 22.2H6.20002C4.87454 22.2 3.80002 21.1255 3.80002 19.8V6.59999C3.80002 5.93725 4.33728 5.39999 5.00002 5.39999H17C17.6628 5.39999 18.2 5.93725 18.2 6.59999V19.8C18.2 21.1255 17.1255 22.2 15.8 22.2ZM8.60002 5.39999H13.4C14.0628 5.39999 14.6 4.86273 14.6 4.19999V2.99999C14.6 2.33725 14.0628 1.79999 13.4 1.79999H8.60002C7.93728 1.79999 7.40002 2.33725 7.40002 2.99999V4.19999C7.40002 4.86273 7.93728 5.39999 8.60002 5.39999Z"
                        stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>

        <div class="shopping-cart__price-wrapper">
            <div class="shopping-cart__price-add">
                <div class="shopping-cart__price-minus">-</div>
                <div class="shopping-cart__price-total-product">2</div>
                <div class="shopping-cart__price-plus">+</div>
            </div>
            <div class="shopping-cart__price-calc">
                <span class="shopping-cart__price-calc-total-product">1</span>
                <span class="shopping-cart__price-calc-multiplier">x</span>
                <span class="shopping-cart__price-calc-total-money">${products[button].price}</span>
                <span class="shopping-cart__price-calc-currency">руб</span>
            </div>
            <div class="shopping-cart__price-total-bold">
                <span class="shopping-cart__price-">${products[button].price}</span>
                <span class="shopping-cart__price-calc-currency-bold">руб</span>
            </div>
        </div>
    </div>
</div>
</div>
`
    pageButtons.append(buttonHTML);
  })
  this.container.append(pageButtons)
}

  render (){
    this.renderPageButtons()
    return  this.container;
  }
}
