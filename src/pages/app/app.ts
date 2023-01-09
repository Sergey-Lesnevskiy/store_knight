import { Page } from '../../core/templates/page';
import { MainPage } from '../MainPage/MainPage';
import { CartPage } from '../CartPage/CartPage';
import { ProductPage } from '../ProductPage/ProductPage';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Header } from '../../core/components/header/Header';
import { Footer } from '../../core/components/footer/Footer';

export const enum PageId {
  MainPage = 'main-page',
  CartPage = 'cart-page',
  ProductPage = 'product-page',
}

export class App {
  private static container: HTMLElement = document.body;
  private header: Header;
  private footer: Footer;
  private MainPage: MainPage;
  private cartPage: CartPage;
  private ProductPage: ProductPage;


  //функция рендерит страницу в зависимости от смены url
  private enableRoutChange() {
    window.addEventListener('hashchange', () => {


      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
      this.MainPage.listeningCategory();
      this.MainPage.listeningType();
      this.MainPage.searchProduct();
      this.MainPage.listeningSortPrice();
      this.MainPage.listeningSortView();
      this.MainPage.listeningCartLink();
      this.MainPage.listeningRange();
      this.MainPage.listeningPagination();
      this.MainPage.listeningRangeStock();
      this.MainPage.listeningCountView();
      this.MainPage.listeningCartButton();
      this.cartPage.listeningOpenModal();
      this.cartPage.listeningDeleteOneCard();
      this.ProductPage.listeningCartButton();
      this.ProductPage.listeningImage();
    });
  }

  constructor() {
    this.MainPage = new MainPage('main-page');
    this.header = new Header('header', 'header');
    this.footer = new Footer('footer', 'footer');
    this.cartPage = new CartPage('cartPage');
    this.ProductPage = new ProductPage('product-page');
  }
  //метод для смены страницы
  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector('main');
    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: Page | null = null;
    if (idPage === PageId.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageId.CartPage) {
      page = new CartPage(idPage);
    } else if (idPage === PageId.ProductPage) {
      page = new ProductPage(idPage);
    } else {
      page = new ErrorPage(idPage, '404');
    }

    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRoutChange();
    this.MainPage.listeningCategory();
    this.MainPage.listeningType();
    this.MainPage.listeningCartButton();
    this.MainPage.searchProduct();
    this.MainPage.listeningSortPrice();
    this.MainPage.listeningSortView();
    this.MainPage.listeningCartLink();
    this.MainPage.listeningRange();
    this.MainPage.listeningCountView();
    this.MainPage.listeningRangeStock();
    this.MainPage.listeningPagination();
    App.container.append(this.footer.render());
  }
}
