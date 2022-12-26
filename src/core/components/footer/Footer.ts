import '../../../components/pageHeader/pageHeader'
import { Component } from "../../templates/components";
import { PageId } from "../../../pages/app/app";



export class Footer extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

renderPageFooter(){
       const pageFooter = document.createElement('div');
       pageFooter.classList.add('footer__container')
       pageFooter.innerHTML=

  `
    <a href="#"><img src="" alt="GitHub"></a>
    <a href="#"><img src="" alt="RS School"></a>
    <span>©2023</span>

`


  this.container.append(pageFooter)
}

  render (){
    this.renderPageFooter()
    return  this.container;
  }
}
