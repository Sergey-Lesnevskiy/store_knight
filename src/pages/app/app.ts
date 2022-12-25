import { MainPage } from '../Main/MainPage';
import { CartPage } from '../CartPage/CartPage';
import { Page } from '../../core/templates/page';
import { ProductPage } from '../ProductPage/ProductPage';
import { Header } from '../../core/components/header/Header';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Footer } from '../../core/components/footer/Footer';
export const enum PageId  {
  MainPage ='main-page',
  CartPage = 'cart-page',
  ProductPage = 'product-page'
}


export class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;
    private footer: Footer;
     private  initialPage: MainPage;
    private  cartPage: CartPage;

    //функция рендерит страницу в зависимости от смены url

    private enableRoutChange(){
      window.addEventListener('hashchange',()=>{
       const hash = window.location.hash.slice(1);
       App.renderNewPage(hash)
       this.initialPage.listeningCategory();
       this.cartPage.listeningClearCart();
       this.cartPage.listeningdeleteOneCard();

      })

    }
    

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header','header');
        this.footer = new Footer('footer','footer');

         this.cartPage= new CartPage('cartPage')
    }
    //метод для смены страницы
    static renderNewPage(idPage: string) {
      const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
      if(currentPageHTML){
        currentPageHTML.remove();
      }
        let page: Page | null = null;
        if (idPage === PageId.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageId.CartPage) {
            page = new CartPage(idPage);
           
        } else if (idPage === PageId.ProductPage) {
            page = new ProductPage(idPage);
        }else{
          page = new ErrorPage(idPage,'404')
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
           App.container.append(pageHTML);
           
          //  MainPage.listeningCategory();
          //  CartPage.listenningClearCart()
        }
    }


    run() {
      App.container.append(this.header.render())
      App.renderNewPage('main-page');
        this.enableRoutChange();
        //  this.initialPage.listeningCategory();
        //  this.initialPage.listeningCartButton();
        //  console.log('change')
        //  CartPage.listeningClearCart()
      // if(window.location.hash ==='#cart-page'){
      //   console.log('click App')

      // }
        //  App.container.append(this.footer.render())
    }
}
