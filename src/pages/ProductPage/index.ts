import { Page } from "../../core/templates/page";


export class ProductPage extends Page{

static TextObgect = {
    MainTitle: 'Product Page'
}

constructor(id:string){
  super(id);
}

render(){
const title = this.createHeaderTitle(ProductPage.TextObgect.MainTitle);
this.container.append(title);
return this.container;
}
}