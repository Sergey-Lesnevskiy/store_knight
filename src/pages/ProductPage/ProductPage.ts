import { ProductCard } from '../../core/components/productCard/productCard';
import { Page } from '../../core/templates/page';
import './product.css';

export class ProductPage extends Page {
  protected productCard: ProductCard;

  constructor(id: string) {
    super(id);
    this.productCard = new ProductCard('div', 'product');
  }
//   changeRout()
// {
//  window.addEventListener('hashchange', () => {
//   const currentPageHTML = document.querySelector(`.product`);

//   if (currentPageHTML) {
//     currentPageHTML.innerHTML = '';
//   }
//  })

// } 

  render() {
   
   
    this.container.append(this.productCard.render())
    return this.container;
  }
}
