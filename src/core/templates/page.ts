export abstract class Page {
  protected container: HTMLElement;

    static TextObject = {};
    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('div');
        headerTitle.innerHTML = text;
        return headerTitle;
    }
    protected createElement(text: string ) {
      const headerTitle = document.querySelector('.shopping-cart__content');
      if(headerTitle)
      headerTitle.innerHTML = text;
      return headerTitle;
  }
    render() {
        return this.container;
    }
}
