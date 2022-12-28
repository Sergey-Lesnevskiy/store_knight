import { Page } from '../../core/templates/page';

export class ErrorPage extends Page {
  private errorType: string;
  static TextObject: { [prop: string]: string } = {
    '404': 'Error! The page is not found',
  };
  constructor(id: string, errorType: string) {
    super(id);
    this.errorType = errorType;
  }
  render() {
    const title = ErrorPage.TextObject[this.errorType];
    this.container.append(title);
    return this.container;
  }
}
