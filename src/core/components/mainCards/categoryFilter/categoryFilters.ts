import { Component } from "../../../templates/components";





export class CategoryFilters extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className)
  }

  renderCart() {

    const cardHTML = document.createElement('ul');
    cardHTML.classList.add('category-filter__list');
    cardHTML.innerHTML = `
      <li class="category-filter__item">
        <input type="radio" id="all" name="type" data-type='all'/>
        <label class="btn btn-default" for="all">Все товары</label>
      </li>
      <li class="category-filter__item">
        <input type="radio" id="weapon" name="type" data-type='weapon'/>
        <label class="btn btn-default" for="weapon">Оружие</label>
      </li>
      <li class="category-filter__item">
        <input type="radio" id="armor" name="type" data-type='armor'/>
        <label class="btn btn-default" for="armor">Доспехи</label>
      </li>
      <li class="category-filter__item">
        <input type="radio" id="costumes" name="type" data-type='costumes'/>
        <label class="btn btn-default" for="costumes">Костюмы</label>
      </li>
      <li class="category-filter__item">
        <input type="radio" id="jewelry" name="type" data-type='jewelry'/>
        <label class="btn btn-default" for="jewelry">Ювелирка</label>
      </li>
      <li class="category-filter__item">
        <input type="radio" id="exotic" name="type" data-type='houseHold'/>
        <label class="btn btn-default" for="exotic">Предметы быта</label>
      </li>

`
    this.container.append(cardHTML)
  }

  render() {
    this.renderCart()

    return this.container;
  }
}
