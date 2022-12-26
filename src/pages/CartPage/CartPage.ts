import { Page } from "../../core/templates/page";
import '../../components/shoppingCart/shoppingCart'
import { Card } from "../../core/components/shoppingCart/card/card";
import { CardScope } from "../../core/components/shoppingCart/scope/Scope";

export class CartPage extends Page{



protected card : Card;
protected cardScope : CardScope;

constructor(id:string){
  super(id);
 this.card= new Card('div', 'card')
 this.cardScope= new CardScope('div', 'shopping-cart__products')
}

 listeningClearCart(){
 const remove =  document.querySelector('.shopping-cart__remove-card')
 if(remove){
   remove.addEventListener('click', ()=>{
    localStorage.removeItem('card')

    const currentPageHTML = document.querySelector(`.shopping-cart__products`)

    if(currentPageHTML){
      currentPageHTML.innerHTML ='';
    }
  })
 }else{
  console.log('not cart');
 }

}
listeningDeleteOneCard(){

  const deleteCard =  document.querySelector('.shopping-cart__products')

if(deleteCard){
  deleteCard.addEventListener('click',(e)=>{

    console.log(e.target);

  //закончить с удалением карточки и сделать через массив
    const el = e.target as HTMLElement

    if(el.classList.contains('svg1')){

       const numb =el.getAttribute('data-delete')

      const lock = localStorage.getItem('card')
      console.log(lock?.replace(String(numb),''))
    }
  }, true)
}


}



render(){

  const  containerCard = document.createElement('div');
  containerCard.className = 'shopping-cart'
  const  containerCard2 = document.createElement('div');
  containerCard2.className = 'shopping-cart__container'

  containerCard2.append(this.card.render())
  containerCard2.append(this.cardScope.render())

  containerCard.append(containerCard2)
  this.container.append(containerCard);

  return this.container;
}
}