import { Component } from '../templates/components';
import './createCar.css'

export class CreateCar extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }
 

  renderCreateCarComponent() {

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('create__container');
    pageHeader.innerHTML = ` 
    <div class="wrapperCreate">
    <div class="wrapper__createCar">
      <input type="text" id="createCar">
      <input type="color" id="createCar" value="#e66465">
      <button class="createCarSubmit btn__control">Create</button>
    </div>
    <div class="wrapper__updateCar">
      <input type="text" id='updateCar'>
      <input type="color" id="createCar" value="#e66465">
      <button class="createCarSubmit btn__control">Update</button>
    </div>
    <div class="button__control">
      <button class='race__all btn__control'>Race</button>
      <button class="reset__all btn__control">Reset</button>
      <button class="addRandomCard btn">Generaator Card</button>
    </div>
  </div>
    `;

    this.container.append(pageHeader);
  }

  render() {
    this.renderCreateCarComponent();
    return this.container;
  }
}
