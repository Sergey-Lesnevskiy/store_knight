import { MainPage } from '../Main';
import { CartPage } from '../CartPage';
import { Page } from '../../core/templates/page';
import { ProductPage } from '../ProductPage';
import { Header } from '../../core/components/header';
import { ErrorPage } from '../ErrorPage';
export const enum PageId  {
  MainPage ='main-page',
  CartPage = 'cart-page',
  ProductPage = 'product-page'
}


export class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;
    private initialPage: MainPage;

    //функция рендерит страницу в зависимости от смены url

    private enableRoutChange(){
      window.addEventListener('hashchange',()=>{
       const hash = window.location.hash.slice(1);
       App.renderNewPage(hash)
      })
    }
    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header','header');
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
        }
    }


    run() {
      App.container.append(this.header.render())
      App.renderNewPage('main-page');
        this.enableRoutChange();
        // const mainPageHTML = this.initialPage.render()
        // this.conteiner.append(mainPageHTML)
    }
}
