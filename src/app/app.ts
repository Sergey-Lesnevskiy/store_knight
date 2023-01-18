
import { CreateCar } from '../assets/createCar/CreateCar';
import { Header } from '../assets/header/Header';


export const enum PageId {
  MainPage = 'main-page',
  CartPage = 'cart-page',
  ProductPage = 'product-page',
}

export class App {
  private static container: HTMLElement = document.body;
  private header: Header;
  
  private createCard : CreateCar;
 

  constructor() {
 
    this.header = new Header('header', 'header');
    this.createCard = new CreateCar('div','card')
  }


  run() {
    App.container.append(this.header.render());
    App.container.append(this.createCard.render());
    
  

  }
}
