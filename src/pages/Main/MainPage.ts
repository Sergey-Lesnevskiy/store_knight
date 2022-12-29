import { Page } from '../../core/templates/page';
import '../../components/pageFooter/pageFooter';
import '../../components/storeItem/storeItem';
import '../../components/filters/filters';
import '../../components/pagination/pagination';
import '../../components/sortSection/sortSection';
import '../../components/store/store';
import '../../components/categoryFilter/categoryFilter';
import '../../components/filters/filters';
import { products } from '../../json';

import { CategoryFilters } from '../../core/components/mainCards/categoryFilter/categoryFilters';
import { AsideFilters } from '../../core/components/mainCards/asideFilters/asideFilters';
import { MainCard } from '../../core/components/mainCards/mainCard/mainCard';
import { Header } from '../../core/components/header/Header';

export class MainPage extends Page {
  protected categoryFilter: CategoryFilters;
  protected asideFilters: AsideFilters;
  protected mainCard: MainCard;
  protected header: Header;

  constructor(id: string) {
    super(id);

    this.categoryFilter = new CategoryFilters('div', 'category-filter');
    this.asideFilters = new AsideFilters('div', 'page__wrapper');
    this.mainCard = new MainCard('section', 'store');
    this.header = new Header('header', 'header');
  }

  listeningCategory() {
    document.querySelector('.category-filter__list')?.addEventListener('click', (e) => {
      //вызвать функцию сортировки
      const el = e.target as HTMLInputElement;
      const category = el.getAttribute('data-category');

      //ввынести в отдельную функцию
      const filterItems = products.filter((item) => item.category === category);
      const filterItemsId = filterItems.map((item) => item.id);

      localStorage.removeItem('filterItems');
      localStorage.setItem('filterItems', filterItemsId.join(','));

      const currentPageHTML = document.querySelector(`.store`);

      if (currentPageHTML) {
        currentPageHTML.innerHTML = '';
        currentPageHTML.replaceWith(this.mainCard.render());
        this.listeningCartButton();
      }
    });
  }

  listeningCartButton() {
    let card: string | null = localStorage.getItem('card');

    document.querySelector('.store')?.addEventListener('click', (e) => {
      const el = e.target as HTMLInputElement;
      if (el.classList.contains('item__btn')) {
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
      }
    });
  }

  searchProduct() {
    const inputSearch = document.querySelector('.search-filter__input') as HTMLInputElement;

    if (inputSearch) {
      inputSearch?.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;

        console.log(target.value);
        const val = target.value.trim().toUpperCase();

        const dataItemsText = document.getElementsByClassName('item__title') as HTMLCollectionOf<HTMLElement>;
        const dataItems = document.getElementsByClassName('store__item item') as HTMLCollectionOf<HTMLElement>;
        if (val !== '') {
          for (let i = 0; i < dataItemsText.length; i++) {
            if (dataItemsText[i].innerText.search(val) == -1) {
              dataItems[i].classList.add('hide');
            } else {
              dataItems[i].classList.remove('hide');
            }
          }
        } else {
          for (let i = 0; i < dataItems.length; i++) {
            dataItems[i].classList.remove('hide');
          }
        }
      });
    }
  }

  listeningSortPrice() {
    const isSelectPrice = document.querySelector('#sort-by') as HTMLInputElement;

    //забираем из
    if (isSelectPrice) {
      isSelectPrice.addEventListener('change', () => {
        const sortV: string | number = String(isSelectPrice.value);

        let arrCart: number[] | undefined = [];
        const items = localStorage.getItem('filterItems');

        if (arrCart) {
          arrCart = items?.split(',').map(Number);
        }

        const productArr = products.filter((person) => arrCart?.indexOf(person.id) !== -1);

        if (sortV === 'title') {
          productArr.sort((a, b) => a[sortV].localeCompare(b[sortV]));
        } else if (sortV === 'price' || sortV === 'rating') {
          productArr.sort((a, b) => a[sortV] - b[sortV]);
        }

        //записываем в locale
        const arr: string[] = [];

        productArr.forEach((el) => {
          arr.push(String(el.id));
        });
        localStorage.setItem('filterItems', arr.join(','));

        //записываем в locale
        const currentPageHTML = document.querySelector(`.store`);

        if (currentPageHTML) {
          currentPageHTML.innerHTML = '';
          currentPageHTML.replaceWith(this.mainCard.render());
          //  this.listeningCartButton()
        }
      });
    }
  }

  render() {
    const PageContainer = document.createElement('div');
    PageContainer.classList.add('page__container');
    PageContainer.append(this.categoryFilter.render());
    PageContainer.append(this.asideFilters.render());
    this.container.append(PageContainer);

    return this.container;
  }
}
