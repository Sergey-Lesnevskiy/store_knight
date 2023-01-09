import { ProductCard } from '../../core/components/productCard/productCard';
import { Page } from '../../core/templates/page';
import './product.css';
import { Header } from '../../core/components/header/Header';

export class ProductPage extends Page {
  protected productCard: ProductCard;
  protected header: Header;

  constructor(id: string) {
    super(id);
    this.productCard = new ProductCard('div', 'product__container');
    this.header = new Header('header', 'header');
  }
  listeningCartButton() {
    let card: string | null = localStorage.getItem('card');

    document.querySelector('.product__cart-btn')?.addEventListener('click', (e) => {
      const el = e.target as HTMLButtonElement;
      
        const type = el.getAttribute('data-card');
        if (card) {
          card = card + ',' + type;
        } else {
          card = type;
        }
        localStorage.setItem('card', String(card));

        const headerHTML = document.querySelector(`.header`);

        if (headerHTML) {
          headerHTML.innerHTML = '';
          headerHTML.replaceWith(this.header.render());
        }
        el.disabled = true;
   
    });
  }
  listeningImage(){
    const imgeBlock = document.querySelector('.product__image-thumbnails')as HTMLDivElement;
    const imgeBig = document.querySelector('.product__image-big img') as HTMLImageElement;

    if(imgeBlock){
      imgeBlock.addEventListener('click',(e)=>{
        const el = e.target as HTMLImageElement;
        const type = el
        const change = type.src

        console.log(change);
        if(imgeBig){
          imgeBig.src = type.src
        }
      })
    }
  }

  render() {
    this.container.append(this.productCard.render());
    return this.container;
  }
}
