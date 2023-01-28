import { Page } from '../../core/templates/page';

export class ErrorPage extends Page {
  private errorType: string;

  constructor(id: string, errorType: string) {
    super(id);
    this.errorType = errorType;
  }
  render(): HTMLElement {
    this.container.innerHTML = `
    <section class="error">
      <div class="error__container">
        <img class="error__image" src="./images/error-swords.svg" width="52" alt="">
        <h1 class="error__title">404 Error</h1>
        <p class="error__description">Page not found</p>
      </div>
    </section>
    `;
    return this.container;
  }
}
