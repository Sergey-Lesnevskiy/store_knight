import { Component } from '../../templates/components';

export class CategoryFilters extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    this.container.innerHTML = `
      <ul class="category-filter__list">
        <li class="category-filter__item">
          <input type="radio" id="all" name="category" data-category='all' checked/>
          <label class="btn btn-default" for="all">Все товары</label>
        </li>
        <li class="category-filter__item">
          <input type="radio" id="weapon" name="category" data-category='weapon'/>
          <label class="btn btn-default" for="weapon">Оружие</label>
        </li>
        <li class="category-filter__item">
          <input type="radio" id="armor" name="category" data-category='armor'/>
          <label class="btn btn-default" for="armor">Доспехи</label>
        </li>
        <li class="category-filter__item">
          <input type="radio" id="costumes" name="category" data-category='costumes'/>
          <label class="btn btn-default" for="costumes">Костюмы</label>
        </li>
        <li class="category-filter__item">
          <input type="radio" id="jewelry" name="category" data-category='jewelry'/>
          <label class="btn btn-default" for="jewelry">Ювелирка</label>
        </li>
        <li class="category-filter__item">
          <input type="radio" id="exotic" name="category" data-category='houseHold'/>
          <label class="btn btn-default" for="exotic">Предметы быта</label>
        </li>
      </ul>
      `;

    return this.container;
  }
}
