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

import { CategoryFilters } from '../../core/components/filters/categoryFilters';
import { AsideFilters } from '../../core/components/mainCards/asideFilters/asideFilters';
import { TypeFilter } from '../../core/components/filters/typeFilter';
import { MainCard } from '../../core/components/mainCards/mainCard/mainCard';
import { Header } from '../../core/components/header/Header';
import { ProductCard } from '../../core/components/productCard/productCard';

export class MainPage extends Page {
  protected categoryFilter: CategoryFilters;
  protected asideFilters: AsideFilters;
  protected typeFilter: TypeFilter;
  protected mainCard: MainCard;
  protected header: Header;
  protected productCard: ProductCard;

  constructor(id: string) {
    super(id);
    this.productCard = new ProductCard('div', 'product');
    this.categoryFilter = new CategoryFilters('div', 'category-filter');
    this.asideFilters = new AsideFilters('div', 'page__wrapper');
    this.typeFilter = new TypeFilter();
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

      const typeFilterContainerEl = document.querySelector(`.type-filter`);
      const typeFilterEl = document.querySelector(`.type-filter__list`);
      if (typeFilterContainerEl && typeFilterEl && category) {
        typeFilterEl.innerHTML = '';
        typeFilterEl.remove();
        typeFilterContainerEl.append(this.typeFilter.render(category));
      }
    });
  }

  listeningCartButton() {
    let card: string | null = localStorage.getItem('card');

    document.querySelector('.store')?.addEventListener('click', (e) => {
      const el = e.target as HTMLButtonElement;
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

  listeningCartLink() {
    const linksA = document.querySelectorAll('.item__link');
    linksA.forEach((item) => {
      item.addEventListener('click', (e) => {
        const el = e.currentTarget as HTMLLinkElement;

        localStorage.removeItem('cardProduct');
        const type = el.getAttribute('data-card');
        if (type) localStorage.setItem('cardProduct', type);
        const url = el.href;
        window.open(url, '_self');
        e.preventDefault();
      });
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

  listeningRange(){
    const priceInput = document.querySelectorAll('.price-filter__input-group input');
    const rangeInput = document.querySelectorAll('.price-filter__range-group input');
    
    const priceGap = 1;
    rangeInput.forEach(input => {
     input.addEventListener('input',(e)=>{
       const minVal = parseInt((rangeInput[0]as HTMLInputElement).value)
       const maxVal = parseInt((rangeInput[1]as HTMLInputElement).value)
 
       if(maxVal - minVal < priceGap){
         const el = e.target as HTMLInputElement;
         if(el.classList.contains('range-min')){
           (rangeInput[0]as HTMLInputElement).value =String( maxVal - priceGap)
         }else{
           (rangeInput[1]as HTMLInputElement).value =String( maxVal - priceGap)
 
         }
       }else{
         (priceInput[0]as HTMLInputElement).value = String(minVal);
         (priceInput[1]as HTMLInputElement).value = String(maxVal)
         const dataItemsPrice = document.getElementsByClassName('item__price') as HTMLCollectionOf<HTMLElement>;
         const dataItems = document.getElementsByClassName('store__item item') as HTMLCollectionOf<HTMLElement>;
         for (let i = 0; i < dataItemsPrice.length; i++) {
           if( Number(dataItemsPrice[i].innerText.slice(0, -3).trim()) > minVal && Number(dataItemsPrice[i].innerText.slice(0, -3).trim()) < maxVal){
             dataItems[i].classList.remove('hide');
           }else{
             dataItems[i].classList.add('hide');
           }
          
           }
       }
     })
    });
 
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

  listeningSortView() {
    const storeSection = document.querySelector(`.store`);
    const viewLineBtn = document.querySelectorAll('.sort__view-btn')[0] as HTMLInputElement;
    const viewGridBtn = document.querySelectorAll('.sort__view-btn')[1] as HTMLInputElement;

    viewLineBtn.addEventListener('click', function () {
      this.classList.add('sort__view-btn--active');
      viewGridBtn.classList.remove('sort__view-btn--active');
      storeSection?.classList.add('store--line-view');
    });

    viewGridBtn.addEventListener('click', function () {
      this.classList.add('sort__view-btn--active');
      viewLineBtn.classList.remove('sort__view-btn--active');
      storeSection?.classList.remove('store--line-view');
    });
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
