import { Page } from '../../core/templates/page';
import '../../components/pageFooter/pageFooter';
import '../../components/storeItem/storeItem';
import '../../components/filters/filters';
import '../../components/pagination/pagination';
import '../../components/sortSection/sortSection';
import '../../components/store/store';
import '../../components/categoryFilter/categoryFilter';
import '../../components/filters/filters';
import {products}  from '../../json'

import { CategogyFilters } from '../../core/components/mainCards/categoryFilter/categoryFilters';
import { AsaidFilters1 } from '../../core/components/mainCards/asaidFilters/asaidFilters';
import { App } from '../app/app';
import { MainCard } from '../../core/components/mainCards/mainCard/mainCard';

export class MainPage extends Page {
    protected categoryFilter: CategogyFilters;
    protected asaidFilters: AsaidFilters1;
    protected static App: App;
    protected  mainCard : MainCard;

    constructor(id: string) {
        super(id);

        this.categoryFilter = new CategogyFilters('div', 'category-filter');
        this.asaidFilters = new AsaidFilters1('div', 'page__wrapper');
         this.mainCard = new MainCard('section', 'store')
    }

     listeningCategory() {
        document.querySelector('.category-filter__list')?.addEventListener('click', (e) => {
          //вызвать функцию сортировки
          const el = e.target as HTMLInputElement
          const type = el.getAttribute("data-type");
        
         //ввынести в отдельную функцию
          const arr = products.filter(item => item.category === type)
          
          const arr2: string[] = [];
           arr.forEach(item=> {
            arr2.push(String(item.id))
           })

          localStorage.removeItem('type');
          localStorage.setItem('type', arr2.join(','));
        
          const currentPageHTML = document.querySelector(`.store`)

        if(currentPageHTML){
          currentPageHTML.innerHTML =''
          currentPageHTML.replaceWith(this.mainCard.render());
          this.listeningCartButton()
        }
        });
    }

    listeningCartButton(){

      let card: string | null = localStorage.getItem('card')
     
      document.querySelector('.store')?.addEventListener('click',(e)=>{
        const el = e.target as HTMLInputElement
        const type = el.getAttribute("data-card");
         if(card){
          card = card +','+type
      }else {
        card = type
      }
         localStorage.setItem('card', String(card));

        //  const currentPageHTML = document.querySelector(`.store`)

        //  if(currentPageHTML){
        //    currentPageHTML.innerHTML =''
        //    currentPageHTML.replaceWith(this.mainCard.render());
          
        //  }
      })

    }

    render() {
        const main = document.createElement('main');
        main.classList.add('page');

        const PageContainer = document.createElement('div');
        main.classList.add('page__container');

        PageContainer.append(this.categoryFilter.render());
        PageContainer.append(this.asaidFilters.render());

        main.append(PageContainer);

        this.container.append(main);

        return this.container;
    }
}
