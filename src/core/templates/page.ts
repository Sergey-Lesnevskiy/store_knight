export abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('main');
    this.container.id = id;
  }

  render(): HTMLElement {
    return this.container;
  }
}
