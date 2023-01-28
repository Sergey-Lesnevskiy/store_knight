import './pageFooter.css';
import { Component } from '../../templates/components';

export class Footer extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageFooter(): void {
    const pageFooter = document.createElement('div');
    pageFooter.classList.add('footer__container');
    pageFooter.innerHTML = `
    <a class="footer__logo" href="https://github.com/Sergey-Lesnevskiy" target="_blank">
      <img src="./images/logo-github.svg" width="32" alt="Github account">
    </a>
    <a class="footer__logo" href="https://rs.school/js/" target="_blank">
      <img src="./images/logo-rs.svg" width="56" alt="The Rolling Scopes logotype">
    </a>
    <span>©2023</span>
`;

    this.container.append(pageFooter);
  }

  render(): HTMLElement {
    this.renderPageFooter();
    return this.container;
  }
}
