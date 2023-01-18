import { Component } from '../templates/components';
import './header.css'


export class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }
 

  renderPageHeader() {

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('header__container');
    pageHeader.innerHTML = ` 
     <button class="btn btn__garage">To garage</button>
    <button class="btn btn__winner">To winner</button>`;

    this.container.append(pageHeader);
  }

  render() {
    this.renderPageHeader();
    return this.container;
  }
}
